import { MinMax, Result } from "../types/Results"

export function getMinTimeProducer(results: Result) {
    return Object.values(results).reduce((acc, current, index: number) => {
        if (index === 0) {
            acc.push(current)
            return acc
        }

        if (acc.find((data: any) => data.min.interval > current.min.interval)) {
            acc = [current]
            return acc
        }

        if (acc.find((data: any) => data.min.interval === current.min.interval)) {
            acc.push(current)
            return acc
        }

        return acc
    }, [] as MinMax[])
}