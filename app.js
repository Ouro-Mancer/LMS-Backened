


import { config } from "dotenv";
import express from "express";
import { connectDB } from "./db.js"; // Correct import with .js extension
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

config({ path: "./config.env" });


app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectDB();  // Connect to the database

