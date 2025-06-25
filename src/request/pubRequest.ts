import type {
  AddAutoIDConfReply,
  AddAutoIDConfRequest,
  AutoIDConfListReply,
  AutoIDConfListRequest,
  AutoIDConfReply,
  AutoIDConfRequest,
  UpdateAutoIDConfReply,
  UpdateAutoIDConfRequest,
  UpdateAutoIDConfStateReply,
  UpdateAutoIDConfStateRequest,
} from "@/request/pubRequestObj.ts";
import PromptBox from "@/stores/promptBox.ts";
import { HeaderObj, verify } from "./verify.ts";
import { request } from "./request.ts";
import type { NullInt, NullString } from "@/request/requestObj.ts";
import { BuildNullInt, BuildNullString } from "@/request/tools.ts";
export class PubRequest {
  /**
   * 获取自增ID列表
   * @param callback 回调函数，接收 AutoIDConfListReply 类型的结果数据
   * @param appIDList  应用ID列表 (必填)
   * @param useTableName  表名 (必填)
   * @param columnName  列名 (必填)
   * @param iDTypeList  id类型,int,string (必填)
   * @param refreshTypeList  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年 (必填)
   * @param autoIDState  状态 (必填)
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
  public AutoIDConfList(
    callback: (data: AutoIDConfListReply) => void,
    appIDList: string[],
    useTableName: string,
    columnName: string,
    iDTypeList: string[],
    refreshTypeList: number[],
    autoIDState: number,
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
    const _useUseTableName: NullString = BuildNullString(useTableName);
    const _useColumnName: NullString = BuildNullString(columnName);
    const _useAutoIDState: NullInt = BuildNullInt(autoIDState);
    const _useCreatedAtStart: NullString = BuildNullString(createdAtStart);
    const _useCreatedAtEnd: NullString = BuildNullString(createdAtEnd);
    const _useUpdatedAtStart: NullString = BuildNullString(updatedAtStart);
    const _useUpdatedAtEnd: NullString = BuildNullString(updatedAtEnd);
    const _useSortFiled: NullString = BuildNullString(sortFiled);
    const req: AutoIDConfListRequest = {
      app_id_list: appIDList,
      use_table_name: _useUseTableName,
      column_name: _useColumnName,
      id_type_list: iDTypeList,
      refresh_type_list: refreshTypeList,
      auto_id_state: _useAutoIDState,
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
    let reqUri: string = "/api/v1/pub/auto_id/params/*params";
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
        const replyData: AutoIDConfListReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 创建自增ID
   * @param callback 回调函数，接收 AddAutoIDConfReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param useTableName  表名称  (必填)
   * @param columnName  列名称  (必填)
   * @param iDType  id类型,int,string  (必填)
   * @param expressionFormat  表达式TEST_{YYYY}{MM}{DD}{hh}{mm}{ss}_{NUMBER} (必填)
   * @param filling  填充值，string类型可用，只一位 (必填)
   * @param nLength  数字长度  (必填)
   * @param nIncrement  步长  (必填)
   * @param refreshType  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年  (必填)
   * @param stStart  开始id  (必填)
   * @param autoIDState  状态，0启用，1禁用  (必填)
   */
  public AddAutoIDConf(
    callback: (data: AddAutoIDConfReply) => void,
    appID: string,
    useTableName: string,
    columnName: string,
    iDType: string,
    expressionFormat: string,
    filling: string,
    nLength: number,
    nIncrement: number,
    refreshType: number,
    stStart: number,
    autoIDState: number,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if ("" === useTableName) {
      PromptBox.errorPromptBox("ERROR", "UseTableName  表名称  不可为空");
      return;
    }
    if ("" === columnName) {
      PromptBox.errorPromptBox("ERROR", "ColumnName  列名称  不可为空");
      return;
    }
    const iDTypeEnumList: string[] = ["int", "string"];
    if (!iDTypeEnumList.includes(iDType)) {
      PromptBox.errorPromptBox(
        "ERROR",
        'IDType  id类型,int,string 值只能是ENUM["int","string"]',
      );
      return;
    }
    if (nLength < 1) {
      PromptBox.errorPromptBox("ERROR", "NLength  数字长度 最小值1");
      return;
    }
    if (nIncrement < 1) {
      PromptBox.errorPromptBox("ERROR", "NIncrement  步长 最小值1");
      return;
    }
    const refreshTypeEnumList: number[] = [0, 1, 2, 3, 4, 5, 6];
    if (!refreshTypeEnumList.includes(refreshType)) {
      PromptBox.errorPromptBox(
        "ERROR",
        "RefreshType  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年 值只能是ENUM[0,1,2,3,4,5,6]",
      );
      return;
    }
    if (stStart < 1) {
      PromptBox.errorPromptBox("ERROR", "StStart  开始id 最小值1");
      return;
    }
    const autoIDStateEnumList: number[] = [0, 1];
    if (!autoIDStateEnumList.includes(autoIDState)) {
      PromptBox.errorPromptBox(
        "ERROR",
        "AutoIDState  状态，0启用，1禁用 值只能是ENUM[0,1]",
      );
      return;
    }
    // 构建请求对象
    const _useExpressionFormat: NullString = BuildNullString(expressionFormat);
    const _useFilling: NullString = BuildNullString(filling);
    const req: AddAutoIDConfRequest = {
      app_id: appID,
      use_table_name: useTableName,
      column_name: columnName,
      id_type: iDType,
      expression_format: _useExpressionFormat,
      filling: _useFilling,
      n_length: nLength,
      n_increment: nIncrement,
      refresh_type: refreshType,
      st_start: stStart,
      auto_id_state: autoIDState,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/pub/auto_id";
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
        const replyData: AddAutoIDConfReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 获取自增ID
   * @param callback 回调函数，接收 AutoIDConfReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param tableName  表名称  (必填)
   * @param columnName  列名称  (必填)
   */
  public AutoIDConf(
    callback: (data: AutoIDConfReply) => void,
    appID: string,
    tableName: string,
    columnName: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if ("" === tableName) {
      PromptBox.errorPromptBox("ERROR", "TableName  表名称  不可为空");
      return;
    }
    if ("" === columnName) {
      PromptBox.errorPromptBox("ERROR", "ColumnName  列名称  不可为空");
      return;
    }
    // 构建请求对象
    const req: AutoIDConfRequest = {
      app_id: appID,
      table_name: tableName,
      column_name: columnName,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    let reqUri: string = "/api/v1/pub/auto_id/:appId/:tableName/:columnName";
    reqUri = reqUri.replace(":appId", appID);
    reqUri = reqUri.replace(":tableName", tableName);
    reqUri = reqUri.replace(":columnName", columnName);
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
        const replyData: AutoIDConfReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 更新自增ID
   * @param callback 回调函数，接收 UpdateAutoIDConfReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param useTableName  表名称  (必填)
   * @param columnName  列名称  (必填)
   * @param iDType  id类型,int,string  (必填)
   * @param expressionFormat  表达式TEST_{YYYY}{MM}{DD}{hh}{mm}{ss}_{NUMBER} (必填)
   * @param filling  填充值，string类型可用，只一位 (必填)
   * @param nLength  数字长度  (必填)
   * @param nIncrement  步长  (必填)
   * @param refreshType  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年  (必填)
   * @param stStart  开始id  (必填)
   */
  public UpdateAutoIDConf(
    callback: (data: UpdateAutoIDConfReply) => void,
    appID: string,
    useTableName: string,
    columnName: string,
    iDType: string,
    expressionFormat: string,
    filling: string,
    nLength: number,
    nIncrement: number,
    refreshType: number,
    stStart: number,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if ("" === useTableName) {
      PromptBox.errorPromptBox("ERROR", "UseTableName  表名称  不可为空");
      return;
    }
    if ("" === columnName) {
      PromptBox.errorPromptBox("ERROR", "ColumnName  列名称  不可为空");
      return;
    }
    // 构建请求对象
    const _useIDType: NullString = BuildNullString(iDType);
    const _useExpressionFormat: NullString = BuildNullString(expressionFormat);
    const _useFilling: NullString = BuildNullString(filling);
    const _useNLength: NullInt = BuildNullInt(nLength);
    const _useNIncrement: NullInt = BuildNullInt(nIncrement);
    const _useRefreshType: NullInt = BuildNullInt(refreshType);
    const _useStStart: NullInt = BuildNullInt(stStart);
    if (_useIDType !== null && _useIDType.valid) {
      const _useIDTypeEnumList: string[] = ["int", "string"];
      if (!_useIDTypeEnumList.includes(_useIDType.data)) {
        PromptBox.errorPromptBox(
          "ERROR",
          '_useIDType  id类型,int,string 值只能是ENUM["int","string"]',
        );
        return;
      }
    }
    if (_useNLength !== null && _useNLength.valid) {
      if (_useNLength.data < 1) {
        PromptBox.errorPromptBox("ERROR", "_useNLength  数字长度 最小值1");
        return;
      }
    }
    if (_useNIncrement !== null && _useNIncrement.valid) {
      if (_useNIncrement.data < 1) {
        PromptBox.errorPromptBox("ERROR", "_useNIncrement  步长 最小值1");
        return;
      }
    }
    if (_useRefreshType !== null && _useRefreshType.valid) {
      const _useRefreshTypeEnumList: number[] = [0, 1, 2, 3, 4, 5, 6];
      if (!_useRefreshTypeEnumList.includes(_useRefreshType.data)) {
        PromptBox.errorPromptBox(
          "ERROR",
          "_useRefreshType  刷新类型，0不刷新，1秒，2分，3小时，4日，5月，6年 值只能是ENUM[0,1,2,3,4,5,6]",
        );
        return;
      }
    }
    if (_useStStart !== null && _useStStart.valid) {
      if (_useStStart.data < 1) {
        PromptBox.errorPromptBox("ERROR", "_useStStart  开始id 最小值1");
        return;
      }
    }
    const req: UpdateAutoIDConfRequest = {
      app_id: appID,
      use_table_name: useTableName,
      column_name: columnName,
      id_type: _useIDType,
      expression_format: _useExpressionFormat,
      filling: _useFilling,
      n_length: _useNLength,
      n_increment: _useNIncrement,
      refresh_type: _useRefreshType,
      st_start: _useStStart,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/pub/auto_id";
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
        const replyData: UpdateAutoIDConfReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
  /**
   * 更新自增ID状态
   * @param callback 回调函数，接收 UpdateAutoIDConfStateReply 类型的结果数据
   * @param appID  应用ID  (必填)
   * @param tableName  表名称  (必填)
   * @param columnName  列名称  (必填)
   */
  public UpdateAutoIDConfState(
    callback: (data: UpdateAutoIDConfStateReply) => void,
    appID: string,
    tableName: string,
    columnName: string,
  ): void {
    if ("" === appID) {
      PromptBox.errorPromptBox("ERROR", "AppID  应用ID  不可为空");
      return;
    }
    if ("" === tableName) {
      PromptBox.errorPromptBox("ERROR", "TableName  表名称  不可为空");
      return;
    }
    if ("" === columnName) {
      PromptBox.errorPromptBox("ERROR", "ColumnName  列名称  不可为空");
      return;
    }
    // 构建请求对象
    const req: UpdateAutoIDConfStateRequest = {
      app_id: appID,
      table_name: tableName,
      column_name: columnName,
    };
    // 序列化请求数据
    const reqBody: string = JSON.stringify(req);
    // 定义接口地址
    const reqUri: string = "/api/v1/pub/auto_id/state";
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
        const replyData: UpdateAutoIDConfStateReply = JSON.parse(respData);
        // 执行回调函数传递结果
        callback(replyData);
      } catch (e) {
        console.error("响应数据解析失败:", e);
      }
    });
  }
}
export const pubRequest = new PubRequest();
export default pubRequest;
