import { Router } from "express";
import roleMiddleware from "../middleware/role.middleware.js";
import authMiddleware
from "../middleware/auth.middleware.js";

import {
    markAttendance,
    getAttendanceByStudent,
    getAttendancePercentage,
    getAverageAttendance
}
from "../controllers/attendence.controllers.js";

const router = Router();

router.post(
    "/",
    authMiddleware,
    roleMiddleware([
        "ADMIN",
        "TEACHER"
    ]),
    markAttendance
);

router.get(
    "/average",
    getAverageAttendance
);

router.get(
    "/percentage/:studentId",
    getAttendancePercentage
);

router.get(
    "/:studentId",
    getAttendanceByStudent
);

export default router;