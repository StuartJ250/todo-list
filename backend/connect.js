import { Sequelize } from 'sequelize';



// DATABASE OTHER OPTIONS MEMORY OR TEMPFILE
// const DB = new sql3.Database(':memory:', sql3.OPEN_READWRITE, connected);
// const DB = new sql3.Database('', sql3.OPEN_READWRITE, connected);


const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './tasklist.sqlite'
});

export default sequelize;

export async function initDB(){
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database Ready');
}