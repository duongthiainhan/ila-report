//https://auth0.com/blog/create-a-simple-and-stylish-node-express-app
// app.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
// const moment = require('moment');
// const ngrok = require('ngrok');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
// app.locals.moment = moment;
// app.locals.ucfirst = function(value){
//     return value.charAt(0).toUpperCase() + value.slice(1);
// };

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/upload")));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    // res.render("HomePage", { homeTitle: "Home", year: moment().format('YYYY') });
	res.render("HomePage", { homeTitle: "Home", year: 2023 });
});

app.get("/layout", (req, res) => {
    res.render("layout", { layoutTitle: "ILA CRM System" });
});

// http://localhost:3000/api/v1/ainhan/10
app.get('/api/v1/:user/:point', (req, res) => {
	const userDetails = {
		user: req.params.user,
		point: req.params.point
	}
	res.render('user', userDetails);
});



// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })

app.get('*', (req, res, next) => {
	res.status(200).send('Sorry, page not found');
	next();
});

/**
 * Server Activation
 */
app.listen(port, (err) => {
	if (err) return console.log(`Something bad happened: ${err}`);
    console.log(`Listening to requests on http://localhost:${port}`);

    // ngrok.connect(port, function (err, url) {
    //     console.log(`Node.js local server is publicly-accessible at ${url}`);
    // });
    
});
