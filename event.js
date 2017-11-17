console.log('initializing...');

const serverless = require('serverless-http');
const express = require('express');
//const cors = require('cors');
const appEvent = express();
//appEvent.use(cors());

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
    //common.log('---->');
    //common.log('---->'+eReq);
    const eventController = require('./module/event/controller/event');
    let eventControllerObj = new eventController();
    eventControllerObj.getEvent().then(function(response){
        eRes.status(response.status);
        eRes.send(response);
    });
    common.log('exiting...')
    //res.send("I'm fine!");
});


module.exports.handler = serverless(appEvent);
