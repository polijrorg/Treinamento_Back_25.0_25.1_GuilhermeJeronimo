import { Router } from 'express';

import PiuService from '../services/PiuService';

const piusRouter = Router();

piusRouter.post('/create/:userid', (req, res) => {
  const { userid} = req.params;
  const { texto, likesNumber, commentsNumber } = req.body;

  if (!userid || !texto || !likesNumber || !commentsNumber) {
    return res.status(400).json({
      message: 'Os campos a seguir são obrigatórios: userid, texto, número de likes e número de comentários',
    });
  }

  const piu = PiuService.create(userid, texto, likesNumber, commentsNumber);
  return res.status(201).json(piu);
});

piusRouter.get('/readAll', (req, res) => {
  const pius = PiuService.listAll();
  return res.json(pius);
});

piusRouter.get('/read/:id', (req, res) => {
  const piu = PiuService.findById(req.params.id);

  if (!piu) {
    return res.status(404).json({ message: 'Piu não encontrado' });
  }

  return res.json(piu);
});

piusRouter.delete('/delete/:id', (req, res) => {
  const deleted = PiuService.delete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Piu não encontrado' });
  }

  return res.status(204).send();
});

export default piusRouter;