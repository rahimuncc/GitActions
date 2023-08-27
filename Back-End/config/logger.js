const winston = require('winston');
const createLogStream = require('./createLogStream'); // Assuming you've named the previous code as createLogStream.js

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.Stream({
      stream: createLogStream(), // Use the rotating file stream here
    }),
  ],
});

module.exports = logger;
