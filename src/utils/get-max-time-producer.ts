import { MinMax, Result } from "../types/Results";

export function getMaxTimeProducer(results: Result) {
    return Object.values(results).reduce((acc, current, index) => {
        if (index === 0) {
            acc.push(current)
            return acc
        }

        if (acc.find((data: any) => data.max.interval < current.max.interval)) {
            acc = [current]
            return acc
        }

        if (acc.find((data: any) => data.max.interval < current.max.interval)) {
            acc.push(current)
            return acc
        }

        return acc
    }, [] as MinMax[])
}