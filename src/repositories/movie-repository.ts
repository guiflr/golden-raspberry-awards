import { Movie } from "../types/Movie";
import { prisma } from "../database/prisma";

export async function createMovie(movie: Movie) {
    await prisma.film.create({
        data: movie,
    });
}