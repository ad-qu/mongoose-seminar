import "dotenv/config";
import express from "express";
import db from "./config/mongo";

import user from "./models/user";
import party from "./models/party";

const PORT = process.env.PORT || 3001;  
const app = express();
app.use(express.json());
db().then(() => console.log("Connection is ready"));
app.listen(PORT, () => console.log(`Hey! Listening por el puerto ${PORT}`));