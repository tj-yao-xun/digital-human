import type {
  DhAudioAnalysisReplay,
  DhAudioAnalysisRequest,
  DhCopyVideoConfReplay,
  DhCopyVideoConfRequest,
  DhCreatedDigitalHumanReplay,
  DhCreatedDigitalHumanRequest,
  DhGetOssPolicyTokenReplay,
  DhGetOssPolicyTokenRequest,
  DhImagesListReplay,
  DhImagesListRequest,
  DhListReplay,
  DhListRequest,
  DhPDFAnalysisReplay,
  DhPDFAnalysisRequest,
  DhPageConfGetReplay,
  DhPageConfGetRequest,
  DhPageConfSaveReplay,
  DhPageConfSaveRequest,
  DhPptAnalysisReplay,
  DhPptAnalysisRequest,
  DhPreviewImageReplay,
  DhPreviewImageRequest,
  DhSoundListReplay,
  DhSoundListRequest,
  DhVideoAnalysisReplay,
  DhVideoAnalysisRequest,
  DhVideoGenerateReplay,
  DhVideoGenerateRequest,
} from "@/request/dhRequestObj.ts";
import { request } from "./request.ts";
import type {
  DhBackgroundConfig,
  DhBaseConf,
  DhContentUpload,
  DhGlobalBackgroundSound,
  DhGlobalLayout,
  DhScriptSetting,
} from "@/request/requestObj.ts";
import { type HeaderObj, verify } from '@/request/verify.ts'
export class DhRequest {
  /**
   * PPT分析
   * @param callback 回调函数，接收 DhPptAnalysisReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   * @param pptURL  ppt地址 (必填)
   */
  public DhPptAnalysis(
    callback: (data: DhPptAnalysisReplay) => void,
    dhVideoNo: string,
    pptURL: string,
  ): void {
    // 构建请求对象
    const req: DhPptAnalysisRequest = {
      dh_video_no: dhVideoNo,
      ppt_url: pptURL,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/ppt/analysis";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhPptAnalysisReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * PDF分析
   * @param callback 回调函数，接收 DhPDFAnalysisReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   * @param pdfURL  ppt地址 (必填)
   */
  public DhPDFAnalysis(
    callback: (data: DhPDFAnalysisReplay) => void,
    dhVideoNo: string,
    pdfURL: string,
  ): void {
    // 构建请求对象
    const req: DhPDFAnalysisRequest = {
      dh_video_no: dhVideoNo,
      pdf_url: pdfURL,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/pdf/analysis";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhPDFAnalysisReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 视频分析
   * @param callback 回调函数，接收 DhVideoAnalysisReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   * @param videoURL  视频地址 (必填)
   */
  public DhVideoAnalysis(
    callback: (data: DhVideoAnalysisReplay) => void,
    dhVideoNo: string,
    videoURL: string,
  ): void {
    // 构建请求对象
    const req: DhVideoAnalysisRequest = {
      dh_video_no: dhVideoNo,
      video_url: videoURL,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/video/analysis";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhVideoAnalysisReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 音频分析
   * @param callback 回调函数，接收 DhAudioAnalysisReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   * @param audioURL  音频地址 (必填)
   */
  public DhAudioAnalysis(
    callback: (data: DhAudioAnalysisReplay) => void,
    dhVideoNo: string,
    audioURL: string,
  ): void {
    // 构建请求对象
    const req: DhAudioAnalysisRequest = {
      dh_video_no: dhVideoNo,
      audio_url: audioURL,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/audio/analysis";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhAudioAnalysisReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 数字人形象列表
   * @param callback 回调函数，接收 DhImagesListReply 类型的结果数据
   */
  public DhImagesList(callback: (data: DhImagesListReplay) => void): void {
    // 构建请求对象
    const req: DhImagesListRequest = {};
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/images/list";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhImagesListReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 数字人声音列表
   * @param callback 回调函数，接收 DhSoundListReply 类型的结果数据
   */
  public DhSoundList(callback: (data: DhSoundListReplay) => void): void {
    // 构建请求对象
    const req: DhSoundListRequest = {};
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/sound/list";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhSoundListReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 创建数字人视频
   * @param callback 回调函数，接收 DhCreatedDigitalHumanReply 类型的结果数据
   */
  public DhCreatedDigitalHuman(
    callback: (data: DhCreatedDigitalHumanReplay) => void,
  ): void {
    // 构建请求对象
    const req: DhCreatedDigitalHumanRequest = {};
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/created/digital/human";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhCreatedDigitalHumanReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取数字人页面
   * @param callback 回调函数，接收 DhPageConfGetReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   */
  public DhPageConfGet(
    callback: (data: DhPageConfGetReplay) => void,
    dhVideoNo: string,
  ): void {
    // 构建请求对象
    const req: DhPageConfGetRequest = {
      dh_video_no: dhVideoNo,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/page/conf/get";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhPageConfGetReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 保存数字人页面
   * @param callback 回调函数，接收 DhPageConfSaveReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   * @param videoType  视频类型 (必填)
   * @param baseConf  基础配置 (必填)
   * @param globalBackgroundSound  背景音配置 (必填)
   * @param globalBackgroundImage  全局背景图 (必填)
   * @param backgroundConfig   背景图设置 (必填)
   * @param contentUpload  内容上传配置 (必填)
   * @param globalLayout  全局设置 (必填)
   * @param scriptSetting  文稿播报设置 (必填)
   */
  public DhPageConfSave(
    callback: (data: DhPageConfSaveReplay) => void,
    dhVideoNo: string,
    videoType: number,
    baseConf: DhBaseConf,
    globalBackgroundSound: DhGlobalBackgroundSound,
    globalBackgroundImage: string,
    backgroundConfig: DhBackgroundConfig[],
    contentUpload: DhContentUpload[],
    globalLayout: DhGlobalLayout,
    scriptSetting: DhScriptSetting[],
  ): void {
    // 构建请求对象
    const req: DhPageConfSaveRequest = {
      dh_video_no: dhVideoNo,
      video_type: videoType,
      base_conf: baseConf,
      global_background_sound: globalBackgroundSound,
      global_background_image: globalBackgroundImage,
      background_config: backgroundConfig,
      content_upload: contentUpload,
      global_layout: globalLayout,
      script_setting: scriptSetting,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/page/conf/save";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhPageConfSaveReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }       });
  }
  /**
   * 获取预览图
   * @param callback 回调函数，接收 DhPreviewImageReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   */
  public DhPreviewImage(
    callback: (data: DhPreviewImageReplay) => void,
    dhVideoNo: string,
  ): void {
    // 构建请求对象
    const req: DhPreviewImageRequest = {
      dh_video_no: dhVideoNo,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/preview/image";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhPreviewImageReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 生成视频
   * @param callback 回调函数，接收 DhVideoGenerateReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   */
  public DhVideoGenerate(
    callback: (data: DhVideoGenerateReplay) => void,
    dhVideoNo: string,
  ): void {
    // 构建请求对象
    const req: DhVideoGenerateRequest = {
      dh_video_no: dhVideoNo,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/video/generate";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhVideoGenerateReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取数字人列表
   * @param callback 回调函数，接收 DhListReply 类型的结果数据
   * @param pageNo  页面编码 (必填)
   * @param pageSize  页面每页条数 (必填)
   */
  public DhList(
    callback: (data: DhListReplay) => void,
    pageNo: number,
    pageSize: number,
  ): void {
    // 构建请求对象
    const req: DhListRequest = {
      page_no: pageNo,
      page_size: pageSize,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/list";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhListReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });

  }
  /**
   * 复制数字人视频配置
   * @param callback 回调函数，接收 DhCopyVideoConfReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   */
  public DhCopyVideoConf(
    callback: (data: DhCopyVideoConfReplay) => void,
    dhVideoNo: string,
  ): void {
    // 构建请求对象
    const req: DhCopyVideoConfRequest = {
      dh_video_no: dhVideoNo,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/copy";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhCopyVideoConfReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取阿里云文件上传授权
   * @param callback 回调函数，接收 DhGetOssPolicyTokenReply 类型的结果数据
   * @param dhVideoNo  数字人视频编码 (必填)
   * @param filename  文件名 (必填)
   */
  public DhGetOssPolicyToken(
    callback: (data: DhGetOssPolicyTokenReplay) => void,
    dhVideoNo: string,
    filename: string,
  ): void {
    // 构建请求对象
    const req: DhGetOssPolicyTokenRequest = {
      dh_video_no: dhVideoNo,
      filename: filename,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/dh/get/oss/policy/token";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: DhGetOssPolicyTokenReplay = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
}
export const dhRequest = new DhRequest();
export default dhRequest;
