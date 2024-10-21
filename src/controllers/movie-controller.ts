import { Request, Response } from 'express';

export const getMovies = async (req: Request, res: Response) => {
    try {
        res.json({ ok: true });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};