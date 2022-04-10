import { ObjectId } from 'mongo';
import { Genre } from '../core/constants.ts';
import { Professional } from './professional.model.ts';

export interface MovieModel {
    _id?: ObjectId;
    title: string;
    genre: Genre;
    description?: string;
    runningTime: number;
    realeseDate: Date;
    writter?: string;
    director?: string;
    casts: Professional[];
}