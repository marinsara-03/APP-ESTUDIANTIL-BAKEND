const  mysql = require('mysql2/promise');
const config = require('../config,js');
const { userDB, portDB } = require('../config');
const { createPool } = require('mysql2');



const dbauth = {
    host: config.ServerDB,
    user: config.userDB,
    password: config.PasswordDB,
    database:config.DataBaseDb,
    port:config.portDB,
    waitForconections:true,
    conntionLimit:10,
    queueLimit:0

};
async function getConnection() {
    const pool= mysql.createPool(dbauth);
    return createPool;


}
module.exports = getConnection;