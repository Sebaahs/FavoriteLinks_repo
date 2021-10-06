const express = require('express');
const morgan = require('morgan'); /* <-- modulo para visualizar la actividad del servidor */
const expressH = require('express-handlebars');/* <-- template engine */
const path = require('path'); /* <-- modulo para concatenar rutas de archivos */
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const { database } = require('./keys');
//inicialization
app = express();

//settings

app.set('port', process.env.PORT || 4000); /* <-- Definicion del puerto  */

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', expressH({ /* <-- definicion del handlebars template engine  */
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))

app.set('view engine','.hbs'); /* <-- establece el template engine que se usa */

//Middlewares
app.use(session({
    secret: 'linkSession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}))
app.use(flash());
app.use(morgan('dev')); /* <-- muestra peticiones al servidor */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    
    next();
});

//Routes

app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//Public
app.use('/static', express.static(path.join(__dirname, 'public'))); /* <-- define la ruta del static */ 

//Starting the server

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto ${app.get('port')}`);
});


