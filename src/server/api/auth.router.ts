import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.send('hit auth');
});

export default router;
