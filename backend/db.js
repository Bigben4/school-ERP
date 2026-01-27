

const sql = require('mssql');

const config =  {
    server:'(localdb)\\MSSQLLocalDB',
    database:'schoolerp',
    options: {
        trustServerCertificate: true
    }
};

const connectToDatabase = async () => {
    try{
        await sql.connect(config);
        console.log('mmsql Connected');
           }catch(err) {
        console.error('Database connection failed', err);
        }

};

module.exports ={
    sql, connectToDatabase
};
