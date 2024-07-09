import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';
import ControllerContracts from '../controllers/ControllerContract';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerContracts.checkRequest)];

router.post('/', validations, asyncHandler(ControllerContracts.executeQuery));
router.post('/insert', /* validations, */ asyncHandler(ControllerContracts.insertContract));
router.post('/update', /* validations, */ asyncHandler(ControllerContracts.executeQuery));  
export default router;
