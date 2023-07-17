import { Router } from 'express';
import * as WinnersController from './../controllers/winnersController';

const winnersRouter = Router();

winnersRouter.get('/', WinnersController.getWinnersHandler);
winnersRouter.post('/', WinnersController.postWinnersHandler);

export default winnersRouter;