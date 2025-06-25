// import type {AxiosInstance} from 'axios'
// import axios from "axios";
// import LocalCache from "@/stores/localCache";
// import PromptBox from "@/stores/promptBox";
//
// // 请求方法
// const instance: AxiosInstance = axios.create({
//   timeout: 10000,
//   headers: {
//     'X-Requested-With': 'XMLHttpRequest',
//     'Content-Type': 'application/octet-stream',
//   },
//   responseType: 'json'
// });
//
// // 请求拦截器
// instance.interceptors.request.use(function (config) {
//   config.headers.set('User-Token', LocalCache.getStringCache(CONSTANT.USER_TOKEN))
//   config.headers.set('User-Flash-Token', LocalCache.getStringCache(CONSTANT.USER_FLASH_TOKEN))
//   return config
// });
//
// // 返回拦截器
// instance.interceptors.response.use(response => {
//
//   console.log(response)
//
//   return response
// }, function (error): void {
//   console.log(error.toString())
// });
//
// class RequestApi {
//   // POST请求
//   PostRequest(url: string, addHeader: Map<string, string>, data: never, callFunc: (respData: string) => void): void {
//     this.SendRequest(url,'POST',addHeader,data,callFunc)
//   }
//
//   // GET 请求
//   GetRequest(url: string, addHeader: Map<string, string>, callFunc: (respData: string) => void): void {
//     this.SendRequest(url,'GET',addHeader,data,callFunc)
//   }
//
//   // PUT 请求
//   PutRequest(url: string, addHeader: Map<string, string>, data: never, callFunc: (respData: string) => void): void {
//     this.SendRequest(url,'PUT',addHeader,data,callFunc)
//   }
//
//   // DELETE 请求
//   DeleteRequest(url: string, addHeader: Map<string, string>, data: never, callFunc: (respData: string) => void): void {
//     this.SendRequest(url,'DELETE',addHeader,data,callFunc)
//   }
//
//   // 发起请求
//   SendRequest(url: string, method: string, addHeader: Map<string, string>, data: never, callFunc: (respData: string) => void): void {
//     // instance({
//     //   url: url,
//     //   method: method,
//     //   data: data,
//     // }).then(res => {
//     //   console.log(res.data)
//     //
//     //   return this.processingRes(res.data, callFunc)
//     // }).catch(error => {
//     //   this.catchError(error)
//     // })
//   }
//
//
//   // processingRes 处理请求结果
//   processingRes(data: never, callFunc: (respData: string) => void): void {
//     // const code = data.Code
//     // if (undefined !== code && 0 != code) {
//     //   // 失败
//     //   PromptBox.errorPromptBox("接口错误", data.Msg)
//     //   return
//     // }
//     // let callBackInfo: string
//     // if (data.Data) {
//     //   callBackInfo = data.Data
//     // } else {
//     //   callBackInfo = "{}"
//     // }
//     // callFunc(callBackInfo)
//   }
//
//   // 错误处理
//   catchError(error: never) {
//     console.log(error)
//     PromptBox.errorPromptBox("系统错误", error)
//   }
// }
//
//
// export default new RequestApi()
