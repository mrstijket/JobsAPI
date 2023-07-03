const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');



const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = jwt.sign({ userId: user_id, name: user, name }, 'jwtSecret', { expiresIn: '30d' })
  res.status(StatusCodes.CREATED).json({ token });
}

const login = async (req, res) => {
  res.send('login user');
}

module.exports = { register, login };