const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import the User model
const User = require('../models/User');

// Create user route
router.post('/register', async (req, res) => {
    const { username, password, firstName, lastName, role } = req.body;
  
    try {
      // Check if a user with the same username already exists
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
      }
  
      // Create a new user document
      const newUser = new User({ username, password, firstName, lastName, role });
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
  
      // Save the user to the database
      await newUser.save();
  
      res.json({ message: 'User created successfully' });
    } catch (error) {
      console.error('User creation error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    let data = user
    data._id = "*****"
    data.password = "******"

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, userName: user.username }, process.env.REACT_APP_SECRET_KEY);
    // Return the token
    res.json({
      token,
      data
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
