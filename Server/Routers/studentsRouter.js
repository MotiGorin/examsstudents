const express = require('express');
const studentsBl = require('../Models/StudentsBl')

const router = express.Router()

// get router without id, directs to get all students function in BL

router.route('/').get(async (req, res) => {
    try {
        const students = await studentsBl.getAllStudents();
        return res.json(students);
    }
    catch(error)
    {
        return res.json(error);
    }
});

// get student by ID route

router.route('/:id').get(async (req, res) => {
    try{
        const id = req.params.id;
        const student = await studentsBl.getStudentByid(id);
        return res.json(student)
    }   catch(error){
        return res.json(error);
    }
});

// post router for adding new student
router.route('/').post(async (req, res) => {
    try{
        const id = req.params.id;
        const newStudent = req.body;
        const result = await studentsBl.addStudent(newStudent);
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
})
// update router for updating specific student data, by ID
router.route('/:id').put(async (req, res) => {
    try{
        const id = req.params.id;
        const updateStudents = req.body;
        const result = await studentsBl.updateStudent(id, updateStudents);
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
})

// delete router for deleting student from database

router.route('/:id').delete(async (req, res) => {
    try{
        const id = req.params.id;
        const result = await studentsBl.deleteStudent(id);
        return res.json(result)
    }   catch(error){
        return res.json(error);
    }
});

module.exports = router;