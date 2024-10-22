import { Router } from 'express';
import { getMoviesController } from '../controllers/movie-controller';

const movieRouter = Router();

movieRouter.get('/', getMoviesController);

export default movieRouter;
