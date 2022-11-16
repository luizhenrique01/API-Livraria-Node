import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Lhuizito:lhuizito123@cluster0.qwk2q2i.mongodb.net/NodeExpress");

let db = mongoose.connection;

export default db;