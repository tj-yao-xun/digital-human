# 接口列表

## 登陆接口(Login)

| 类型           | 值                          |
| -------------- | --------------------------- |
| service        |                             |
| uri            | /api/v1/users/login/account |
| method         | POST                        |
| request_params | LoginRequest                |
| reply_params   | LoginReply                  |

## 登出(Layout)

| 类型           | 值                      |
| -------------- | ----------------------- |
| service        |                         |
| uri            | /api/v1/users/login/out |
| method         | POST                    |
| request_params | LayoutRequest           |
| reply_params   | common.OkBody           |

## 创建应用信息(AddApp)

| 类型           | 值                       |
| -------------- | ------------------------ |
| service        |                          |
| uri            | /api/v1/app/applications |
| method         | POST                     |
| request_params | AddAppRequest            |
| reply_params   | AddAppReply              |

## 获取应用(AppInfo)

| 类型           | 值                              |
| -------------- | ------------------------------- |
| service        |                                 |
| uri            | /api/v1/app/applications/:appId |
| method         | GET                             |
| request_params | AppInfoRequest                  |
| reply_params   | AppInfoReply                    |

## 获取应用列表(AppList)

| 类型           | 值                                       |
| -------------- | ---------------------------------------- |
| service        |                                          |
| uri            | /api/v1/app/applications/params/\*params |
| method         | GET                                      |
| request_params | AppListRequest                           |
| reply_params   | AppListReply                             |

## 更新应用(UpdateApp)

| 类型           | 值                       |
| -------------- | ------------------------ |
| service        |                          |
| uri            | /api/v1/app/applications |
| method         | PUT                      |
| request_params | UpdateAppRequest         |
| reply_params   | UpdateAppReply           |

## 修改应用状态(UpdateAppState)

| 类型           | 值                             |
| -------------- | ------------------------------ |
| service        |                                |
| uri            | /api/v1/app/applications/state |
| method         | PATCH                          |
| request_params | UpdateAppStateRequest          |
| reply_params   | UpdateAppStateReply            |

## 获取特定应用的所有设置(AppSettings)

| 类型           | 值                                |
| -------------- | --------------------------------- |
| service        |                                   |
| uri            | /api/v1/app/applications/settings |
| method         | GET                               |
| request_params | AppSettingsRequest                |
| reply_params   | AppSettingsReply                  |

## 更新特定应用的特定设置(UpdateAppSettings)

| 类型           | 值                                |
| -------------- | --------------------------------- |
| service        |                                   |
| uri            | /api/v1/app/applications/settings |
| method         | PUT                               |
| request_params | UpdateAppSettingsRequest          |
| reply_params   | UpdateAppSettingsReply            |

## 修改特定应用的特定设置状态(UpdateAppSettingsState)

| 类型           | 值                                      |
| -------------- | --------------------------------------- |
| service        |                                         |
| uri            | /api/v1/app/applications/settings/state |
| method         | PATCH                                   |
| request_params | UpdateAppSettingsStateRequest           |
| reply_params   | UpdateAppSettingsStateReply             |

## 获取特定应用的所有关联用户(ApplicationUsers)

| 类型           | 值                                    |
| -------------- | ------------------------------------- |
| service        |                                       |
| uri            | /api/v1/app/applications/:appId/users |
| method         | GET                                   |
| request_params | ApplicationUsersRequest               |
| reply_params   | ApplicationUsersReply                 |

## 将特定用户关联到特定应用(AddApplicationUser)

| 类型           | 值                             |
| -------------- | ------------------------------ |
| service        |                                |
| uri            | /api/v1/app/applications/users |
| method         | POST                           |
| request_params | AddApplicationUserRequest      |
| reply_params   | AddApplicationUserReply        |

## 修改特定用户与特定应用的关联状态(UpdateApplicationUserState)

| 类型           | 值                                          |
| -------------- | ------------------------------------------- |
| service        |                                             |
| uri            | /api/v1/app/applications/users/state/:state |
| method         | PATCH                                       |
| request_params | UpdateApplicationUserStateRequest           |
| reply_params   | UpdateApplicationUserStateReply             |

## 设置Application密钥Key(SetApplicationSecret)

| 类型           | 值                              |
| -------------- | ------------------------------- |
| service        |                                 |
| uri            | /api/v1/app/applications/secret |
| method         | POST                            |
| request_params | SetApplicationSecretRequest     |
| reply_params   | SetApplicationSecretReply       |

## 设置Application微信信息(SetApplicationWeChat)

| 类型           | 值                              |
| -------------- | ------------------------------- |
| service        |                                 |
| uri            | /api/v1/app/applications/wechat |
| method         | POST                            |
| request_params | SetApplicationWeChatRequest     |
| reply_params   | SetApplicationWeChatReply       |

