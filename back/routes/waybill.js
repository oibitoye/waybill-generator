const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

// Import the Waybill model
const Waybill = require('../models/Waybill');
// Import the User model
const User = require('../models/User');

// Generate waybill route
router.post('/create', verifyToken, async (req, res) => {
  let data = req.body;
  let creator = req.userName;
  data.creator = creator;
  data.code = genUrlCode()
  console.log(data)

  const user = await User.findOne({ username: creator });
  if (user?.role > 1 ) {
    try {
      // Create a new waybill document
      const waybill = new Waybill(data);
  
      // Save the waybill to the database
      await waybill.save();
  
      res.status(200).json({ 
        status: true,
        message: 'Waybill generated successfully' });
    } catch (error) {
      console.error('Waybill generation error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
});

// Fetch waybill history route
router.get('/view/:code', async (req, res) => {
  const code = req.params.code
  try {
    // Fetch all waybills from the database
    const data = await Waybill.findOne({ code });
    const user = await User.findOne({ username: data.creator });
    let waybill = data.toObject();
    waybill.dispatcher = `${user.firstName} ${user.lastName}`;
    res.json(waybill);
  } catch (error) {
    console.error('Waybill history retrieval error:', error);
    res.status(500).json({ error: 'Server error' });
  }
  });

router.get('/history', async (req, res) => {
    try {
      // Fetch all waybills from the database
      const waybills = await Waybill.find();
  
      res.json(waybills);
    } catch (error) {
      console.error('Waybill history retrieval error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });


function genUrlCode() {
  var text = "";
  var possible = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 12; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
  

module.exports = router;
