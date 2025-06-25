import type {
  AddAppReply,
  AddAppRequest,
  AddApplicationUserReply,
  AddApplicationUserRequest,
  AppInfoReply,
  AppInfoRequest,
  AppListReply,
  AppListRequest,
  AppSettingsReply,
  AppSettingsRequest,
  ApplicationUsersReply,
  ApplicationUsersRequest,
  SetApplicationSecretReply,
  SetApplicationSecretRequest,
  SetApplicationWeChatReply,
  SetApplicationWeChatRequest,
  UpdateAppReply,
  UpdateAppRequest,
  UpdateAppSettingsReply,
  UpdateAppSettingsRequest,
  UpdateAppSettingsStateReply,
  UpdateAppSettingsStateRequest,
  UpdateAppStateReply,
  UpdateAppStateRequest,
  UpdateApplicationUserStateReply,
  UpdateApplicationUserStateRequest,
} from "@/request/appRequestObj.ts";
import PromptBox from "@/stores/promptBox.ts";
import { HeaderObj, verify } from "./verify.ts";
import { request } from "./request.ts";
import type {
  AppSettingsEdit,
  NullInt,
  NullString,
} from "@/request/requestObj.ts";
import { BuildNullInt, BuildNullString } from "@/request/tools.ts";
export class AppRequest {
  /**
   * 创建应用信息
   * @param callback 回调函数，接收 AddAppReply 类型的结果数据
   * @param appName  应用名称  (必填)
   * @param appDesc  应用描述 可选参数，默认为 null
   * @param enabledTime  启用时间 可选参数，默认为 null
   * @param downTime  停用时间 可选参数，默认为 null
   * @param adminUid  管理员ID 可选参数，默认为 null
   */
  public AddApp(
    callback: (data: AddAppReply) => void,
    appName: string,
    appDesc: string | null = null,
    enabledTime: string | null = null,
    downTime: string | null = null,
    adminUid: number | null = null,
  ): void {
    if ("" === appName) {
      PromptBox.errorPromptBox("ERROR", "AppName  应用名称  不可为空");
      return;
    }
    // 构建请求对象
    const req: AddAppRequest = {
      app_name: appName,
      app_desc: appDesc,
      enabled_time: enabledTime,
      down_time: downTime,
      admin_uid: adminUid,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: AddAppReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取应用
   * @param callback 回调函数，接收 AppInfoReply 类型的结果数据
   * @param appID  应用ID  (必填)
   */
  public AppInfo(callback: (data: AppInfoReply) => void, appID: string): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    // 构建请求对象
    const req: AppInfoRequest = {
      app_id: appID,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/app/applications/:appId";
    reqUri = reqUri.replace(":appId", appID);
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.get(reqUri, headers, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: AppInfoReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取应用列表
   * @param callback 回调函数，接收 AppListReply 类型的结果数据
   * @param appIDList  应用ID列表 可选参数，默认为 null
   * @param appName  应用名称 可选参数，默认为 null
   * @param appState  应用状态，0启用，1禁用 可选参数，默认为 null
   * @param createdUser  创建人 可选参数，默认为 null
   * @param createdAtStart  创建时间开始 可选参数，默认为 null
   * @param createdAtEnd  创建时间结束 可选参数，默认为 null
   * @param updatedUser  更新人 可选参数，默认为 null
   * @param updatedAtStart  更新时间开始 可选参数，默认为 null
   * @param updatedAtEnd  更新时间结束 可选参数，默认为 null
   * @param pageNo  页码 可选参数，默认为 null
   * @param pageSize  每页数量 可选参数，默认为 null
   * @param ruleOutNo  排除列表 可选参数，默认为 null
   * @param sortFiled  排序字段 可选参数，默认为 null
   * @param isDesc  是否倒序 可选参数，默认为 null
   */
  public AppList(
    callback: (data: AppListReply) => void,
    appIDList: string[] | null = null,
    appName: string | null = null,
    appState: number | null = null,
    createdUser: number[] | null = null,
    createdAtStart: string | null = null,
    createdAtEnd: string | null = null,
    updatedUser: number[] | null = null,
    updatedAtStart: string | null = null,
    updatedAtEnd: string | null = null,
    pageNo: number | null = null,
    pageSize: number | null = null,
    ruleOutNo: string[] | null = null,
    sortFiled: string | null = null,
    isDesc: boolean | null = null,
  ): void {
    // 构建请求对象
    const _useAppName: NullString = BuildNullString(appName);
    const _useAppState: NullInt = BuildNullInt(appState);
    const _useCreatedAtStart: NullString = BuildNullString(createdAtStart);
    const _useCreatedAtEnd: NullString = BuildNullString(createdAtEnd);
    const _useUpdatedAtStart: NullString = BuildNullString(updatedAtStart);
    const _useUpdatedAtEnd: NullString = BuildNullString(updatedAtEnd);
    const _useSortFiled: NullString = BuildNullString(sortFiled);
    const req: AppListRequest = {
      app_id_list: appIDList,
      app_name: _useAppName,
      app_state: _useAppState,
      created_user: createdUser,
      created_at_start: _useCreatedAtStart,
      created_at_end: _useCreatedAtEnd,
      updated_user: updatedUser,
      updated_at_start: _useUpdatedAtStart,
      updated_at_end: _useUpdatedAtEnd,
      page_no: pageNo,
      page_size: pageSize,
      rule_out_no: ruleOutNo,
      sort_filed: _useSortFiled,
      is_desc: isDesc,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/app/applications/params/*params";
    const _params: string | null | undefined =
      verify.buildEncipherParams(reqBody);
    if (_params == null) {
      PromptBox.errorPromptBox("ERROR", "参数错误");
      return;
    }
    reqUri = reqUri.replace("*params", _params);
    // 校验处理
    const headerObj: HeaderObj = verify.buildHeader(true);
    if (headerObj.haveError) {
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.get(reqUri, headers, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: AppListReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 更新应用
   * @param callback 回调函数，接收 UpdateAppReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param appName  应用名称 可选参数，默认为 null
   * @param appDesc 应用描述 可选参数，默认为 null
   * @param adminUid  管理员ID 可选参数，默认为 null
   * @param enabledTime  启用时间 可选参数，默认为 null
   * @param downTime  停用时间 可选参数，默认为 null
   */
  public UpdateApp(
    callback: (data: UpdateAppReply) => void,
    appID: string,
    appName: string | null = null,
    appDesc: string | null = null,
    adminUid: number | null = null,
    enabledTime: string | null = null,
    downTime: string | null = null,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    // 构建请求对象
    const _useAppName: NullString = BuildNullString(appName);
    const _useAppDesc: NullString = BuildNullString(appDesc);
    const _useAdminUid: NullInt = BuildNullInt(adminUid);
    const _useEnabledTime: NullString = BuildNullString(enabledTime);
    const _useDownTime: NullString = BuildNullString(downTime);
    const req: UpdateAppRequest = {
      app_id: appID,
      app_name: _useAppName,
      app_desc: _useAppDesc,
      admin_uid: _useAdminUid,
      enabled_time: _useEnabledTime,
      down_time: _useDownTime,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.put(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: UpdateAppReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 修改应用状态
   * @param callback 回调函数，接收 UpdateAppStateReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param appState  状态  (必填)
   */
  public UpdateAppState(
    callback: (data: UpdateAppStateReply) => void,
    appID: string,
    appState: number,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    const appStateEnumList: number[] = [1, 2];
    if (!appStateEnumList.includes(appState)) {
      PromptBox.errorPromptBox("ERROR", "AppState  状态 值只能是ENUM[1,2]");
      return;
    }
    // 构建请求对象
    const req: UpdateAppStateRequest = {
      app_id: appID,
      app_state: appState,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications/state";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.patch(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: UpdateAppStateReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取特定应用的所有设置
   * @param callback 回调函数，接收 AppSettingsReply 类型的结果数据
   * @param appID  应用ID  (必填)
   */
  public AppSettings(
    callback: (data: AppSettingsReply) => void,
    appID: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    // 构建请求对象
    const req: AppSettingsRequest = {
      app_id: appID,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications/settings";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.get(reqUri, headers, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: AppSettingsReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 更新特定应用的特定设置
   * @param callback 回调函数，接收 UpdateAppSettingsReply 类型的结果数据
   * @param dataList  应用ID  (必填)
   */
  public UpdateAppSettings(
    callback: (data: UpdateAppSettingsReply) => void,
    dataList: AppSettingsEdit[],
  ): void {
    // 构建请求对象
    const req: UpdateAppSettingsRequest = {
      data_list: dataList,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications/settings";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.put(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: UpdateAppSettingsReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 修改特定应用的特定设置状态
   * @param callback 回调函数，接收 UpdateAppSettingsStateReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param settingsId  应用ID  (必填)
   * @param settingsState  状态  (必填)
   */
  public UpdateAppSettingsState(
    callback: (data: UpdateAppSettingsStateReply) => void,
    appID: string,
    settingsId: string,
    settingsState: number,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if ("" === settingsId) {
      PromptBox.errorPromptBox("ERROR", "SettingsId  应用ID  不可为空");
      return;
    }
    const settingsStateEnumList: number[] = [1, 2];
    if (!settingsStateEnumList.includes(settingsState)) {
      PromptBox.errorPromptBox(
        "ERROR",
        "SettingsState  状态 值只能是ENUM[1,2]",
      );
      return;
    }
    // 构建请求对象
    const req: UpdateAppSettingsStateRequest = {
      app_id: appID,
      settings_id: settingsId,
      settings_state: settingsState,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications/settings/state";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.patch(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: UpdateAppSettingsStateReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取特定应用的所有关联用户
   * @param callback 回调函数，接收 ApplicationUsersReply 类型的结果数据
   * @param appID  应用ID  (必填)
   */
  public ApplicationUsers(
    callback: (data: ApplicationUsersReply) => void,
    appID: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    // 构建请求对象
    const req: ApplicationUsersRequest = {
      app_id: appID,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/app/applications/:appId/users";
    reqUri = reqUri.replace(":appId", appID);
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.get(reqUri, headers, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: ApplicationUsersReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 将特定用户关联到特定应用
   * @param callback 回调函数，接收 AddApplicationUserReply 类型的结果数据
   * @param appID   (必填)
   * @param userIDList   (必填)
   */
  public AddApplicationUser(
    callback: (data: AddApplicationUserReply) => void,
    appID: string,
    userIDList: number[],
  ): void {
    if (appID.length < 1) {
      PromptBox.errorPromptBox("ERROR", "AppID  最小长度1");
      return;
    }
    if (userIDList.length < 1) {
      PromptBox.errorPromptBox("ERROR", "UserIDList  最小长度1");
      return;
    }
    // 构建请求对象
    const req: AddApplicationUserRequest = {
      app_id: appID,
      user_id_list: userIDList,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications/users";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: AddApplicationUserReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 修改特定用户与特定应用的关联状态
   * @param callback 回调函数，接收 UpdateApplicationUserStateReply 类型的结果数据
   * @param appID   (必填)
   * @param userIDList   (必填)
   * @param setState   (必填)
   */
  public UpdateApplicationUserState(
    callback: (data: UpdateApplicationUserStateReply) => void,
    appID: string,
    userIDList: number[],
    setState: number,
  ): void {
    if (appID.length < 1) {
      PromptBox.errorPromptBox("ERROR", "AppID  最小长度1");
      return;
    }
    if (userIDList.length < 1) {
      PromptBox.errorPromptBox("ERROR", "UserIDList  最小长度1");
      return;
    }
    const setStateEnumList: number[] = [1, 2];
    if (!setStateEnumList.includes(setState)) {
      PromptBox.errorPromptBox("ERROR", "SetState  值只能是ENUM[1,2]");
      return;
    }
    // 构建请求对象
    const req: UpdateApplicationUserStateRequest = {
      app_id: appID,
      user_id_list: userIDList,
      set_state: setState,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/app/applications/users/state/:state";
    reqUri = reqUri.replace(":state", String(setState));
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.patch(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: UpdateApplicationUserStateReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 设置Application密钥Key
   * @param callback 回调函数，接收 SetApplicationSecretReply 类型的结果数据
   * @param appID   (必填)
   */
  public SetApplicationSecret(
    callback: (data: SetApplicationSecretReply) => void,
    appID: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID   不可为空");
      return;
    }
    // 构建请求对象
    const req: SetApplicationSecretRequest = {
      app_id: appID,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications/secret";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: SetApplicationSecretReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 设置Application微信信息
   * @param callback 回调函数，接收 SetApplicationWeChatReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param platformAppID  平台ID  (必填)
   * @param platformSecret  平台密钥  (必填)
   */
  public SetApplicationWeChat(
    callback: (data: SetApplicationWeChatReply) => void,
    appID: string,
    platformAppID: string,
    platformSecret: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if ("" === platformAppID) {
      PromptBox.errorPromptBox("ERROR", "PlatformAppID  平台ID  不可为空");
      return;
    }
    if ("" === platformSecret) {
      PromptBox.errorPromptBox("ERROR", "PlatformSecret  平台密钥  不可为空");
      return;
    }
    // 构建请求对象
    const req: SetApplicationWeChatRequest = {
      app_id: appID,
      platform_app_id: platformAppID,
      platform_secret: platformSecret,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/app/applications/wechat";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, true);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: SetApplicationWeChatReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
}
export const appRequest = new AppRequest();
export default appRequest;
