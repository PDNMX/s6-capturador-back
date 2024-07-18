import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';
import ControllerHealth from '../controllers/ControllerHealth';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerHealth.checkRequest)];

router.post('/', validations, asyncHandler(ControllerHealth.health));
router.post('/getAll', validations, asyncHandler(ControllerHealth.getAll));
router.post('/getById', validations, asyncHandler(ControllerHealth.getById));
router.post('/query', validations, asyncHandler(ControllerHealth.query));
router.post('/update', validations, asyncHandler(ControllerHealth.updateData));
router.post('/insert', validations, asyncHandler(ControllerHealth.insertData));
router.post('/delete', validations, asyncHandler(ControllerHealth.deleteData));


export default router;
