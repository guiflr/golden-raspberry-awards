import fs from 'fs';
import csv from 'csv-parser';
import { prisma } from './database/prisma';
import { formatMovieData } from './utils/format-film-data';
import { createMovie } from './repositories/movie-repository';

async function processCSV(filePath: string) {
    fs.createReadStream(filePath)
        .pipe(csv({
            separator: '\t'
        }))
        .on('data', (headerWtiData: any) => {
            const movie = formatMovieData(headerWtiData)
            createMovie(movie);
        })
        .on('end', async () => {
            console.log('All movies was inserted.');
            await prisma.$disconnect();
        });
}

processCSV('movielist.csv');
