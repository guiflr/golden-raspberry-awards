import { Router } from 'express';
import { getMovies } from '../controllers/movie-controller';

const movieRouter = Router();

movieRouter.get('/', getMovies);

export default movieRouter;
