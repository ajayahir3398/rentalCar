const express = require("express");
const {
  getLoginForm,
  generateToken,
} = require("../controllers/getTokenRoute");

const router = express.Router();

router.get("/", getLoginForm);
router.post("/", generateToken);

module.exports = router;
