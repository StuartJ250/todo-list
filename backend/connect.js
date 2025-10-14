import { Sequelize } from 'sequelize';

//instancing sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './tasklist.sqlite'
});

//exporting default
export default sequelize;

//exporting db ini
export async function initDB(){
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database Ready');
}