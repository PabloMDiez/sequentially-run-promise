const sequentiallyRunPromise = async (promise, times = 1, accumulator = []) => {
    if (times === 0) {
        return accumulator
    }
    const result = await promise(times, accumulator)
    accumulator.push(result)
    return sequentiallyRunPromise(promise, times - 1, accumulator)
}

module.exports = sequentiallyRunPromise
