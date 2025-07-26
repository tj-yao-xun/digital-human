import {
  type DhPpt,
  type DhPdf,
  type DhImages,
  type DhSound,
  type DhBaseConf,
  type DhGlobalBackgroundSound,
  type DhBackgroundConfig,
  type DhContentUpload,
  type DhGlobalLayout,
  type DhScriptSetting,
  type DhOneBaseConf,
} from "./requestObj.ts";
export interface DhPptAnalysisRequest {
  dh_video_no: string; //  数字人视频编码
  ppt_url: string; //  ppt地址
}
export interface DhPptAnalysisReplay {
  data_list: DhPpt[]; //  PPT分析列表/PDF分析列表
}
export interface DhPDFAnalysisRequest {
  dh_video_no: string; //  数字人视频编码
  pdf_url: string; //  ppt地址
}
export interface DhPDFAnalysisReplay {
  data_list: DhPdf[]; //  PPT分析列表/PDF分析列表
}
export interface DhVideoAnalysisRequest {
  dh_video_no: string; //  数字人视频编码
  video_url: string; //  视频地址
}
export interface DhVideoAnalysisReplay {
  duration: number; //  视频时长秒
  first_image_url: string; //  头图地址
}
export interface DhAudioAnalysisRequest {
  dh_video_no: string; //  数字人视频编码
  audio_url: string; //  音频地址
}
export interface DhAudioAnalysisReplay {
  duration: number; //  音频时长秒
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DhImagesListRequest {

}
export interface DhImagesListReplay {
  data_list: DhImages[]; //  数字人形象列表
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DhSoundListRequest {}
export interface DhSoundListReplay {
  data_list: DhSound[]; //  数字人声音列表
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DhCreatedDigitalHumanRequest {}
export interface DhCreatedDigitalHumanReplay {
  dh_video_no: string; //  数字人视频编码
}
export interface DhPageConfGetRequest {
  dh_video_no: string; //  数字人视频编码
}
export interface DhPageConfGetReplay {
  dh_video_no: string; //  数字人视频编码
  video_type: number; //  视频类型,1 纯数字人,2 自定义背景数字人,3 透明数字人,4 内容播报数字人,5 纯内容配音
  base_conf: DhBaseConf; //  基础配置
  global_background_sound: DhGlobalBackgroundSound; //  背景音配置
  global_background_image: string; //  全局背景图
  background_config: DhBackgroundConfig[]; //   背景图设置
  content_upload: DhContentUpload[]; //  内容上传配置
  global_layout: DhGlobalLayout; //  全局设置
  script_setting: DhScriptSetting[]; //  文稿播报设置
  preview_image_url: string; //  预览图地址
  characters_number: number; //  文字数
  estimated_duration: number; //  预计时长，秒
  expected_use_points: number; //  预计使用积分
  finished_video_url: string; //  成品视频URL
  digital_human_generation_stage: number; //  数字人生成阶段
  digital_human_remarks: string; //  数字人备注
}
export interface DhPageConfSaveRequest {
  dh_video_no: string; //  数字人视频编码
  video_type: number; //  视频类型
  base_conf: DhBaseConf; //  基础配置
  global_background_sound: DhGlobalBackgroundSound; //  背景音配置
  global_background_image: string; //  全局背景图
  background_config: DhBackgroundConfig[]; //   背景图设置
  content_upload: DhContentUpload[]; //  内容上传配置
  global_layout: DhGlobalLayout; //  全局设置
  script_setting: DhScriptSetting[]; //  文稿播报设置
}
export interface DhPageConfSaveReplay {
  dh_video_no: string; //  数字人视频编码
}
export interface DhPreviewImageRequest {
  dh_video_no: string; //  数字人视频编码
}
export interface DhPreviewImageReplay {
  image_url: string; //  预览图URL
  word_num: number; //  文字数
  expected_seconds: number; //  预计秒数
  expected_points: number; //  预计积分
}
export interface DhVideoGenerateRequest {
  dh_video_no: string; //  数字人视频编码
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DhVideoGenerateReplay {}
export interface DhListRequest {
  page_no: number; //  页面编码
  page_size: number; //  页面每页条数
}
export interface DhListReplay {
  data_list: DhOneBaseConf[]; //  数字人列表
  page_no: number; //  页面编码
  page_size: number; //  页面每页条数
  count: number; //  总数量
}
export interface DhCopyVideoConfRequest {
  dh_video_no: string; //  数字人视频编码
}
export interface DhCopyVideoConfReplay {
  data_list: DhOneBaseConf[]; //  数字人列表
  page_no: number; //  页面编码
  page_size: number; //  页面每页条数
  count: number; //  总数量
}
export interface DhGetOssPolicyTokenRequest {
  dh_video_no: string; //  数字人视频编码
  filename: string; //  文件名
}
export interface DhGetOssPolicyTokenReplay {
  policy: string;
  security_token: string;
  x_oss_signature_version: string;
  x_oss_credential: string;
  x_oss_date: string;
  signature: string;
  host: string;
  dir: string;
}
