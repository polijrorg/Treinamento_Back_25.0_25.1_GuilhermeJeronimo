import { Router } from 'express';

import UserService from '../services/UserService';

const usersRouter = Router();

usersRouter.post('/create', (req, res) => {
  const { name, email, number, senha } = req.body;

  if (!name || !email || !number || !senha) {
    return res.status(400).json({
      message: 'Os campos a seguir são obrigatórios: name, email, number e senha',
    });
  }

  const user = UserService.create(name, email, number, senha);
  return res.status(201).json(user);
});

usersRouter.get('/readAll', (req, res) => {
  const users = UserService.listAll();
  return res.json(users);
});

usersRouter.get('/read/:id', (req, res) => {
  const user = UserService.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.json(user);
});

usersRouter.patch('/update/:id', (req, res) => {
  const { name, email, number, senha } = req.body;

  const updatedUser = UserService.update(req.params.id, name, email, number, senha);

  if (!updatedUser) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.json(updatedUser);
});

usersRouter.delete('/delete/:id', (req, res) => {
  const deleted = UserService.delete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(204).send(); 
});

export default usersRouter;