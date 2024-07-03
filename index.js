const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

//Set Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


const xmenVillains = "We are the VILLAINS for change";

//Set handlebar routes
app.get('/', function (req, res) {
	res.render('home', {
		xmen: xmenVillains
	});
});


//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Nag Nag Nag...I\'m listening!' + PORT));