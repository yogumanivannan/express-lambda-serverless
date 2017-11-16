console.log('initializing...');

const serverless = require('serverless-http');
const express = require('express');
const appEvent = express();

Sequelize = require('sequelize');
Op = Sequelize.Op;
sequelize = {};
const configuration = require('./common/config')
config = new configuration();
const Common = require('./common/functions');
common = new Common();

ereq = {};
eRes = {};


common.log('devmode ->'+config.devMode);


appEvent.get('/event', (req, res) => {
    //requestHandler = new requestResponse(req, res);
    eReq = req;
    eRes = res;
    const eventController = require('./module/event/controller/event');
    let eventControllerObj = new eventController();
    eventControllerObj.getEvent();
    common.log('exiting...')
    //res.send("I'm fine!");
});


module.exports.handler = serverless(appEvent);
