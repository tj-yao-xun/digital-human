class CommFunc {
    async sleep(ms: number): Promise<void> {
        await this.doSleep(ms)
    }

    doSleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

export default new CommFunc()
