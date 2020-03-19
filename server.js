const express = require('express');
const helmet = require('helmet');

const cors = require('cors');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();
server.use(helmet());

server.use(cors());

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;