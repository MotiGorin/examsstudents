const studentModel = require('./StudentModel');
require('../config/db');

//check  all student
const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        studentModel.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};
//check single student
const getStudentByid = (id) => {
    return new Promise((resolve, reject) => {
        studentModel.findById(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        });
    });
};

//funcsion  add a new student
const addStudent = (obj) => {
    return new Promise((resolve, reject) => {
        const newStudent = new studentModel(obj);

        newStudent.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve('Added sucessfully')
            }
        });
    });
};

// fonction for updating student data
const updateStudent = (id, obj) => {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndUpdate(id, obj, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve('Updated sucessfully')
            }
        });
    });
}
// function for delete student
const deleteStudent = (id, obj) => {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndDelete(id, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve('Deleted sucessfully')
            }
        });
    });
}


const Student1 = { FullName: "tal ahar", Email: "tal@gmail.com", Faculty: 'Something', BirthDate: 1995, Exams: [{ Name: 'BenTest', Date: 13 / 10 / 1994, Grade: 85 }] }


module.exports = { getAllStudents, getStudentByid, addStudent, updateStudent, deleteStudent }

