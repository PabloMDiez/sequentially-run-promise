const sequentiallyRunPromise = require("./index")

describe(sequentiallyRunPromise, () => {
    const slowPromise = remainingTimes => new Promise(resolve => {
        console.log(`${remainingTimes} runs left to go`)
        setTimeout(() => resolve(remainingTimes), remainingTimes)
    })

    it('should run slowPromise serially', async () => {
        const result = await sequentiallyRunPromise(slowPromise, 5)
        expect(result).toEqual([
            5,
            4,
            3,
            2,
            1
        ])
    })
})
