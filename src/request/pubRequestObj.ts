import {
  type NullString,
  type NullInt,
  type AutoIDConf,
} from "./requestObj.ts";
export interface AutoIDConfListRequest {
  app_id_list: string[]; //  应用ID列表
  use_table_name: NullString; //  表名
  column_name: NullString; //  列名
  id_type_list: string[]; //  id类型,int,string
  refresh_type_list: number[]; //  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年
  auto_id_state: NullInt; //  状态
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
export interface AutoIDConfListReply {
  data_list: AutoIDConf[];
  page_no: number; //  页码
  page_size: number; //  每页数量
  count: number; //  总数
}
export interface AddAutoIDConfRequest {
  app_id: string; //  应用ID
  use_table_name: string; //  表名称
  column_name: string; //  列名称
  id_type: string; //  id类型,int,string
  expression_format: NullString; //  表达式TEST_{YYYY}{MM}{DD}{hh}{mm}{ss}_{NUMBER}
  filling: NullString; //  填充值，string类型可用，只一位
  n_length: number; //  数字长度
  n_increment: number; //  步长
  refresh_type: number; //  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年
  st_start: number; //  开始id
  auto_id_state: number; //  状态，0启用，1禁用
}
export interface AddAutoIDConfReply {
  data: AutoIDConf;
}
export interface AutoIDConfRequest {
  app_id: string; //  应用ID
  table_name: string; //  表名称
  column_name: string; //  列名称
}
export interface AutoIDConfReply {
  data: AutoIDConf;
}
export interface UpdateAutoIDConfRequest {
  app_id: string; //  应用ID
  use_table_name: string; //  表名称
  column_name: string; //  列名称
  id_type: NullString; //  id类型,int,string
  expression_format: NullString; //  表达式TEST_{YYYY}{MM}{DD}{hh}{mm}{ss}_{NUMBER}
  filling: NullString; //  填充值，string类型可用，只一位
  n_length: NullInt; //  数字长度
  n_increment: NullInt; //  步长
  refresh_type: NullInt; //  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年
  st_start: NullInt; //  开始id
}
export interface UpdateAutoIDConfReply {
  data: AutoIDConf;
}
export interface UpdateAutoIDConfStateRequest {
  app_id: string; //  应用ID
  table_name: string; //  表名称
  column_name: string; //  列名称
}
export interface UpdateAutoIDConfStateReply {
  data: AutoIDConf;
}
