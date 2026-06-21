import express from "express";

import teacherRoutes
from "./routes/teacher.routes.js";

const app = express();

app.use(express.json());

app.use(
    "/teachers",
    teacherRoutes
);

export default app;