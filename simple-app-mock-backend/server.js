import express from 'express';
import cors from 'cors';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Mock backend running at http://localhost:${PORT}`);
});
