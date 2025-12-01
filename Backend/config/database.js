const mongoose = require("mongoose");

const connectDb = async() => {
    try{

        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useNewUnifiedTopolgoy:true,
    });
    console.log("Mongo db connected sucessfully");
}catch(error){
    console.log("Mondodb connection falied", error);
}
};

module.exports = connectDb;