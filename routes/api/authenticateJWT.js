const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Log the authorization header for debugging
 /// console.log('Authorization Header:', authHeader);

  
  if (authHeader) {
    // Fix the case when Bearer is directly attached to the token without space
    let token = authHeader.replace('Bearer', '').trim();  // Remove 'Bearer' and any extra spaces

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
      }

      req.user = user; // Attach user info from token to request object
      next();  // Pass control to the next handler
    });
  } else {
    res.status(401).json({ message: "Authorization token is missing" });
  }
};

module.exports = authenticateJWT;
