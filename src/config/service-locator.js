const {UserMongoRepository} = require("../entities/user/infraestructure/user-mongo-repository");

function serviceLocator(){
    let repositories = {
        userRepository: {}
    }
    if(process.env.DB_DIALECT === 'mongo') {
         repositories.userRepository = new UserMongoRepository();
    } else {
        throw new Error('This database is not supported');
    }
    return repositories;
}

module.exports = { serviceLocator: serviceLocator}