import { ObjectId } from 'mongo';
import { MovieModel } from './movie.model.ts';
import { profession } from '../core/constants.ts';

export interface Professional {
    _id: ObjectId;
    name: string;
    dateOfBirth: Date;
    profession: profession;
    workedOn: MovieModel[];
}