// Bear in mind that the user has to create his own username and password => store in database and verify it.

const sequelize = require('../config/connection');
const { User, Dashboard } = require('../models');

const userData = require('./userData.json');
const blogData = require('./dashboard.json');

const seedDatabase = async () =>{
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for(const blog of blogData){
        await Dashboard.create({
            ...blog,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        })

    }

    process.exit(0);
};

seedDatabase();