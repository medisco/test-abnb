const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const getAllPayload = { 
        name: req.query.name,
        className: req.query.class,
        section: req.query.section,
        roll: req.query.roll
    };
    const students = await getAllStudents(getAllPayload);
    res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const message = await addNewStudent(req.body);
    res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const updatePayload = { userId: req.params.id, ...req.body };
    const message = await updateStudent(updatePayload);
    res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const student = await getStudentDetail(req.params.id);
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const statusPayload = { 
        userId: req.params.id, 
        reviewerId: req.user.id, 
        status: req.body.status
    };
    const message = await setStudentStatus(statusPayload);
    res.json(message);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
