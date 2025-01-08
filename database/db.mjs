import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,     
    user: process.env.DB_USER,      
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,  // Wait for a connection if none are available
    connectionLimit: 10,       // Limit the number of simultaneous connections
    queueLimit: 0              // No limit on the connection queue
});

export default db;