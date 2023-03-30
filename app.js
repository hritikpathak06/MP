const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const express = require("express");
const app = express();
require('./db/conn');
// **************************************

app.use(express.json());
app.use(require('./router/auth'))

const port = process.env.PORT || 5000;

// Midlleware
// const middleware = (req, res, next) => {
//     console.log("Hello My Midlleware")
//     next();
// }


// Routing


// app.get('/about', (req, res) => {
//     console.log("Hello My About page");
//     res.send("This is About Page")
// });

// app.get('/contact', (req, res) => {
//     res.cookie("jswtokentest", "thapa")
//     res.send("Welcome to contact Page")
// });
// *************************************************

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

// Server Running
app.listen(port, () => {
    console.log(`Server started listening at the port: ${port}`)
});
// *********************************************************