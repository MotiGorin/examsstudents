const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema of all data
const studentSchema = new Schema({

    FullName: String,
    Email: String,
    Faculty: String,
    BirthDate: Date,
    Exams: [{Name: String, Date: Date, Grade: Number}]
    
})

module.exports = mongoose.model('students', studentSchema);
//////const mongoose = require ('mongoose');
//this  is  the source of my data base
mongoose.connect("mongodb://localhost:27017/studentsDB")
