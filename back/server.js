const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const waybillRoutes = require('./routes/waybill');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = process.env.REACT_APP_PORT;

// Connect to MongoDB
mongoose.connect(process.env.REACT_APP_MONGO_URL, {
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// ?retryWrites=true&w=majority

app.use(express.json());
// Enable CORS
app.use(cors());

// TEMP START
const User = require('./models/User');

// Create the first user account (temporary route)
app.post('/api/first-user', async (req, res) => {
  try {
    // Check if there are any existing users
    const existingUsers = await User.find();

    if (existingUsers.length > 0) {
      return res.status(400).json({ error: 'First user account already created' });
    }

    // const { username, password } = req.body;
    const data = JSON.parse(process.env.REACT_APP_FIRST_USER);

    // Create a new user document
    const newUser = new User(data);

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(data.password, salt);

    // Save the user to the database
    await newUser.save();

    res.json({ message: 'First user account created successfully' });
  } catch (error) {
    console.error('First user account creation error:', error);
    res.status(500).json({ error: error });
  }
});

// TEMP END

// Use the route handlers
app.use('/api/auth', authRoutes);
app.use('/api/waybill', waybillRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started on port ${port}`);
});
