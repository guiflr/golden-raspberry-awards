import { Movie } from "../types/Movie"

export function getProducerWins(movies: Movie[], mainIndex: number, producer: string) {
    const producerWins = movies.filter((movie, movieIndex) => {
        if (mainIndex === movieIndex) return true
        if (producerHasOtherWins(producer, movie)) {
            return true
        }
        return false
    })

    return producerWins
}

function producerHasOtherWins(producer: string, movie: Movie) {
    return movie.producers.search(producer) > -1 ? true : false
}