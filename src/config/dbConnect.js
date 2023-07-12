import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bancodedados86:123@nodeapi.a8syvcg.mongodb.net/project-node");

let db = mongoose.connection;

export default db;