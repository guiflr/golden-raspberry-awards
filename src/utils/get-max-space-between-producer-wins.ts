import { Movie } from "../types/Movie";

export function getMaxSpaceBetweenProducerWins(movies: Movie[], producerName: string) {
    const maxSpaceBetweenMovies = movies.map((current, index) => {
        if (movies[index + 1]) {
            const filteredMovies = movies[index + 1]
            const subYears = { interval: Math.abs(filteredMovies.year - current.year), previousWin: filteredMovies.year, followingWin: current.year, producer: producerName }
            return subYears
        }
        return []
    }).flat()
    const [max] = maxSpaceBetweenMovies.sort((a, b) => b.interval - a.interval)

    return max
}