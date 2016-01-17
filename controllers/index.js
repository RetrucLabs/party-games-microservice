
const logger        = require('../lib/logger');
const _             = require('underscore');
const validator     = require('validator');
const config        = require('../config/config');

module.exports = (express) => {
  express.get('/', getRoot);
};

function getRoot(req, res) {
  logger.info('Url requested: /', req.baseUrl);
  res.status(200).send('Hello! I\'m the party games microservice');
}


/*
* Middleware functions
*/
