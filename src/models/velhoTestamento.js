import mongoose from "mongoose";

const velhoTestamentoSchema =  new mongoose.Schema(
  {
    nome: {type: String,  required: true},
    autor: {type: String, required: true},
    numeroDeCapitulos: {type: Number},
    pontoCentraldoLivro: {type: String}
  }
);

const velhoTestamento = mongoose.model("velhoTestamento", velhoTestamentoSchema);

export default velhoTestamento;