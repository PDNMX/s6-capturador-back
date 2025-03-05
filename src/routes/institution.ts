import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';

import InstitutionController from '../controllers/InstitutionController';

const institutionRouter: Router = Router();

const validations = [checkJwt, asyncHandler(InstitutionController.checkRequest)];

// createUser
institutionRouter.post('/', validations, asyncHandler(InstitutionController.createInstitution));
institutionRouter.get('/', validations, asyncHandler(InstitutionController.getAllInstitutions));
institutionRouter.get('/:id', validations, asyncHandler(InstitutionController.getInstitutionByID));
institutionRouter.put('/:id', validations, asyncHandler(InstitutionController.updateInstitution));
institutionRouter.delete('/:id', validations, asyncHandler(InstitutionController.deleteInstitution));

export default institutionRouter;
