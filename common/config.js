class config{
    constructor(){
        this.devMode = true;
        this.dbName = 'premierx';
        this.dbUserName = 'premierxdev';
        this.dbPass = 'Adminjpw421z';
        this.dbConfig = {
            host: 'premierxdevdb.c8voxwvxmwuq.eu-central-1.rds.amazonaws.com',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
            operatorsAliases: false
        }
        this.enableLogging = true;
        this.enableTableSync = true;

        if(this.devMode){
            this.dbName = 'nodesample';
            this.dbUserName = 'root';
            this.dbPass = '';;
            this.dbConfig = {
                host: 'localhost',
                dialect: 'mysql',
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
                operatorsAliases: false
            }
        }

        sequelize = new Sequelize(this.dbName, this.dbUserName, this.dbPass, this.dbConfig);
        sequelize
            .authenticate()
            .then(() => {
                common.log('Connection has been established successfully.');
            })
            .catch(err => {
                common.log('Unable to connect to the database:');
                common.log(err)
            });
    }
}

module.exports = config;