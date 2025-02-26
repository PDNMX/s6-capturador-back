import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { checkJwt } from '../middleware/checkJwt';

import ControllerUser from '../controllers/ControllerUser';

const usersRouter: Router = Router();

const validations = [checkJwt, asyncHandler(ControllerUser.checkRequest)];

// createUser
usersRouter.post('/', validations, asyncHandler(ControllerUser.createUser));
usersRouter.get('/', validations, asyncHandler(ControllerUser.getAllUsers));
usersRouter.get('/:id', validations, asyncHandler(ControllerUser.getUserById));
usersRouter.put('/:id', validations, asyncHandler(ControllerUser.updateUser));
usersRouter.delete('/:id', validations, asyncHandler(ControllerUser.deleteUser));

export default usersRouter;
