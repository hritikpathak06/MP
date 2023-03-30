const mongoose = require('mongoose');


const uri = process.env.DATABASE;

mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Connection stablished successfully......!!"))
.catch((err) => console.log("Oops! Something went wrong.", err))