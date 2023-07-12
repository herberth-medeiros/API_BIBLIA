import novoTestamento from "../models/novoTestamento.js";

class novoController {

  static listarNovo = async (req, res) => {
    try{
      const listarNovoTestamento = await novoTestamento.find();

      res.status(200).json(listarNovoTestamento);
    }catch{
      res.status(400).send({message: "Erro na requisicao" });
    }  
  };

  static listarNovoporFiltro = async (req, res) => {
    try{

      const {autor, nome} = req.query;

      const busca = {};

      if(autor) busca.autor = {$regex: autor, $options: "i"};
      if(nome) busca.nome = {$regex: nome, $options: "i"};
        
      const listarNovoTestamentoFiltro = await novoTestamento.find(busca);

      res.status(200).send(listarNovoTestamentoFiltro);

    }catch{
      res.status(400).send({message: "Filtro nao encontrado"});
    }
  };

  static listarNovoPorid = async (req, res) => {
    try{
      const id = req.params.id;

      const novoTestamentoPorId =  await novoTestamento.findById(id);
  
      res.status(200).json(novoTestamentoPorId);
    }catch{
      res.status(400).send({message: "Paramentro nao identificado"});
    }
  };

  static cadastrarNovo = async (req, res) => {
    try{

      let novo = new novoTestamento(req.body);

      const cadastrarNovoTestamento = await novo.save();

      res.status(200).json(cadastrarNovoTestamento.toJSON());

    }catch{
      res.status(400).send({message: "message: Livro nao cadastrado"});
    }
  };

  static atualizarNovo = async (req, res) => {
    try{
      const id =  req.params.id;

      await novoTestamento.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Livro ataulizado"});
    }catch{
      res.status(400).send({message: "Livro nao atualizado"});
    }
  };

  static excluirNovo = async (req, res) => {
    try{

      const id = req.params.id;

      const excluirNovoTestamento = await novoTestamento.findById(id);

      res.status(200).send({message: "Livro excluido"}).json(excluirNovoTestamento);

    }catch{
      res.status(400).send({message: "Livro nao excluido"});
    }
  };
}



  

export default novoController;