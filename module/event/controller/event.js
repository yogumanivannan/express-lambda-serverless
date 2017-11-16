const eventModel = require('../../event/models/event');

class event{
    constructor(){
        //todo
    }

    getEvent(){
        let eventId = [1,2];
        let eventModelObject = new eventModel(eventId);
        eventModelObject.getEvent().then(function(result){
            eRes.send(result);
        });
    }
}

module.exports = event;