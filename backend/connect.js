import { Sequelize } from 'sequelize';
import { SqliteDialect } from '@sequelize/sqlite3';


// DATABASE OTHER OPTIONS MEMORY OR TEMPFILE
// const DB = new sql3.Database(':memory:', sql3.OPEN_READWRITE, connected);
// const DB = new sql3.Database('', sql3.OPEN_READWRITE, connected);


export const sequelize = new Sequelize({
    dialect: SqliteDialect,
    storage: './tasklist.sqlite'
});

