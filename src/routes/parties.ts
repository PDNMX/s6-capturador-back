import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';
import ControllerParties from '../controllers/ControllerParties';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerParties.checkRequest)];

router.get('/:id', validations, asyncHandler(ControllerParties.getByID));
router.get('/:id/list', validations, asyncHandler(ControllerParties.getList));
router.get('/:id/list/:type', validations, asyncHandler(ControllerParties.getList));
router.post('/:id', validations, asyncHandler(ControllerParties.addParties));

export default router;
