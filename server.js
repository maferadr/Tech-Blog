const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
// We store the user Session to do verification methods.
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = require('express');
const PORT = process.env.PORT || 3001;

//Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Storing the User session through cookies => Session data stored on the server.
const sess = {
    secret: 'Tech Blog being tested',
    cookie: {
        //Session time
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//Inform express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(()=>{
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});



