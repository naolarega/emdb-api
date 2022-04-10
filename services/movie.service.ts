import { Collection } from 'mongo';
import { BaseService } from './base.service.ts';
import { MovieModel } from '../models/movie.model.ts';

export class MovieService extends BaseService {

    private movieCollection: Collection<MovieModel>;

    constructor() {
        super();
        this.movieCollection = this.emdbApiDb.collection("movie");
    }

    async getMovies() {
        return await this.movieCollection.find().toArray();
    }

    async addMovie(movie: MovieModel) {
        return await this.movieCollection.insertOne(movie);
    }

}