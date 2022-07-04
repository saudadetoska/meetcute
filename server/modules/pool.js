const pg = require('pg');

const config = {
    // database: 'CHANGE-THIS-TO-YOUR-DATABASE',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('PG CONNECTED!');
});

pool.on('error', (err) => {
    console.log('PG ERROR', err);
});

module.exports = pool;
