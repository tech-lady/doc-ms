import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '../models';

dotenv.config({ silence: true });

/**
 * Secret token for jsonwebtoken
 */
const secret = process.env.SECRET;

/**
 * verifyToken - Verifies if a token supplied or not is valid
 *
 * @param  {Object} req  Request Object
 * @param  {Object} res  Response Object
 * @param  {Object} next
 * @returns {Object} Response status
 */
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization || req.headers['x-access-token'];
  if (!token) {
    return res.status(401).json({ message: 'Authentication required to access this route!' });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Authentication failed due to invalid token!' });
    }
    req.decoded = decoded;
    next();
  });
};

/**
 * verifyAdmin - Verifies that the user role is supplied is an admin
 *
 * @param  {Object} req  Request Object
 * @param  {Object} res  Response Object
 * @param  {Object} next
 * @returns {Object} Response Object
 */
export const verifyAdmin = (req, res, next) => {
  db.Role.findById(req.decoded.roleId)
    .then((role) => {
      if (role.title === 'admin') {
        next();
      } else {
        return res.status(403).send({ message: 'Access forbidden, you are not an admin!' });
      }
    });
};
