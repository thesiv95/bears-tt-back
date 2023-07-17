import { Router } from 'express';
import * as UsersController from './../controllers/usersController';

const usersRouter = Router();

usersRouter.get('/', UsersController.getUsersHandler);
usersRouter.post('/', UsersController.postUsersHandler);

export default usersRouter;