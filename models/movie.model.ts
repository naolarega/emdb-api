import { ObjectId } from 'mongo';

export interface MovieModel {
    _id?: ObjectId;
    title: string;
    description?: string;
    runningTime: number;
    writter?: string;
    director?: string;
}