import type {AxiosInstance, AxiosRequestHeaders} from "axios";
import axios from "axios";
import PromptBox from "@/stores/promptBox.ts";
/**
 * 接口响应数据结构定义
 * @interface respInter
 * @property {number} code - 响应状态码（0表示成功，非0表示失败）
 * @property {string} msg - 响应消息（通常用于错误描述）
 * @property {string} data - 实际响应数据（JSON字符串格式）
 */
interface respInter {
  code: number;
  msg: string;
  data: string;
}
/**
 * 请求回调函数类型定义
 * @typedef {Function} RequestCallback
 * @param {string} respData - 响应数据字符串
 */
type RequestCallback = (respData: string) => void;
/**
 * HTTP 请求工具类
 * @class Request
 * @description 封装常见 HTTP 请求方法，提供统一的请求处理逻辑
 */
export class Request {
  // 基础 API 地址
  private baseURL: string = "http://ai.time2016.com";
  /**
   * 发起 GET 请求
   * @param {string} url - 请求路径（相对路径）
   * @param {Record<string, string>} headers - 请求头对象
   * @param {RequestCallback} callback - 请求成功回调函数
   */
  public get(
    url: string,
    headers: Record<string, string>,
    callback: RequestCallback,
  ): void {
    this.sendRequest(url, "GET", headers, null, callback);
  }
  /**
   * 发起 POST 请求
   * @param {string} url - 请求路径
   * @param {Record<string, string>} headers - 请求头
   * @param {string} data - 请求体数据（JSON字符串格式）
   * @param {RequestCallback} callback - 成功回调
   */
  public post(
    url: string,
    headers: Record<string, string>,
    data: string,
    callback: RequestCallback,
  ): void {
    this.sendRequest(url, "POST", headers, data, callback);
  }
  /**
   * 发起 PUT 请求
   * @param {string} url - 请求路径
   * @param {Record<string, string>} headers - 请求头
   * @param {string} data - 请求体数据（JSON字符串格式）
   * @param {RequestCallback} callback - 成功回调
   */
  public put(
    url: string,
    headers: Record<string, string>,
    data: string,
    callback: RequestCallback,
  ): void {
    this.sendRequest(url, "PUT", headers, data, callback);
  }
  /**
   * 发起 PATCH 请求
   * @param {string} url - 请求路径
   * @param {Record<string, string>} headers - 请求头
   * @param {string} data - 请求体数据（JSON字符串格式）
   * @param {RequestCallback} callback - 成功回调
   */
  public patch(
    url: string,
    headers: Record<string, string>,
    data: string,
    callback: RequestCallback,
  ): void {
    this.sendRequest(url, "PATCH", headers, data, callback);
  }
  /**
   * 发起 DELETE 请求
   * @param {string} url - 请求路径
   * @param {Record<string, string>} headers - 请求头
   * @param {string} data - 请求体数据（JSON字符串格式）
   * @param {RequestCallback} callback - 成功回调
   */
  public delete(
    url: string,
    headers: Record<string, string>,
    data: string,
    callback: RequestCallback,
  ): void {
    this.sendRequest(url, "DELETE", headers, data, callback);
  }
  /**
   * 统一请求处理方法
   * @private
   * @param {string} url - 请求路径
   * @param {'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'} method - HTTP 方法
   * @param {Record<string, string>} headers - 请求头
   * @param {string | null} data - 请求体数据（适用于POST/PUT等）
   * @param {RequestCallback} callback - 回调函数
   */
  public sendRequest(
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    headers: Record<string, string>,
    data: string | null,
    callback: RequestCallback,
  ): void {
    // 创建 Axios 实例（每个请求独立实例）
    const instance: AxiosInstance = axios.create({
      timeout: 10000, // 10秒超时
      headers: headers, // 自定义请求头
      responseType: "json", // 响应自动解析为JSON
      baseURL: this.baseURL, // 基础地址
    });
    // 发起实际请求
    instance({
      url: url,
      method: method,
      data: data,
    })
      .then((res) => {
        const respData: respInter = res.data;

        // 业务状态码校验
        if (respData.code !== 0) {
          PromptBox.errorPromptBox("ERROR", respData.msg);
          return;
        } else {
          // 执行成功回调（传递data字段内容）
          callback(respData.data);
        }
      })
      .catch((error) => {
        PromptBox.errorPromptBox("ERROR", `网络请求失败: ${error.message}`);
        return;
      });
    return;
  }
}
// 导出单例实例
export const request = new Request();
export default request;
