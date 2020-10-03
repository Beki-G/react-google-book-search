const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    authors:{
        type: Array,
        required: true
    }, 
    image:{
        type: String,
        required: true
    }, 
    descriptioni:{
        type: String,
        required: true
    }
})