import { Router, Status } from 'oak';
import { MovieService } from '../services/movie.service.ts';
import { MovieModel } from '../models/movie.model.ts';

export const movieRouter = new Router({ prefix: '/movie' });

movieRouter.get('/', async context => {
    try {
        let movieService = new MovieService();
        let movies: MovieModel[] = await movieService.getMovies();
        context.response.body = { movies };
    }
    catch {
        context.response.status = Status.InternalServerError;
        context.response.body = { detail: "something went wrong" };
    }
});

movieRouter.post('/', async context => {
    try {
        let movieService = new MovieService();
        let movie: MovieModel = await context.request.body().value;
        let movieId = await movieService.addMovie(movie);
        context.response.body = { movieId };
    }
    catch {
        context.response.status = Status.InternalServerError;
        context.response.body = { detail: "something went wrong" };
    }
});