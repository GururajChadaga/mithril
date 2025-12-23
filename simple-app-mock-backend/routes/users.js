import express from 'express';
import users from '../data/users.js';

const router = express.Router();
const DELAY = 1000;

// GET all users
router.get('/', (req, res) => {
  setTimeout(() => {
    res.json(users);
  }, DELAY);
});

// GET user by id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  setTimeout(() => {
    user ? res.json(user) : res.status(404).json({ message: 'User not found' });
  }, DELAY);
});

// POST add user
router.post('/', (req, res) => {
  const newUser = {
    id: Math.max(...users.map((u) => u.id)) + 1,
    ...req.body,
  };

  users.push(newUser);

  setTimeout(() => {
    res.status(201).json(newUser);
  }, DELAY);
});

// PUT update user
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[index] = {
    ...users[index],
    ...req.body,
  };

  setTimeout(() => {
    res.json(users[index]);
  }, DELAY);
});

export default router;
