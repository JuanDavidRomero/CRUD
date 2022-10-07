const express = require('express');
const { engine } = require('express-handlebars');
asddasd
const app = express();
app.set('port', 4000);
asdasd
asdasd

const app = express();
app.set('port', 4000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs')

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'juanda',
    password: 'coutabrir',
    port: 3306,
    database: 'crudnodejs'
}));

//mi nombre es noah jejeje aqui haciendo una actualización ;)

app.listen(app.get('port'), () => {
    console.log('listening on port ', app.get('port'));
});

app.use('/', tasksRoutes);

app.get('/', (req, res) => {
    res.render('home');
});
