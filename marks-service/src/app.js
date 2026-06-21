import express from "express";

import marksRoutes
from "./routes/marks.routes.js";

const app = express();

app.use(
    express.json()
);

app.use(
    "/marks",
    marksRoutes
);

export default app;