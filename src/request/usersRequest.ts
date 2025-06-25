import type {
  AddUserReply,
  AddUserRequest,
  LayoutRequest,
  LoginReply,
  LoginRequest,
  UpdatePasswordAdminRequest,
  UpdatePasswordRequest,
  UpdateUserReply,
  UpdateUserRequest,
  UpdateUserStateRequest,
  UserAddressListReply,
  UserAddressListRequest,
  UserAddressReply,
  UserAddressRequest,
  UserContactReply,
  UserContactRequest,
  UserInfoReply,
  UserInfoRequest,
  UserListReply,
  UserListRequest,
} from "@/request/usersRequestObj.ts";
import PromptBox from "@/stores/promptBox.ts";
import { HeaderObj, verify } from "./verify.ts";
import { request } from "./request.ts";
import type {
  NullBool,
  NullInt,
  NullString,
  OkBody,
  SearchCommon,
} from "@/request/requestObj.ts";
import {
  BuildNullBool,
  BuildNullInt,
  BuildNullString,
} from "@/request/tools.ts";
export class UsersRequest {
  /**
   * 登陆接口
   * @param callback 回调函数，接收 LoginReply 类型的结果数据
   * @param username  用户名  (必填)
   * @param password  加密后密码，使用AES加密算法  (必填)
   */
  public Login(
    callback: (data: LoginReply) => void,
    username: string,
    password: string,
  ): void {
    if ("" === username) {
      PromptBox.errorPromptBox("ERROR", "Username  用户名  不可为空");
      return;
    }
    if ("" === password) {
      PromptBox.errorPromptBox(
        "ERROR",
        "Password  加密后密码，使用AES加密算法  不可为空",
      );
      return;
    }
    // 构建请求对象
    const req: LoginRequest = {
      username: username,
      password: password,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/login/account";
    // 构建请求头并进行安全校验
    const headerObj: HeaderObj = verify.buildManipulationHeader(reqBody, false);
    if (headerObj.haveError) {
      // 如果校验失败（如签名错误），直接中断流程
      return;
    }
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
   * 登出
   * @param callback 回调函数，接收 LayoutReply 类型的结果数据
   * @param userToken   (必填)
   */
  public Layout(callback: (data: OkBody) => void, userToken: string): void {
    if ("" === userToken) {
      PromptBox.errorPromptBox("ERROR", "UserToken   不可为空");
      return;
    }
    // 构建请求对象
    const req: LayoutRequest = {
      user_token: userToken,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/login/out";
    const headerObj: HeaderObj = verify.buildHeader(true);
    const headers: Record<string, string> = headerObj.headers;
    // 发起请求
    request.post(reqUri, headers, reqBody, function (respData: string): void {
      try {
        // 解析响应数据
        const replyData: OkBody = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 新建用户
   * @param callback 回调函数，接收 AddUserReply 类型的结果数据
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param appID  应用ID  (必填)
   * @param username  用户名  (必填)
   * @param nickname  昵称  (必填)
   * @param avatarUrl  头像地址 (必填)
   * @param userState  应用状态，0启用，1禁用  (必填)
   */
  public AddUser(
    callback: (data: AddUserReply) => void,
    userType: number,
    appID: string,
    username: string,
    nickname: string,
    avatarUrl: number,
    userState: number,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if (username.length < 4 || username.length > 30) {
      PromptBox.errorPromptBox("ERROR", "Username  用户名 长度范围4,30");
      return;
    }
    if (nickname.length < 4 || nickname.length > 30) {
      PromptBox.errorPromptBox("ERROR", "Nickname  昵称 长度范围4,30");
      return;
    }
    const userStateEnumList: number[] = [0, 1];
    if (!userStateEnumList.includes(userState)) {
      PromptBox.errorPromptBox(
        "ERROR",
        "UserState  应用状态，0启用，1禁用 值只能是ENUM[0,1]",
      );
      return;
    }
    // 构建请求对象
    const _useAvatarUrl: NullInt = BuildNullInt(avatarUrl);
    const req: AddUserRequest = {
      user_type: userType,
      app_id: appID,
      username: username,
      nickname: nickname,
      avatar_url: _useAvatarUrl,
      user_state: userState,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/user";
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
        const replyData: AddUserReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 查询用户
   * @param callback 回调函数，接收 UserInfoReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param userID  用户ID  (必填)
   */
  public UserInfo(
    callback: (data: UserInfoReply) => void,
    appID: string,
    userType: number,
    userID: number,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if (userID < 1) {
      PromptBox.errorPromptBox("ERROR", "UserID  用户ID 最小值1");
      return;
    }
    // 构建请求对象
    const req: UserInfoRequest = {
      app_id: appID,
      user_type: userType,
      user_id: userID,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/users/user/:appID/:userType/:userID";
    reqUri = reqUri.replace(":appID", appID);
    reqUri = reqUri.replace(":userType", String(userType));
    reqUri = reqUri.replace(":userID", String(userID));
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
        const replyData: UserInfoReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 分页查询用户
   * @param callback 回调函数，接收 UserListReply 类型的结果数据
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param appIDList  应用ID列表 (必填)
   * @param userIDList  用户ID列表 (必填)
   * @param username  用户名称 (必填)
   * @param nickname  用户昵称 (必填)
   * @param userState  用户状态，0启用，1禁用  (必填)
   * @param commonData  搜索通用状态 (必填)
   */
  public UserList(
    callback: (data: UserListReply) => void,
    userType: number,
    appIDList: string[],
    userIDList: number[],
    username: string,
    nickname: string,
    userState: number,
    commonData: SearchCommon,
  ): void {
    // 构建请求对象
    const _useUsername: NullString = BuildNullString(username);
    const _useNickname: NullString = BuildNullString(nickname);
    const _useUserState: NullInt = BuildNullInt(userState);
    if (_useUserState !== null && _useUserState.valid) {
      const _useUserStateEnumList: number[] = [0, 1];
      if (!_useUserStateEnumList.includes(_useUserState.data)) {
        PromptBox.errorPromptBox(
          "ERROR",
          "_useUserState  用户状态，0启用，1禁用 值只能是ENUM[0,1]",
        );
        return;
      }
    }
    const req: UserListRequest = {
      user_type: userType,
      app_id_list: appIDList,
      user_id_list: userIDList,
      username: _useUsername,
      nickname: _useNickname,
      user_state: _useUserState,
      common_data: commonData,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/users/user/params/*params";
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
        const replyData: UserListReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 修改用户信息
   * @param callback 回调函数，接收 UpdateUserReply 类型的结果数据
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param appID  应用ID  (必填)
   * @param userID  用户ID  (必填)
   * @param username  用户名  (必填)
   * @param nickname  昵称  (必填)
   * @param avatarUrl  头像地址 (必填)
   */
  public UpdateUser(
    callback: (data: UpdateUserReply) => void,
    userType: number,
    appID: string,
    userID: number,
    username: string,
    nickname: string,
    avatarUrl: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if (userID < 1) {
      PromptBox.errorPromptBox("ERROR", "UserID  用户ID 最小值1");
      return;
    }
    if (username.length < 4 || username.length > 30) {
      PromptBox.errorPromptBox("ERROR", "Username  用户名 长度范围4,30");
      return;
    }
    // 构建请求对象
    const _useNickname: NullString = BuildNullString(nickname);
    const _useAvatarUrl: NullString = BuildNullString(avatarUrl);
    if (_useNickname !== null && _useNickname.valid) {
      if (_useNickname.data.length < 4 || _useNickname.data.length > 30) {
        PromptBox.errorPromptBox("ERROR", "_useNickname  昵称 长度范围4,30");
        return;
      }
    }
    const req: UpdateUserRequest = {
      user_type: userType,
      app_id: appID,
      user_id: userID,
      username: username,
      nickname: _useNickname,
      avatar_url: _useAvatarUrl,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/user";
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
        const replyData: UpdateUserReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 修改用户状态
   * @param callback 回调函数，接收 UpdateUserStateReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param userID  用户ID  (必填)
   * @param userState  用户状态，0启用，1禁用  (必填)
   */
  public UpdateUserState(
    callback: (data: OkBody) => void,
    appID: string,
    userType: number,
    userID: number,
    userState: number,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if (userID < 1) {
      PromptBox.errorPromptBox("ERROR", "UserID  用户ID 最小值1");
      return;
    }
    const userStateEnumList: number[] = [0, 1];
    if (!userStateEnumList.includes(userState)) {
      PromptBox.errorPromptBox(
        "ERROR",
        "UserState  用户状态，0启用，1禁用 值只能是ENUM[0,1]",
      );
      return;
    }
    // 构建请求对象
    const req: UpdateUserStateRequest = {
      app_id: appID,
      user_type: userType,
      user_id: userID,
      user_state: userState,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/user/state";
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
        const replyData: OkBody = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 修改密码（修改自己密码）
   * @param callback 回调函数，接收 UpdatePasswordReply 类型的结果数据
   * @param userID  用户ID  (必填)
   * @param oldPassword  原始密码  (必填)
   * @param newPassword  新密码  (必填)
   */
  public UpdatePassword(
    callback: (data: OkBody) => void,
    userID: number,
    oldPassword: string,
    newPassword: string,
  ): void {
    if (userID < 1) {
      PromptBox.errorPromptBox("ERROR", "UserID  用户ID 最小值1");
      return;
    }
    if (oldPassword.length < 8 || oldPassword.length > 30) {
      PromptBox.errorPromptBox("ERROR", "OldPassword  原始密码 长度范围8,30");
      return;
    }
    if (newPassword.length < 8 || newPassword.length > 30) {
      PromptBox.errorPromptBox("ERROR", "NewPassword  新密码 长度范围8,30");
      return;
    }
    // 构建请求对象
    const req: UpdatePasswordRequest = {
      user_id: userID,
      old_password: oldPassword,
      new_password: newPassword,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/password";
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
        const replyData: OkBody = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 管理员修改密码
   * @param callback 回调函数，接收 UpdatePasswordAdminReply 类型的结果数据
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param appID  应用ID  (必填)
   * @param userID  用户ID  (必填)
   * @param newPassword  新密码  (必填)
   */
  public UpdatePasswordAdmin(
    callback: (data: OkBody) => void,
    userType: number,
    appID: string,
    userID: number,
    newPassword: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if (userID < 1) {
      PromptBox.errorPromptBox("ERROR", "UserID  用户ID 最小值1");
      return;
    }
    if (newPassword.length < 8 || newPassword.length > 30) {
      PromptBox.errorPromptBox("ERROR", "NewPassword  新密码 长度范围8,30");
      return;
    }
    // 构建请求对象
    const req: UpdatePasswordAdminRequest = {
      user_type: userType,
      app_id: appID,
      user_id: userID,
      new_password: newPassword,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/users/password/admin";
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
        const replyData: OkBody = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取用户地址
   * @param callback 回调函数，接收 UserAddressReply 类型的结果数据
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param appID  应用ID  (必填)
   * @param userID  用户ID  (必填)
   * @param addressID  地址ID (必填)
   */
  public UserAddress(
    callback: (data: UserAddressReply) => void,
    userType: number,
    appID: string,
    userID: number,
    addressID: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if (userID < 1) {
      PromptBox.errorPromptBox("ERROR", "UserID  用户ID 最小值1");
      return;
    }
    // 构建请求对象
    const req: UserAddressRequest = {
      user_type: userType,
      app_id: appID,
      user_id: userID,
      address_id: addressID,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string =
      "/api/v1/users/address/:appID/:userType/:userID/:addressID";
    reqUri = reqUri.replace(":appID", appID);
    reqUri = reqUri.replace(":userType", String(userType));
    reqUri = reqUri.replace(":userID", String(userID));
    reqUri = reqUri.replace(":addressID", addressID);
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
        const replyData: UserAddressReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取用户地址列表
   * @param callback 回调函数，接收 UserAddressListReply 类型的结果数据
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param appID  应用ID  (必填)
   * @param userIDList  用户ID (必填)
   * @param addressTypeList  地址类型 (必填)
   * @param provinceCodeList  省份 (必填)
   * @param cityCodeList  市 (必填)
   * @param districtCodeList  区县 (必填)
   * @param isDefault  是否默认 (必填)
   * @param addressState  应用状态，0启用，1禁用 (必填)
   * @param commonData  搜索通用状态 (必填)
   */
  public UserAddressList(
    callback: (data: UserAddressListReply) => void,
    userType: number,
    appID: string,
    userIDList: number[],
    addressTypeList: string[],
    provinceCodeList: string[],
    cityCodeList: string[],
    districtCodeList: string[],
    isDefault: boolean,
    addressState: number,
    commonData: SearchCommon,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    // 构建请求对象
    const _useIsDefault: NullBool = BuildNullBool(isDefault);
    const _useAddressState: NullInt = BuildNullInt(addressState);
    const req: UserAddressListRequest = {
      user_type: userType,
      app_id: appID,
      user_id_list: userIDList,
      address_type_list: addressTypeList,
      province_code_list: provinceCodeList,
      city_code_list: cityCodeList,
      district_code_list: districtCodeList,
      is_default: _useIsDefault,
      address_state: _useAddressState,
      common_data: commonData,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/users/address/params/*params";
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
        const replyData: UserAddressListReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取用户联系方式
   * @param callback 回调函数，接收 UserContactReply 类型的结果数据
   * @param userType  人员类型，0用户，1管理员，98开发人员，99系统管理员 (必填)
   * @param appID  应用ID  (必填)
   * @param userID  用户ID  (必填)
   */
  public UserContact(
    callback: (data: UserContactReply) => void,
    userType: number,
    appID: string,
    userID: number,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if (userID < 1) {
      PromptBox.errorPromptBox("ERROR", "UserID  用户ID 最小值1");
      return;
    }
    // 构建请求对象
    const req: UserContactRequest = {
      user_type: userType,
      app_id: appID,
      user_id: userID,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/users/contact/:appID/:userType/:userID";
    reqUri = reqUri.replace(":appID", appID);
    reqUri = reqUri.replace(":userType", String(userType));
    reqUri = reqUri.replace(":userID", String(userID));
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
        const replyData: UserContactReply = JSON.parse(respData);
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
