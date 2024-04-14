const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://asapcaique7:bloodfield219320@cluster0.k8jh0r0.mongodb.net/')
.then(() => {
    console.log("mongo connected");
}).catch((err) => {
    console.log("Mongo Error", err);
})