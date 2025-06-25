import {
  type App,
  type NullString,
  type NullInt,
  type AppSettings,
  type AppSettingsEdit,
  type AppUser,
  type AppPlatformSet,
} from "./requestObj.ts";
export interface AddAppRequest {
  app_name: string; //  应用名称
  app_desc: string | null; //  应用描述
  enabled_time: string | null; //  启用时间
  down_time: string | null; //  停用时间
  admin_uid: number | null; //  管理员ID
}
export interface AddAppReply {
  data: App;
}
export interface AppInfoRequest {
  app_id: string; //  应用ID
}
export interface AppInfoReply {
  data: App;
}
export interface AppListRequest {
  app_id_list: string[] | null; //  应用ID列表
  app_name: NullString | null; //  应用名称
  app_state: NullInt | null; //  应用状态，0启用，1禁用
  created_user: number[] | null; //  创建人
  created_at_start: NullString | null; //  创建时间开始
  created_at_end: NullString | null; //  创建时间结束
  updated_user: number[] | null; //  更新人
  updated_at_start: NullString | null; //  更新时间开始
  updated_at_end: NullString | null; //  更新时间结束
  page_no: number | null; //  页码
  page_size: number | null; //  每页数量
  rule_out_no: string[] | null; //  排除列表
  sort_filed: NullString | null; //  排序字段
  is_desc: boolean | null; //  是否倒序
}
export interface AppListReply {
  data_list: App[];
  page_no: number; //  页码
  page_size: number; //  每页数量
  count: number; //  总数
}
export interface UpdateAppRequest {
  app_id: string; //  应用ID
  app_name: NullString | null; //  应用名称
  app_desc: NullString | null; // 应用描述
  admin_uid: NullInt | null; //  管理员ID
  enabled_time: NullString | null; //  启用时间
  down_time: NullString | null; //  停用时间
}
export interface UpdateAppReply {
  data: App;
}
export interface UpdateAppStateRequest {
  app_id: string; //  应用ID
  app_state: number; //  状态
}
export interface UpdateAppStateReply {
  data: App;
}
export interface AppSettingsRequest {
  app_id: string; //  应用ID
}
export interface AppSettingsReply {
  data_list: AppSettings[];
}
export interface UpdateAppSettingsRequest {
  data_list: AppSettingsEdit[]; //  应用ID
}
export interface UpdateAppSettingsReply {
  data_list: AppSettings[];
}
export interface UpdateAppSettingsStateRequest {
  app_id: string; //  应用ID
  settings_id: string; //  应用ID
  settings_state: number; //  状态
}
export interface UpdateAppSettingsStateReply {
  data_list: AppSettings[];
}
export interface ApplicationUsersRequest {
  app_id: string; //  应用ID
}
export interface ApplicationUsersReply {
  data_list: AppUser[];
}
export interface AddApplicationUserRequest {
  app_id: string;
  user_id_list: number[];
}
export interface AddApplicationUserReply {
  data_list: AppUser[];
}
export interface UpdateApplicationUserStateRequest {
  app_id: string;
  user_id_list: number[];
  set_state: number;
}
export interface UpdateApplicationUserStateReply {
  data_list: AppUser[];
}
export interface SetApplicationSecretRequest {
  app_id: string;
}
export interface SetApplicationSecretReply {
  app_id: string; //  应用ID
  app_secret: string; //  应用密钥
}
export interface SetApplicationWeChatRequest {
  app_id: string; //  应用ID
  platform_app_id: string; //  平台ID
  platform_secret: string; //  平台密钥
}
export interface SetApplicationWeChatReply {
  data: AppPlatformSet;
}
