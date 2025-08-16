import express from "express";
import { signupValidation, signinValidation } from "../middlewares/authValidator.js";
import { signin, signout, signup } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signupValidation, signup);
router.post("/signin", signinValidation, signin);
router.post("/signout", signout);

export default router;
