import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';
import ControllerHealth from '../controllers/ControllerHealth';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerHealth.checkRequest)];

router.post('/', validations, asyncHandler(ControllerHealth.executeQuery));

export default router;
