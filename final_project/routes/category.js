const express = require("express");
const router = express.Router();

const {requireSignin, isAuth, isAdmin  } = require("../controllers/auth");
const { create, categoryById, read, update, remove, list } = require("../controllers/category");
const { userById} = require("../controllers/user");

// const { userSignupValidator } = require("../validator");

router.get('/category/:categoryId', read)
router.get('/categories', list)
router.post("/category/create/:userId", requireSignin, isAdmin, create);
router.put("/category/:categoryId/:userId", requireSignin, isAdmin, update);
router.delete("/category/:categoryId/:userId", requireSignin, isAdmin, remove);
router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
