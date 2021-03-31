import { Router } from 'express';

import TextUserController from './app/controller/TextUserController';
import UserController from './app/controller/UserController';

const routes = new Router();

// user 
routes.post('/user/new', UserController.store)
routes.get('/user', UserController.getAll);
routes.get('/user/:id', UserController.getById);
routes.delete('/user/:id', UserController.deleteTextUser);
// routes.post('/textUser/avatar', UserController.updateUser);

// texto // comentario usuario
routes.put('/textUser/:id', TextUserController.updateTextUser);
routes.post('/textUser/new', TextUserController.store);
routes.get('/textUser', TextUserController.getAll);
routes.get('/textUser/:id', TextUserController.getById);
routes.post('/textUser/avatar', TextUserController.updateTextUser);
routes.delete('/textUser/:id', TextUserController.deleteTextUser);

export default routes;
