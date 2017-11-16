class event{
    constructor(eventId = [0]) {
        this.eventDefinition = sequelize.define('events', {
            title: Sequelize.STRING,
            description: Sequelize.TEXT,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        },{
            freezeTableName: true
        });

        if (config.enableTableSync) {
            this.eventDefinition.sync();
        }
        this.id = eventId;
    }

    getEvent(){
        return this.eventDefinition.findAll({
            where: {
                id: {
                    [Op.in]: [this.id]
                }
            }
        }).then(function(data, err){
            common.log(data);
            //eRes.send(data);
            var promise = new Promise(function(resolve, reject){
                resolve(data);
            });

            return promise;
        });
    }
}

module.exports = event