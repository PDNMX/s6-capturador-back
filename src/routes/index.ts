import { Router } from 'express';
import health from './health';
import awards from './awards'

const routes = Router();
routes.use('/health', health);
routes.use('/awards', awards);

export default routes;
