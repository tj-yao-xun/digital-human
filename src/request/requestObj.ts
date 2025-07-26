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
export interface DhAudio {
  audio_seconds: number; //  音频时长秒
}
export interface DhBackgroundConfig {
  dh_uuid: string; //  数字人ID
  background_type: number; //  背景类型，1 默认，2 透明，3 自定义
  image_path: string; //  图片路径
  layout_type: number; //  布局类型，1 全屏，2 包裹数字人
}
export interface DhBaseConf {
  aspect_ratio: number; //  视频比例，1 16:9 ，2 9:16 ，3 4:3，4 16:10，5 2.35:1，6 1:1，7 21:9
  digital_humans: DhDigitalHumans[]; //  多数字人配置
  subtitle_config: DhSubtitleConfig; //  字幕配置
}
export interface DhContentAudio {
  visible: boolean; //  是否显示
  weight: number; //  权重
  start_seconds: number; //  开始秒数
  end_seconds: number; //  结束秒数
  as_audio_source: boolean; //  是否作为声源
  start_sync_type: number; //  开始时间同步类型，1同步，2先于播报开始时间，3后于播报开始时间
  start_offset_seconds: number; //  开始时间偏移秒数
}
export interface DhContentDisplay {
  content_uuid: string; //  内容区ID
  content_type: number; //  内容类型，1 Image，2 PDF，3 PPT，4 Video，5 Audio
  content_images: DhContentImages[]; //  图片类内容
  content_video: DhContentVideo[]; //  视频类内容
  content_audio: DhContentAudio[]; //  音频类内容
}
export interface DhContentImages {
  visible: boolean; //  是否显示
  weight: number; //  权重
  page_no: number; //  页码
  start_sync_type: number; //  开始时间同步类型，1同步，2先于播报开始时间，3后于播报开始时间
  start_offset_seconds: number; //  开始时间偏移秒数
  end_sync_type: number; //  结束时间同步类型，1同步，2先于播报开始时间，3后于播报开始时间
  end_offset_seconds: number; //  结束时间偏移秒数
  full_screen: boolean; //  是否全屏显示
  enable_position_change: boolean; //  是否开启位置变换
  position_change: DhPositionChange; //  位置变换信息
}
export interface DhContentLayout {
  content_uuid: string; //  内容区ID
  layout: DhRect; //  布局
}
export interface DhContentUpload {
  file_type: number; //  内容类型 1 image，2 pdf，3 ppt，4 video，5 audio
  content_uuid: string; //  内容区ID
  old_file_path_list: string[]; //  原文件路径
  processing_file_path_list: string[]; //  加工后文件路径
  remove_logo: boolean; //  是否去除LOGO
  logo_area: DhRect; //  LOGO区域
}
export interface DhContentVideo {
  visible: boolean; //  是否显示
  weight: number; //  权重
  start_seconds: number; //  开始秒数
  end_seconds: number; //  结束秒数
  as_audio_source: boolean; //  是否作为声源
  start_sync_type: number; //  开始时间同步类型，1同步，2先于播报开始时间，3后于播报开始时间
  start_offset_seconds: number; //  开始时间偏移秒数
  full_screen: boolean; //  是否全屏显示
  enable_position_change: boolean; //  是否开启位置变换
  position_change: DhPositionChange; //  位置变换信息
}
export interface DhDigitalDisplay {
  dh_uuid: string; //  数字人ID
  visible: boolean; //  是否显示
  weight: number; //  权重
  start_sync_type: number; //  开始时间同步类型，1同步，2先于播报开始时间，3后于播报开始时间
  start_offset_seconds: number; //  开始时间偏移秒数
  end_sync_type: number; //  结束时间同步类型，1同步，2先于播报开始时间，3后于播报开始时间
  end_offset_seconds: number; //  结束时间偏移秒数
  full_screen: boolean; //  是否全屏显示
  enable_position_change: boolean; //  是否开启位置变换
  position_change: DhPositionChange; //  位置变换信息
}
export interface DhDigitalHumans {
  avatar: string; //  数字人形象
  voice: string; //  数字人声音
  name: string; //  数字人名称
  dh_uuid: string; //  数字人ID
}
export interface DhDigitalLayout {
  dh_uuid: string; //  数字人ID
  layout: DhRect; //  布局
}
export interface DhGlobalBackgroundSound {
  open_global_bg_sound: boolean; //  开启全局背景音
  audio_url: string; //  音乐链接
  is_loop: boolean; //  是否循环
  audio_start_second: number; //  开始秒数
  audio_end_second: number; //  结束秒数
}
export interface DhGlobalLayout {
  digital_layout: DhDigitalLayout[]; //  数字人布局
  content_layout: DhContentLayout[]; // 内容布局
}
export interface DhImages {
  digital_human_id: string; //  数字人形象ID
  digital_human_name: string; //  数字人形象名称
  digital_human_url: string; //  数字人形象URL
}
export interface DhOneBaseConf {
  dh_video_no: string; //  数字人视频编码
  preview_image_url: string; //  预览图
  remarks: string; //  备注
  dh_create_state: number; //  数字人状态，0未创建，1创建中，2创建完成
  expected_seconds: number; //  预计时长，秒
  expected_points: number; //  预计消耗积分
  actual_seconds: number; //  实际时长，秒
  actual_points: number; //  实际消耗积分
  finished_product_url: string; //  成品视频URL地址
}
export interface DhPdf {
  pdf_image_index: number; //  PPT图片顺序
  pdf_image_no: string; //  PPT图片编码
  pdf_image_url: string; //  PPT图片URL
}
export interface DhPositionChange {
  change_type: number; //  变化方式，1位置直接变换，2位置平滑移动，3点位顺序变换，4点位顺序移动
  duration: number; //  变化时间，秒
  key_points: DhRect[]; //  变化点位
}
export interface DhPpt {
  ppt_image_index: number; //  PPT图片顺序
  ppt_image_no: string; //  PPT图片编码
  ppt_image_url: string; //  PPT图片URL
}
export interface DhRect {
  x: number; //  x 坐标
  y: number; //  y 坐标
  width: number; //  宽度
  height: number; //  高度
}
export interface DhScriptSetting {
  sequence_number: number; //  播报序号
  dh_uuid: string; //  数字人ID
  voice_source: number; //  音频来源，1数字人，2视频，3音频
  script_context: string; //  播报稿
  dh_visible: boolean; //  数字人是否显示
  digital_display: DhDigitalDisplay[]; //  数字人位置设置
  content_visible: boolean; //  内容区是否显示
  content_setting: DhContentDisplay[]; //  内容区位置设置
}
export interface DhSound {
  speaker_id: string; //  数字人声音ID
  speaker_name: string; //  数字人声音名称
  speaker_url: string; //  数字人声音URL
}
export interface DhSubtitleConfig {
  enable: boolean; //  是否添加字幕
  font_color: string; //  字幕颜色
  font_size: number; //  文字大小
  add_border: boolean; //  是否添加边框
  border_color: string; //  边框颜色
}
export interface DhVideo {
  video_seconds: number; //  视频时长秒
}
export interface UserInfo {
  user_id: number; //  用户ID
  permanent_points_number: number; //  永久积分
  temporary_points_number: number; //  临时积分
  nickname: string; //  用户昵称
  avatar_url: string; //  用户头像
  identity: number; //  用户身份，0普通用户，1管理员，2审计员，99超级管理员
  user_state: number; //  用户状态，0正常，1禁用
}
