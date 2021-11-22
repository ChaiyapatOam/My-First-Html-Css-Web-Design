const express = require("express")
const app = express()
const router = express.Router()
const path = require('path')
let PORT = process.env.PORT || 3000
// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/',router)
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));