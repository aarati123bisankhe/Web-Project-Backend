const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize('dream_animation_studio_db', 'postgres', '123456',{

//     host: 'localhost',
//     dialect: 'postgres',
//     port: 5432,
//     logging: false,
// });

const sequelize = new Sequelize('dream_animation_studio_db', 'postgres', '1234567',{

    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false,
});
async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log('DB connection successful............................')
    }
    catch(error){
        console.error('Unable to connect to the database...............', error)

}    
}
testConnection()

module.exports = sequelize;


