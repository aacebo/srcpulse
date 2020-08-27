import { Router } from 'express';

import auth from './api/auth.router';

const router = Router();

router.get('/', (_req, res) => {
  res.send('api root');
});

router.use('/auth', auth);

export default router;
