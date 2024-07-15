import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';
import ControllerHealth from '../controllers/ControllerHealth';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerHealth.checkRequest)];

router.post('/', validations, asyncHandler(ControllerHealth.executeQuery));
router.post('/getAll', validations, asyncHandler(ControllerHealth.getAll));
router.post('/query', validations, asyncHandler(ControllerHealth.query));

export default router;
