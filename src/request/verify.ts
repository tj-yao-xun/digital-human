import * as CryptoJS from "crypto-js";
import { Md5 } from "ts-md5";
import PromptBox from "@/stores/promptBox.ts";
import pako from "pako";
// 默认的SHA256加密密钥
export const DefaultSha256Key = new Uint8Array([
  199, 37, 179, 101, 149, 84, 171, 29, 64, 183, 4, 31, 178, 152, 79, 44, 161,
  130, 232, 142, 237, 84, 56, 170, 20, 9, 101, 244, 97, 225, 68, 203,
]);
/**
 * 请求头封装对象
 * @class HeaderObj
 * @property {Record<string, string>} headers - 请求头键值对
 * @property {boolean} haveError - 是否发生错误标识
 */
export class HeaderObj {
  headers: Record<string, string>;
  haveError: boolean;
  /**
   * @constructor
   * @param {Record<string, string> | null} headers - 初始请求头
   * @param {boolean} [haveError=false] - 错误状态标识
   */
  constructor(
    headers: Record<string, string> | null,
    haveError: boolean = false,
  ) {
    if (headers != null) {
      this.headers = headers;
    } else {
      this.headers = {};
    }
    this.haveError = haveError;
  }
}
/**
 * 请求校验工具类
 * @class Verify
 * @description 封装请求签名、加密等相关安全操作
 */
export class Verify {
  /**
   * 构建带签名的请求头
   * @param {string} reqBody - 请求体原始数据
   * @param {boolean} isLogin - 是否登录状态请求
   * @returns {HeaderObj} 包含签名信息的请求头对象
   */
  buildManipulationHeader(reqBody: string, isLogin: boolean): HeaderObj {
    const nowSeconds: number = Math.floor(Date.now() / 1000); // 获取当前时间戳（秒）
    const headers: Record<string, string> = {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      "APP-ID":"ai-tools-platform",
      "X-Timestamp": nowSeconds.toString(), // 时间戳用于防止重放攻击
    };
    let share256Key: Uint8Array;
    if (isLogin) {
      // 登录状态使用用户专属密钥
      const userToken: string | null =
        window.localStorage.getItem("user-token");
      if (userToken != null) {
        headers["X-User-Token"] = userToken;
      } else {
        PromptBox.errorPromptBox("ERROR", "没有登陆信息");
        return new HeaderObj(null, true);
      }
      // 从本地存储获取用户专属密钥
      const share256KeyStr = window.localStorage.getItem("share256-key");
      if (share256KeyStr != null) {
        const share256KeyNumberList: number[] = JSON.parse(share256KeyStr);
        share256Key = new Uint8Array(share256KeyNumberList);
      } else {
        PromptBox.errorPromptBox("ERROR", "没有登陆信息");
        return new HeaderObj(null, true);
      }
    } else {
      // 非登录状态使用默认密钥
      share256Key = DefaultSha256Key;
      headers["X-User-Token"] = "";
    }
    // 生成请求签名（请求体+时间戳的HMAC-SHA256）
    headers["X-Signature"] = this.generateHMACSHA256(
      share256Key,
      reqBody + nowSeconds.toString(),
    );
    return new HeaderObj(headers);
  }
  /**
   * 构建基础请求头
   * @param {boolean} isLogin - 是否包含用户令牌
   * @returns {HeaderObj} 基础请求头对象
   */
  buildHeader(isLogin: boolean): HeaderObj {
    const nowSeconds: number = Math.floor(Date.now() / 1000);
    const headers: Record<string, string> = {
      "X-Requested-With": "XMLHttpRequest",
      "APP-ID":"ai-tools-platform",
      "Content-Type": "application/json",
      "X-Timestamp": nowSeconds.toString(),
    };
    if (isLogin) {
      const userToken: string | null =
        window.localStorage.getItem("user-token");
      if (userToken != null) {
        headers["X-User-Token"] = userToken;
      } else {
        PromptBox.errorPromptBox("ERROR", "没有登陆信息");
        return new HeaderObj(null, true);
      }
    }
    return new HeaderObj(headers);
  }
  /**
   * 生成HMAC-SHA256签名（私有方法）
   * @private
   * @param {Uint8Array | string} key - 加密密钥
   * @param {string} data - 原始数据
   * @returns {string} 十六进制格式的签名
   */
  private generateHMACSHA256(key: Uint8Array | string, data: string): string {
    // 标准化输入参数
    const keyS = typeof key === "string" ? new TextEncoder().encode(key) : key;
    const dataS: string = Md5.hashStr(data);
    const useData = new TextEncoder().encode(dataS);
    // 将Uint8Array转换为CryptoJS支持的WordArray格式
    const keyWA = CryptoJS.lib.WordArray.create(keyS);
    const dataWA = CryptoJS.lib.WordArray.create(useData);
    // 使用 CryptoJS 计算 HMAC-SHA256
    const signature = CryptoJS.HmacSHA256(dataWA, keyWA);
    // 转换为十六进制字符串
    return signature.toString(CryptoJS.enc.Hex);
  }
  /**
   * 构建加密请求参数（GZIP压缩 + Base64编码）
   * @param {string} data - 原始字符串数据
   * @returns {string|null} 处理后的加密字符串
   */
  buildEncipherParams(data: string): string | null | undefined {
    try {
      const dataArray: Uint8Array = new TextEncoder().encode(data);
      const binaryUnit: Uint8Array = pako.gzip(dataArray);
      return btoa(String.fromCharCode(...binaryUnit));
    } catch (e) {
      PromptBox.errorPromptBox("ERROR", (e as Error).toString());
      return null;
    }
  }
}
// 导出工具类单例实例
export const verify = new Verify();
export default verify;
