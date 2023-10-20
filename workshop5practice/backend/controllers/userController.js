const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(email, hashedPassword);
    await user.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, userId: user._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ success: false, error: "Please provide Authorization" });
  }

  const arr = req.headers.authorization.split(" ");

  if (arr.length !== 2 || arr[0] !== "Bearer") {
    return res.status(401).json({ success: false, error: "Please use Bearer scheme" });
  }

  try {
    const decoded = jwt.verify(arr[1], JWT_SECRET);
    if (decoded) {
      // If the token is valid, set the decoded user information in req
      req.user = decoded;
      next();
    } else {
      return res.status(401).json({ success: false, error: "Invalid token" });
    }
  } catch (error) {
    return res.status(401).json({ success: false, error: "Invalid token" });
  }
};


