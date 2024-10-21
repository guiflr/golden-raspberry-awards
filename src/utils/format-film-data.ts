import { Movie } from "../types/Movie";

export function formatMovieData(headerWtiData: any) {
    const [data] = Object.values(headerWtiData) as string[]
    const [year, title, studios, producers, winner] = data.split(';')

    const movie: Movie = {
        year: Number(year),
        title: title,
        studios: studios,
        producers: producers,
        winner: winner?.toUpperCase() === 'YES' ? 'YES' : 'NOT',
    };

    return movie
}