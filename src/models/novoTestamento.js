import mongoose from "mongoose"; 

const novoTestamentoSchema = new mongoose.Schema(
  {
    nome: {type: String, required: true},
    autor: {type: String, required: true},
    numeroDeCapitulos: {type: Number},
    pontoCentraldoLivro: {type: String}
  }
);

const novoTestamento = mongoose.model("novoTestamento", novoTestamentoSchema);

export default novoTestamento;