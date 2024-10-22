import { Movie } from "../types/Movie";
import { getProducerWins } from "./get-producer-wins";

export function groupProducerByWins(movies: Movie[]) {
    return movies.map((winner, index) => {
        const producers = winner.producers.split(',')
        const groupedProducerWins = producers.map(producer => {
            const wins = getProducerWins(movies, index, producer)
            return { [producer]: wins }
        })

        return groupedProducerWins
    }).flat()
}