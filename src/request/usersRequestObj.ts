import { type UserInfo } from "./requestObj.ts";
export interface LoginRequest {
  username: string; //  用户名
  password: string; //  密码
  sys_uuid: string; //  密码
}
export interface LoginReply {
  user: UserInfo; //  用户信息
  x_user_token: string; //  用户token
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface GetUserInfoRequest {}
export interface GetUserInfoReplay {
  user: UserInfo; //  用户信息
}
export interface UserPointsRechargeRequest {
  point_card_no: string; //  积分卡编码
  point_card_check_code: string; //  积分卡校验码
}
export interface UserPointsRechargeReplay {
  user_point: number; //  用户积分
  recharge_points: number; //  充值积分
}
