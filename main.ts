import { Application } from 'oak';
import { baseRouter } from './controllers/base.controller.ts';

const app = new Application();

app.use(baseRouter.routes(), baseRouter.allowedMethods());

app.addEventListener('listen', event => {
    console.log(`Server running ... [${event.hostname}:${event.port}]`);
});

await app.listen({ port: 80 });