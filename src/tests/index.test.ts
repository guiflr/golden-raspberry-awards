import request from 'supertest';
import { app } from '../server';

describe('Movies API Integration Test', () => {
    it('should exists properties', async () => {
        const res = await request(app)
            .get('/api/movies')

        expect(res.statusCode).toEqual(200);
        expect(res.body.max).toBeTruthy()
        expect(res.body.min).toBeTruthy()
        expect(Array.isArray(res.body.max)).toBe(true)
        expect(Array.isArray(res.body.min)).toBe(true)
    });

    it('should return the correct values', async () => {
        const res = await request(app)
            .get('/api/movies')

        expect(res.body.max.length).toEqual(1);
        expect(res.body.min.length).toEqual(2);

        expect(res.body.min[0].interval).toBeTruthy();
        expect(res.body.min[0].interval).toEqual(1);

        expect(res.body.max[0].interval).toBeTruthy();
        expect(res.body.max[0].interval).toEqual(13);
    });
});