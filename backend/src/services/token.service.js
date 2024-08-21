const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config/config');

const TOKEN_EXPIRATION_DAYS = 15;

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (userId, expires, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret);
};

/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user) => {
  return generateToken(user.id, moment().add(TOKEN_EXPIRATION_DAYS, 'days'));
};

module.exports = {
  generateToken,
  generateAuthTokens,
};
