const {config} = require ('dotenv');
config();

module.exports={
     //server config
     PORT: process.env.PORT|| 3000,
    //DataBase Config
    userDB: process.env.userDB,
    PasswordDB: process.env.PasswordDB,
    ServerDB: process.env.ServerDB,
    DataBaseDB: process.env.DataBaseDB,
    portDB: process.env.portDB,
}