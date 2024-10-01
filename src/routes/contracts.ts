import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';
import ControllerContracts from '../controllers/ControllerContract';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerContracts.checkRequest)];

router.post('/', validations, asyncHandler(ControllerContracts.executeQuery));
router.post('/getAll', validations, asyncHandler(ControllerContracts.getAll));
router.post('/getById', validations, asyncHandler(ControllerContracts.getById));
router.post('/query', validations, asyncHandler(ControllerContracts.query));
router.post('/update', validations, asyncHandler(ControllerContracts.updateData));
router.post('/insert', /* validations, */ asyncHandler(ControllerContracts.insertData));
router.post('/test', validations, asyncHandler(ControllerContracts.prueba));

export default router;
