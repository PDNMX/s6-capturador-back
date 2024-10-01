import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';

import ControllerPlanning from '../controllers/ControllerPlanning';

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerPlanning.checkRequest)];

router.get('/:id', validations, asyncHandler(ControllerPlanning.getById));
router.post('/:id', validations, asyncHandler(ControllerPlanning.addPlanning));

// router.post('/', validations, asyncHandler(ControllerRecords.addRecord));
// router.delete('/:id', validations, asyncHandler(ControllerRecords.deleteRecord));

// router.post('/getById', validations, asyncHandler(ControllerRecords.getById));
// router.post('/query', validations, asyncHandler(ControllerRecords.query));
// router.post('/update', validations, asyncHandler(ControllerRecords.updateData));
// router.post('/insert', validations, asyncHandler(ControllerRecords.insertData));
// router.post('/delete', validations, asyncHandler(ControllerRecords.deleteData));

export default router;