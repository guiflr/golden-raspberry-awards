import { Result } from "../types/Results";
import { getWinners } from "../repositories/movie-repository";
import { getMaxTimeProducer } from "../utils/get-max-time-producer";
import { getMinTimeProducer } from "../utils/get-min-time-producer";
import { groupProducerByWins } from "../utils/group-producers-by-wins";
import { getMinSpaceBetweenProducerWins } from "../utils/get-min-space-between-producer-wins";
import { getMaxSpaceBetweenProducerWins } from "../utils/get-max-space-between-producer-wins";

export async function getMovies() {
    const winners = await getWinners()
    const producerWins = groupProducerByWins(winners)

    const producersWithMoreThanOneWin = producerWins.filter(movie => {
        const [producer] = Object.keys(movie)
        return movie[producer].length > 1
    })

    const results: Result = {}
    producersWithMoreThanOneWin.forEach(movie => {
        const [key] = Object.keys(movie)
        const maxSpaceBetweenMovies = getMaxSpaceBetweenProducerWins(movie[key], key)
        const minSpaceBetweenMovies = getMinSpaceBetweenProducerWins(movie[key], key)
        Object.assign(results, { [key]: { max: maxSpaceBetweenMovies, min: minSpaceBetweenMovies } })
    })

    const badProducers = getMaxTimeProducer(results)
    const theBestProducers = getMinTimeProducer(results)
    const extractBadProducersValues = badProducers.map(producer => producer.max)
    const extractTheBestProducersValues = theBestProducers.map(producer => producer.min)

    return { max: extractBadProducersValues, min: extractTheBestProducersValues }
}