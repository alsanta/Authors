const mongoose = require('mongoose');
const db = "mongodb+srv://root:root@jokerapi.pdmns.mongodb.net/Authors?retryWrites=true&w=majority";

// Mongoose connection/config **Add ${} around the db for some reason the snippit removes it**
mongoose.connect(`${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));