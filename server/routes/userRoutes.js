const { register, login, setAvatar, getAllUsers, firebaseLogin, checkUsername } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/login",login);
router.post("/register",register);
router.post("/firebaseLogin",firebaseLogin);
router.post("/checkUsername",checkUsername);
router.post("/setAvatar/:id",setAvatar);

router.get('/allusers/:id',getAllUsers);

module.exports = router;