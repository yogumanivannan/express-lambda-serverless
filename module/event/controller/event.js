const eventModel = require('../../event/models/event');

class event{
    constructor(){
        //todo
    }

    getEvent(){
        let eventId = [1,2];
        let eventModelObject = new eventModel(eventId);
        return eventModelObject.getEvent().then(function(result){
            var response = {
                status: 200,
                data : result
            }
            //eRes.status(200);
            //eRes.send(response);

            var promise = new Promise(function(resolve, reject){
                resolve(response);
            });

            return promise;
        });
    }
}

module.exports = event;