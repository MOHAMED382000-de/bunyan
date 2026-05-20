//* Model
const Admin = require('../model/Admin.model');
//* Joi Schema
const adminschema = require('./validation/admin.validation');

//* JWT
const jwt = require('jsonwebtoken');
const signTolen = (id) => {
  return jwt.sign({ id }, process.env.SecretKey, { expiresIn: '7d' });
};
//* login controller

//* export

