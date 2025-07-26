import type {
  GetUserInfoReplay,
  GetUserInfoRequest,
  LoginReply,
  LoginRequest,
  UserPointsRechargeReplay,
  UserPointsRechargeRequest,
} from "@/request/usersRequestObj.ts";
import { request } from "./request.ts";
import { type HeaderObj, verify } from '@/request/verify.ts'
export class UsersRequest {
  /**
   * 登陆接口
   * @param callback 回调函数，接收 LoginReply 类型的结果数据
   * @param username  用户名 (必填)
   * @param password  密码 (必填)
   * @param sysUUID  密码 (必填)
   */
  public Login(
    callback: (data: LoginReply) => void,
    username: string,
    password: string,
    sysUUID: string,
  ): void {
    // 构建请求对象
    const req: LoginRequest = {
      username: username,
      password: password,
      sys_uuid: sysUUID,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/login/account";
    const headerObj: HeaderObj = verify.buildHeader(false);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: LoginReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取用户信息
   * @param callback 回调函数，接收 GetUserInfoReply 类型的结果数据
   */
  public GetUserInfo(callback: (data: GetUserInfoReplay) => void): void {
    // 构建请求对象
    const req: GetUserInfoRequest = {};
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/info";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: GetUserInfoReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 用户充值积分
   * @param callback 回调函数，接收 UserPointsRechargeReply 类型的结果数据
   * @param pointCardNo  积分卡编码 (必填)
   * @param pointCardCheckCode  积分卡校验码 (必填)
   */
  public UserPointsRecharge(
    callback: (data: UserPointsRechargeReplay) => void,
    pointCardNo: string,
    pointCardCheckCode: string,
  ): void {
    // 构建请求对象
    const req: UserPointsRechargeRequest = {
      point_card_no: pointCardNo,
      point_card_check_code: pointCardCheckCode,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/points/recharge";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: UserPointsRechargeReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
}
export const usersRequest = new UsersRequest();
export default usersRequest;
