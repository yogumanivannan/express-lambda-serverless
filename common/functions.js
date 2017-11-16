class commonFunction{
    constructor(){
        //todo
    }

    log(data){
        if(config.enableLogging){
            console.log(data);
        }
    }
}

module.exports = commonFunction