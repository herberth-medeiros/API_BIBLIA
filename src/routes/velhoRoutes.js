import express from "express";
import velhoController from "../controller/velhoController.js";

const router = express.Router();

router 
  .get("/velhoTestamento", velhoController.listarVelho)
  .get("/velhoTestamento/:id", velhoController.listaVelhoPorId)
  .post("/velhoTestamento", velhoController.cadastrarVelho)
  .put("/velhoTestamento/:id", velhoController.atualizarVelhoporId)
  .delete("/velhoTestamento/:id" , velhoController.excluirVelhoLivro);

  
export default router;