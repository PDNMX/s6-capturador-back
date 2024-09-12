import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';
import ControllerRecords from '../controllers/ControllerRecords';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerRecords.checkRequest)];

router.post('/', validations, asyncHandler(ControllerRecords.addRecord));
router.get('/', validations, asyncHandler(ControllerRecords.getAll));
router.delete('/:id', validations, asyncHandler(ControllerRecords.deleteRecord));

router.post('/getById', validations, asyncHandler(ControllerRecords.getById));
router.post('/query', validations, asyncHandler(ControllerRecords.query));
router.post('/update', validations, asyncHandler(ControllerRecords.updateData));
router.post('/insert', validations, asyncHandler(ControllerRecords.insertData));
router.post('/delete', validations, asyncHandler(ControllerRecords.deleteData));

export default router;
