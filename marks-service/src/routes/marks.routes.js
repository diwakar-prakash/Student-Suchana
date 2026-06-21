import { Router } from "express";

import roleMiddleware from "../middleware/role.middleware.js";

import authMiddleware from "../middleware/auth.middleware.js";

import {
  uploadMarks,
  getStudentMarks,
  getPercentage,
  getTopPerformer,
} from "../controllers/marks.controller.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN", "TEACHER"]),
  uploadMarks,
);

router.get("/top-performer", getTopPerformer);

router.get("/percentage/:studentId", getPercentage);

router.get("/:studentId", getStudentMarks);

export default router;
