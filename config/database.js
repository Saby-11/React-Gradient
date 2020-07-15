const mongoose = require('mongoose')
//const db = "mongodb://localhost/mern_gradient";
const db = "mongodb+srv://styagi689:saurabhmonster@cluster0.x7ymx.mongodb.net/mern-gradient?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        console.log("Mongodb is successfully connected...");
    } catch(error) {
        console.log("error" + error.message);
        process.exit(1);
    }

};

module.exports = connectDB;