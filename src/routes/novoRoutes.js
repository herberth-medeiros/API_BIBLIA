import express from "express";
import novoController from "../controller/novoController.js";

const router = express.Router();

router 
  .get("/novoTestamento", novoController.listarNovo)
  .get("/novoTestamento/busca", novoController.listarNovoporFiltro)
  .get("/novoTestamento/:id", novoController.listarNovoPorid)
  .post("/novoTestamento", novoController.cadastrarNovo)
  .put("/novoTestamento/:id", novoController.atualizarNovo)
  .delete("/novoTestamento/:id" , novoController.excluirNovo);

  
export default router;