

const sql = require('mssql');

const config =  {
    user: 'sa',
    password: 'password',
    server:'localhost',
    database:'schoolerp',
    Option: {
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
