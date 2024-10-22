import { Movie } from "../types/Movie";

export function getMinSpaceBetweenProducerWins(movies: Movie[], producerName: string) {
    const minSpaceBetweenMovies = movies.map((current, index) => {
        const filteredMovies = movies.filter((_, skipIndex) => skipIndex !== index)
        const subYears = filteredMovies.map(filMovie => ({ interval: Math.abs(filMovie.year - current.year), previousWin: filMovie.year, followingWin: current.year, producer: producerName }))
        return subYears
    }).flat()
    const [min] = minSpaceBetweenMovies.sort((a, b) => a.interval - b.interval)

    return min
}