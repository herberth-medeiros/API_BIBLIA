import express from "express";
import db from "./config/dbConnect.js";
import novoTestamento from "./models/novoTestamento.js";
import routes from "./routes/index.js";


const app = express();
app.use(express.json());
routes(app);


db.once("open", () => {
  console.log("Conexao com o banco realizada");
});

export default app;