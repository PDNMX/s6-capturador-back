import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';

import ControllerTender from '../controllers/ControllerTenders';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerTender.checkRequest)];

router.get('/:id', validations, asyncHandler(ControllerTender.getByID));
router.post('/:id', validations, asyncHandler(ControllerTender.addTender));

export default router;
