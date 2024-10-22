import { getWinners } from "../repositories/movie-repository";
import { groupProducerByWins } from "../utils/group-producers-by-wins";

export async function getMovies() {
    const winners = await getWinners()

    const producerWins = groupProducerByWins(winners)

    const producersWithMoreThanOneWin = producerWins.filter(movie => {
        const [producer] = Object.keys(movie)
        return movie[producer].length > 1
    })

    const movies = {}
    producersWithMoreThanOneWin.forEach(movie => {
        const [key] = Object.keys(movie)

        const spaceBetweenMaxMovies = movie[key].map((current, index) => {
            if (movie[key][index + 1]) {
                const filteredMovies = movie[key][index + 1]
                const subYears = { interval: Math.abs(filteredMovies.year - current.year), previousWin: filteredMovies.year, followingWin: current.year }
                return subYears
            }
            return []
        }).flat()
        const [max] = spaceBetweenMaxMovies.sort((a, b) => b.interval - a.interval)

        const spaceBetweenMinMovies = movie[key].map((current, index) => {
            const filteredMovies = movie[key].filter((_, skipIndex) => skipIndex !== index)
            const subYears = filteredMovies.map(filMovie => ({ interval: Math.abs(filMovie.year - current.year), previousWin: filMovie.year, followingWin: current.year }))
            return subYears
        }).flat()
        const [min] = spaceBetweenMinMovies.sort((a, b) => a.interval - b.interval)

        Object.assign(movies, { [key]: { movies: movie[key], max, min } })
    })
    return movies
}