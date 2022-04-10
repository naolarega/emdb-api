import { Router } from 'oak';

export const movieRouter = new Router({ prefix: '/movie' });

movieRouter.get('/', context => {
    context.response.body = { movies: [] };
});