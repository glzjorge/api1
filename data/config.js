const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'api',
    password: 'api',
    database: 'api',
   
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;