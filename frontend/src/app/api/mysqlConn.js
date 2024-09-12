import mysql from 'mysql2/promise';
import 'dotenv/config';

const mysqlConn = async (query, data) => {

    try {
 const db = await mysql.createConnection({
            host: "127.0.0.1",
            port: "3306",
            database: "bloodfield",
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS
        });
        const [result] = await db.execute(query, data);
        db.end();
        return result;
    } catch (error) {
        return null;
    }
};

export default mysqlConn;