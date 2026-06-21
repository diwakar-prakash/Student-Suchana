import { Router } from "express";

import { signUp, logIn, verify } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/verify", verify);

export default router;
