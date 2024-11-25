const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { generateToken, processPayment } = require("../controllers/braintree");

// Route to get a token from Braintree
router.get("/braintree/getToken/:userId", requireSignin, isAuth, generateToken);

// Route to process the payment
router.post(
    "/braintree/payment/:userId",
    requireSignin,
    isAuth,
    processPayment
);

// Param middleware to fetch user details based on userId
router.param("userId", userById);

module.exports = router;
