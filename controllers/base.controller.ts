import { Router } from 'oak';
import { movieRouter } from './movie.controller.ts';

export const baseRouter = new Router();

baseRouter.use(movieRouter.routes());