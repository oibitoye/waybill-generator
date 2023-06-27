const jwt = require('jsonwebtoken');

// Middleware function to verify token
const verifyToken = (req, res, next) => {
  
  const token = req.headers['x-auth-token']
  console.log(`Token: ${token}`)

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET_KEY);

    // Attach the user ID to the request object
    req.userId = decoded.userId;
    req.userName = decoded.userName

    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = verifyToken;
