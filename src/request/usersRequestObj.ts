import {
  type NullInt,
  type User,
  type NullString,
  type SearchCommon,
  type UserAddress,
  type NullBool,
  type UserContact,
} from "./requestObj.ts";
export interface LoginRequest {
  username: string; //  用户名
  password: string; //  加密后密码，使用AES加密算法
}
export interface LoginReply {
  user_id: number; //  用户ID
  user_token: string; //  用户登陆Token
  user_flash_token: string; //  用户刷新Token
  share256_key: number[]; //  share256加密Key
  username: string; //  用户名称
  user_nick_name: string; //  用户昵称
  avatar_url: string; //  用户头像链接
  user_state: number; //  用户状态
  permission_list: string[]; //  权限列表
}
export interface LayoutRequest {
  user_token: string;
}
export interface AddUserRequest {
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  app_id: string; //  应用ID
  username: string; //  用户名
  nickname: string; //  昵称
  avatar_url: NullInt; //  头像地址
  user_state: number; //  应用状态，0启用，1禁用
}
export interface AddUserReply {
  data: User;
}
export interface UserInfoRequest {
  app_id: string; //  应用ID
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  user_id: number; //  用户ID
}
export interface UserInfoReply {
  data: User;
}
export interface UserListRequest {
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  app_id_list: string[]; //  应用ID列表
  user_id_list: number[]; //  用户ID列表
  username: NullString; //  用户名称
  nickname: NullString; //  用户昵称
  user_state: NullInt; //  用户状态，0启用，1禁用
  common_data: SearchCommon; //  搜索通用状态
}
export interface UserListReply {
  data_list: User[];
  page_no: number; //  页码
  page_size: number; //  每页数量
  count: number; //  总数
}
export interface UpdateUserRequest {
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  app_id: string; //  应用ID
  user_id: number; //  用户ID
  username: string; //  用户名
  nickname: NullString; //  昵称
  avatar_url: NullString; //  头像地址
}
export interface UpdateUserReply {
  data: User;
}
export interface UpdateUserStateRequest {
  app_id: string; //  应用ID
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  user_id: number; //  用户ID
  user_state: number; //  用户状态，0启用，1禁用
}
export interface UpdatePasswordRequest {
  user_id: number; //  用户ID
  old_password: string; //  原始密码
  new_password: string; //  新密码
}
export interface UpdatePasswordAdminRequest {
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  app_id: string; //  应用ID
  user_id: number; //  用户ID
  new_password: string; //  新密码
}
export interface UserAddressRequest {
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  app_id: string; //  应用ID
  user_id: number; //  用户ID
  address_id: string; //  地址ID
}
export interface UserAddressReply {
  data_list: UserAddress[];
}
export interface UserAddressListRequest {
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  app_id: string; //  应用ID
  user_id_list: number[]; //  用户ID
  address_type_list: string[]; //  地址类型
  province_code_list: string[]; //  省份
  city_code_list: string[]; //  市
  district_code_list: string[]; //  区县
  is_default: NullBool; //  是否默认
  address_state: NullInt; //  应用状态，0启用，1禁用
  common_data: SearchCommon; //  搜索通用状态
}
export interface UserAddressListReply {
  data_list: UserAddress[];
  page_no: number; //  页码
  page_size: number; //  每页数量
  count: number; //  总数
}
export interface UserContactRequest {
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  app_id: string; //  应用ID
  user_id: number; //  用户ID
}
export interface UserContactReply {
  data_list: UserContact[];
}
