export interface NullString {
  valid: boolean;
  data: string;
}
export interface NullInt {
  valid: boolean;
  data: number;
}
export interface NullBool {
  valid: boolean;
  data: boolean;
}
export interface OkBody {
  is_ok: boolean;
}
export interface SearchCommon {
  created_user: number[] | null; // 创建人
  created_at_start: string | null; // 创建时间开始
  created_at_end: string | null; // 创建时间结束
  updated_user: number[] | null; // 更新人
  updated_at_start: string | null; // 更新时间开始
  updated_at_end: string | null; // 更新时间结束
  page_no: number[] | null; // 页码
  page_size: number[] | null; // 每页数量
  rule_out_no: string[] | null; // 排除列表
  sort_filed: string | null; // 排序字段
  is_desc: boolean | null; // 是否倒序
}
export interface App {
  app_id: string; //  应用ID
  app_name: string; //  应用名称
  admin_user: BaseUserInfo; //  管理员ID
  enabled_time: string; //  启用时间
  down_time: string; //  停用时间
  app_state: number; //  应用状态，0启用，1禁用
  created_user: BaseUserInfo; //  操作员ID
  created_at: BaseTimeInfo; //  添加时间
  updated_user: BaseUserInfo; //  最后修改人ID
  updated_at: BaseTimeInfo; //  最后修改时间
}
export interface AppPlatformSet {
  app_id: string; //  应用ID
  platform_type: string; //  平台类型，wechat
  platform_app_id: string; //  平台ID
  platform_secret: string; //  平台密钥
  platform_state: number; //  状态，0启用，1禁用
  created_user: BaseUserInfo; //  操作员ID
  created_at: BaseTimeInfo; //  添加时间
  updated_user: BaseUserInfo; //  最后修改人ID
  updated_at: BaseTimeInfo; //  最后修改时间
}
export interface AppSettings {
  setting_id: string; //  设置ID
  app_id: string; //  应用ID
  setting_key: string; //  设置KEY
  setting_value: string; //  设置VALUE
  setting_state: number; //  设置状态，0启用，1禁用
  created_user: BaseUserInfo; //  操作员ID
  created_at: BaseTimeInfo; //  添加时间
  updated_user: BaseUserInfo; //  最后修改人ID
  updated_at: BaseTimeInfo; //  最后修改时间
}
export interface AppSettingsEdit {
  setting_id: string; //  设置ID
  app_id: string; //  应用ID
  setting_key: string; //  设置KEY
  setting_value: string; //  设置VALUE
  setting_state: number; //  设置状态，0启用，1禁用
}
export interface AppUser {
  app_id: string; //  应用ID
  user_id: number; //  用户ID
  set_state: number; //  状态，0启用，1禁用
  created_user: BaseUserInfo; //  操作员ID
  created_at: BaseTimeInfo; //  添加时间
  updated_user: BaseUserInfo; //  最后修改人ID
  updated_at: BaseTimeInfo; //  最后修改时间
}
export interface AutoIDConf {
  app_id: string; //  应用ID
  use_table_name: string; //  表名称
  column_name: string; //  列名称
  id_type: string; //  id类型,int,string
  expression_format: string; //  表达式TEST_{YYYY}{MM}{DD}{hh}{mm}{ss}_{NUMBER}
  filling: string; //  填充值，string类型可用，只一位
  n_length: number; //  数字长度
  n_increment: number; //  步长
  refresh_type: number; //  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年
  st_now: number; //  现在的id
  st_start: number; //  开始id
  last_time: string; //  最后生成时间
  auto_id_state: number; //  状态，0启用，1禁用
  created_user: BaseUserInfo; //  操作员ID
  created_at: BaseTimeInfo; //  添加时间
  updated_user: BaseUserInfo; //  最后修改人ID
  updated_at: BaseTimeInfo; //  最后修改时间
}
export interface BaseTimeInfo {
  data_string: string; //  字符串类型时间
  data_no: number; //  数字类型时间
}
export interface BaseUserInfo {
  user_type: string; //  用户类型，用户，管理员，开发人员，系统管理员
  user_id: number; //  用户ID
  username: string; //  用户名
  user_nickname: string; //  用户昵称
}
export interface User {
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  app_id: string; //  应用ID
  user_id: number; //  用户ID
  username: string; //  用户名
  nickname: string; //  昵称
  avatar_url: string; //  头像地址
  user_state: number; //  应用状态，0启用，1禁用
  created_user: BaseUserInfo; //  操作员ID
  created_at: BaseTimeInfo; //  添加时间
  updated_user: BaseUserInfo; //  最后修改人ID
  updated_at: BaseTimeInfo; //  最后修改时间
}
export interface UserAddress {
  address_id: string; //  地址ID
  app_id: string; //  应用ID
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  user_id: number; //  用户ID
  address_type: NullString; //  地址类型，tag标记
  recipient_name: string; //  收件人姓名
  phone_number: string; //  联系电话
  nation_code: NullString; //  国家编码
  province_code: string; //  省份
  city_code: string; //  城市
  district_code: string; //  区县
  detailed_address: string; //  详细地址
  postal_code: NullString; //  邮政编码
  is_default: boolean; //  是否为默认地址
  user_address_state: number; //  应用状态，0启用，1禁用
  created_user: BaseUserInfo; //  操作员ID
  created_at: BaseTimeInfo; //  添加时间
  updated_user: BaseUserInfo; //  最后修改人ID
  updated_at: BaseTimeInfo; //  最后修改时间
}
export interface UserContact {
  contact_id: string; //  联系方式ID
  app_id: string; //  应用ID
  user_type: number; //  人员类型，0用户，1管理员，98开发人员，99系统管理员
  user_id: number; //  用户ID
  contact_type: number; //  联系方式类型，1电话，2email，3qq，4wechat
  contact_val: string; //  联系方式内容
  contact_state: number; //  状态，0正常，1禁用
  created_user: BaseUserInfo; //  操作员ID
  created_at: BaseTimeInfo; //  添加时间
  updated_user: BaseUserInfo; //  最后修改人ID
  updated_at: BaseTimeInfo; //  最后修改时间
}
