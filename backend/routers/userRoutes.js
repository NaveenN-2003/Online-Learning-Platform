const express = require("express");
const multer = require("multer");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  registerController,
  loginController,
  postCourseController,
  getAllCoursesUserController,
  deleteCourseController,
  getAllCoursesController,
  enrolledCourseController,
  sendCourseContentController,
  completeSectionController,
  sendAllCoursesUserController,
  deleteUserController
} = require("../controllers/userControllers");
const { deleteUserController } = require("../controllers/adminController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/register", registerController);

router.post("/login", loginController);

router.post(
  "/addcourse",
  authMiddleware,
  // upload.single('C_image'),
  upload.array('S_content'),
  postCourseController
);

router.get('/getallcourses', getAllCoursesController)

router.get('/getallcoursesteacher', authMiddleware, getAllCoursesUserController)

router.delete('/deletecourse/:courseid', authMiddleware, deleteCourseController)

router.post('/enrolledcourse/:courseid', authMiddleware, enrolledCourseController)

router.get('/coursecontent/:courseid', authMiddleware, sendCourseContentController)

router.post('/completemodule', authMiddleware, completeSectionController)

router.post('deleteuser/:userid',authMiddleware,deleteUserController)

router.get('/getallcoursesuser', authMiddleware, sendAllCoursesUserController)

module.exports = router;