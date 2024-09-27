import { Router } from 'express';
import health from './health';
import contracts from './contracts';
import awards from './awards';
import records from './records';
import tenders from './tenders';

const routes = Router();
routes.use('/health', health);
routes.use('/records', records);
routes.use('/awards', awards);
routes.use('/contracts', contracts);
routes.use('/tender', tenders);
routes.use('/implements', contracts);
export default routes;
