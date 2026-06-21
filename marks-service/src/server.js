import cors from "cors";

import app from "./app.js";

import connectDB
from "./config/db.js";

app.use(cors());

const PORT =
    process.env.PORT || 3005;

const startServer = async () => {

    try {

        await connectDB();

        app.listen(
            PORT,
            () => {

                console.log(
                    `MARKS SERVICE RUNNING ON PORT ${PORT}`
                );

            }
        );

    }
    catch (err) {

        console.log(
            err.message
        );

    }

};

startServer();