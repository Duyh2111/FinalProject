const express = require("express");
const router = express.Router();

const {requireSignin, isAuth, isAdmin  } = require("../controllers/auth");

const { create, productById, read, remove, update, list, listRelated, listCategories, listBySearch, photo, Search} = require("../controllers/product");
const { userById} = require("../controllers/user");

// const { userSignupValidator } = require("../validator");
router.get('/product/:productId', read)
router.post("/product/create/:userId", requireSignin, isAdmin, create);
router.delete('/product/:productId/:userId', requireSignin, isAdmin, remove);
router.put('/product/:productId/:userId', requireSignin, isAdmin, update);

router.get('/products', list)
router.get('/products/related/:productId', listRelated)
router.get('/products/categories', listCategories)
router.post("/products/by/search", listBySearch);
router.get('/product/photo/:productId', photo)
router.get("/products/search", Search);


router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
