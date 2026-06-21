import app from "./app.js";
import cors from "cors";
import connectDB from "./config/db.js";

app.use(cors());

const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(
                `AUTH SERVICE IS RUNNING ON PORT ${PORT}`
            );
        });

    }
    catch (err) {
        console.log(
            `SERVER FAILED : ${err.message}`
        );
    }
};

startServer();
