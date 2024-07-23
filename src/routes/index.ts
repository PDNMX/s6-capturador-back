import { Router } from 'express';
import health from './health';
import contracts from './contracts';

const routes = Router();
routes.use('/health', health);
routes.use('/contracts', contracts);
export default routes;
