import { Request, Response } from 'express';
import { getMovies } from '../models/movie-model';

export const getMoviesController = async (req: Request, res: Response) => {
    try {
        const movies = await getMovies()
        res.json(movies);
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
};