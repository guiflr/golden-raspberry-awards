import fs from 'fs';
import csv from 'csv-parser';
import { formatMovieData } from './utils/format-film-data';
import { createMovie, deleteMovies } from './repositories/movie-repository';

async function processCSV(filePath: string) {
    fs.createReadStream(filePath)
        .pipe(csv({
            separator: '\t'
        }))
        .on('data', async (headerWtiData: any) => {
            const movie = formatMovieData(headerWtiData)
            await createMovie(movie);
        })
        .on('end', async () => {
            console.log('All movies was inserted.');
        });
}

deleteMovies().then(() => {
    processCSV('movielist.csv');
})

