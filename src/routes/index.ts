import { Router } from 'express';
import health from './health';
import contracts from './contracts';
import awards from './awards';
import records from './records';
import tenders from './tenders';
import parties from './parties';
import planning from './planning';
import usersRouter from './users';
import institutionRouter from './institution';

const routes = Router();
routes.use('/health', health);
routes.use('/records', records);
routes.use('/awards', awards);
routes.use('/contracts', contracts);
routes.use('/tender', tenders);
routes.use('/parties', parties);
routes.use('/implements', contracts);
routes.use('/planning', planning);
routes.use('/users', usersRouter);
routes.use('/institution', institutionRouter);

export default routes;
