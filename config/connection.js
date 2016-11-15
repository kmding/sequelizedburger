//require sequelize
var Sequelize = require('sequelize'), connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  console.log('jaws_db_loaded');
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
}


module.exports = connection;
