import express from 'express';
import movieRouter from './routes/movie-routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/movies', movieRouter);

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});


export { app }