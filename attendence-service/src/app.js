import express from "express";

import attendanceRoutes
from "./routes/attendance.routes.js";

const app = express();

app.use(express.json());

app.use(
    "/attendance",
    attendanceRoutes
);

export default app;