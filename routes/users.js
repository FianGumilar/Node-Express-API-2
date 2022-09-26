const express = require('express');
const router = express.Router();

const { getUsers, postUsers, getUserById, deleteUser, updateUser } = require('../controllers/users')

router.get('/', getUsers);

router.post('/', postUsers);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;