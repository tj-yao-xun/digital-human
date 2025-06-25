class LocalCache {
    // // 设置
    // setCache(key: string, value: never): void {
    //     window.localStorage.setItem(key, JSON.stringify(value))
    // }
    //
    // // 查询
    // getCache(key: string): never {
    //     const value: string | null = window.localStorage.getItem(key)
    //     if (value) {
    //         return JSON.parse(value)
    //     }
    // }
    //
    // // 设置字符串值
    // setStringCache(key: string, value: string): void {
    //     window.localStorage.setItem(key, value)
    // }
    //
    // // 查询字符串值
    // getStringCache(key: string): string {
    //     const value: string | null = window.localStorage.getItem(key)
    //     if (value == null) {
    //         return ""
    //     }
    //     return value
    // }
    //
    // // 删除
    // delCache(key: string): void {
    //     window.localStorage.removeItem(key)
    // }
    //
    // // 清理
    // clearCache(): void {
    //     window.localStorage.clear()
    // }
}

export default new LocalCache()