## 获取自增ID列表(AutoIDConfList)

| 类型           | 值                                  |
| -------------- | ----------------------------------- |
| service        |                                     |
| uri            | /api/v1/pub/auto_id/params/\*params |
| method         | GET                                 |
| request_params | AutoIDConfListRequest               |
| reply_params   | AutoIDConfListReply                 |

## 创建自增ID(AddAutoIDConf)

| 类型           | 值                   |
| -------------- | -------------------- |
| service        |                      |
| uri            | /api/v1/pub/auto_id  |
| method         | POST                 |
| request_params | AddAutoIDConfRequest |
| reply_params   | AddAutoIDConfReply   |

## 获取自增ID(AutoIDConf)

| 类型           | 值                                                |
| -------------- | ------------------------------------------------- |
| service        |                                                   |
| uri            | /api/v1/pub/auto_id/:appId/:tableName/:columnName |
| method         | GET                                               |
| request_params | AutoIDConfRequest                                 |
| reply_params   | AutoIDConfReply                                   |

## 更新自增ID(UpdateAutoIDConf)

| 类型           | 值                      |
| -------------- | ----------------------- |
| service        |                         |
| uri            | /api/v1/pub/auto_id     |
| method         | PUT                     |
| request_params | UpdateAutoIDConfRequest |
| reply_params   | UpdateAutoIDConfReply   |

## 更新自增ID状态(UpdateAutoIDConfState)

| 类型           | 值                           |
| -------------- | ---------------------------- |
| service        |                              |
| uri            | /api/v1/pub/auto_id/state    |
| method         | PATCH                        |
| request_params | UpdateAutoIDConfStateRequest |
| reply_params   | UpdateAutoIDConfStateReply   |

## 新建用户(AddUser)

| 类型           | 值                 |
| -------------- | ------------------ |
| service        |                    |
| uri            | /api/v1/users/user |
| method         | POST               |
| request_params | AddUserRequest     |
| reply_params   | AddUserReply       |

## 查询用户(UserInfo)

| 类型           | 值                                          |
| -------------- | ------------------------------------------- |
| service        |                                             |
| uri            | /api/v1/users/user/:appID/:userType/:userID |
| method         | GET                                         |
| request_params | UserInfoRequest                             |
| reply_params   | UserInfoReply                               |

## 分页查询用户(UserList)

| 类型           | 值                                 |
| -------------- | ---------------------------------- |
| service        |                                    |
| uri            | /api/v1/users/user/params/\*params |
| method         | GET                                |
| request_params | UserListRequest                    |
| reply_params   | UserListReply                      |

## 修改用户信息(UpdateUser)

| 类型           | 值                 |
| -------------- | ------------------ |
| service        |                    |
| uri            | /api/v1/users/user |
| method         | PUT                |
| request_params | UpdateUserRequest  |
| reply_params   | UpdateUserReply    |

## 修改用户状态(UpdateUserState)

| 类型           | 值                       |
| -------------- | ------------------------ |
| service        |                          |
| uri            | /api/v1/users/user/state |
| method         | PATCH                    |
| request_params | UpdateUserStateRequest   |
| reply_params   | common.OkBody            |

## 修改密码（修改自己密码）(UpdatePassword)

| 类型           | 值                     |
| -------------- | ---------------------- |
| service        |                        |
| uri            | /api/v1/users/password |
| method         | PUT                    |
| request_params | UpdatePasswordRequest  |
| reply_params   | common.OkBody          |

## 管理员修改密码(UpdatePasswordAdmin)

| 类型           | 值                           |
| -------------- | ---------------------------- |
| service        |                              |
| uri            | /api/v1/users/password/admin |
| method         | PUT                          |
| request_params | UpdatePasswordAdminRequest   |
| reply_params   | common.OkBody                |

## 获取用户地址(UserAddress)

| 类型           | 值                                                        |
| -------------- | --------------------------------------------------------- |
| service        |                                                           |
| uri            | /api/v1/users/address/:appID/:userType/:userID/:addressID |
| method         | GET                                                       |
| request_params | UserAddressRequest                                        |
| reply_params   | UserAddressReply                                          |

## 获取用户地址列表(UserAddressList)

| 类型           | 值                                    |
| -------------- | ------------------------------------- |
| service        |                                       |
| uri            | /api/v1/users/address/params/\*params |
| method         | GET                                   |
| request_params | UserAddressListRequest                |
| reply_params   | UserAddressListReply                  |

## 获取用户联系方式(UserContact)

| 类型           | 值                                             |
| -------------- | ---------------------------------------------- |
| service        |                                                |
| uri            | /api/v1/users/contact/:appID/:userType/:userID |
| method         | GET                                            |
| request_params | UserContactRequest                             |
| reply_params   | UserContactReply                               |
