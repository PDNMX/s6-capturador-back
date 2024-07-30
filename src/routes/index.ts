import { Router } from 'express';
import health from './health';
import contracts from './contracts';
import awards from './awards'

const routes = Router();
routes.use('/health', health);
routes.use('/awards', awards);
routes.use('/contracts', contracts);
export default routes;
