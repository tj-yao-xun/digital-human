import type { NullBool, NullInt, NullString } from "./requestObj.ts";
/**
 * 构建安全的空字符串包装对象
 * @param data 原始字符串数据（允许为 null/undefined）
 * @returns {NullString} 返回包装对象，包含有效性标识和值
 */
export function BuildNullString(data: string | null | undefined): NullString {
  return data !== null && data !== undefined
    ? { valid: true, data: data }
    : {
        valid: false,
        data: "",
      };
}
/**
 * 构建安全的空数字包装对象（含NaN校验）
 * @param data 原始数字数据（允许为 null/undefined/NaN）
 * @returns {NullInt} 返回包装对象，包含有效性标识和值
 */
export function BuildNullInt(data: number | null | undefined): NullInt {
  // 处理数字类型的特殊转换
  return data !== null && data !== undefined && !isNaN(data)
    ? {
        valid: true,
        data: data,
      }
    : { valid: false, data: 0 };
}
/**
 * 构建安全的空布尔包装对象
 * @param data 原始布尔数据（允许为 null/undefined）
 * @returns {NullBool} 返回包装对象，包含有效性标识和值
 */
export function BuildNullBool(data: boolean | null | undefined): NullBool {
  // 增强布尔类型转换逻辑
  return data !== null && data !== undefined
    ? { valid: true, data: data }
    : {
        valid: false,
        data: false,
      };
}
