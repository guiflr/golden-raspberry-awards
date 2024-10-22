import { Movie } from "../types/Movie";
import { prisma } from "../database/prisma";

export async function createMovie(movie: Movie) {
    await prisma.film.create({
        data: movie,
    });
}

export function getWinners() {
    return prisma.film.findMany({ where: { winner: 'YES' }, orderBy: { year: 'desc' } })
}

export async function deleteMovies() {
    return await prisma.film.deleteMany()
}