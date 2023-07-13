import velhoTestamento from "../models/velhoTestamento.js";

class velhoController {

  static listarVelho = async (req, res) => {
    try{

      let {limite = 5, pagina = 1, campoOrdenacao = "_id", ordem = -1} = req.query;

      limite = parseInt(limite);
      pagina = parseInt(pagina);
      ordem = parseInt(ordem);

      const listarVelhoTestamento = await velhoTestamento.find()
        .sort({[campoOrdenacao]: ordem})
        .skip((pagina -1) * limite)
        .limit(limite);

      res.status(200).json(listarVelhoTestamento);
    }catch{
      res.status(400).send({message: "Requisicao errada"});
    }
  };

  static listaVelhoPorId = async (req, res) => {
    try{
      const {nome, autor} = req.query;

      const busca = {};

      if (nome) busca.nome = {$regex: nome, $options: "i"};
      if (autor) busca.autor = {$regex: autor, $options: "i"};
    
      const velhoTestamentoPorId = await velhoTestamento.findById(busca);
  
      res.status(200).json(velhoTestamentoPorId);
    }catch{
      res.status(400).send("Book not found");
    } 
  };

  static listarPorFiltro = async (req, res) => {
    try{

      const {titulo, nome} = req.query;

      const busca = {};

      if (titulo) busca.titulo = {$regex: titulo, $options: "i"};
      if (nome) busca.nome = {$regex: nome, $options: "i"};

      const listarLivroFiltro = await velhoTestamento.find(busca);

      res.status(200).json(listarLivroFiltro);
    }catch{
      res.status(400).send({message: "Livro nao encontrado"});
    }
  };

  static cadastrarVelho = async (req, res) => {
    try{

      let velho = new velhoTestamento(req.body);

      const cadastrarVelho = await velho.save();

      res.status(201).json(cadastrarVelho.toJSON()).send({message: "Livro foi cadastrado"});

    }catch{
      res.status(400).send({message: "Livro nao cadastrado"});
    }
  };

  static atualizarVelhoporId = async (req, res) => {
    try{
      const id = req.params.id;

      await velhoTestamento.findByIdAndUpdate(id, ({$set: req.body}));

      res.status(201).send({message: "Livro atualizado"});
    }catch{
      res.status(400).send({message: "Requisao nao encontrada"});
    }
  };

  static excluirVelhoLivro = async (req, res) => {
    try{
      const id = req.params.id;

      const excluirVelhoTestamento = await velhoTestamento.findByIdAndDelete(id);

      res.status(201).send({message: "Livro deletado"}).json(excluirVelhoTestamento);
    }catch{
      res.status(400).send({message: "Requisicao nao encontrada"});
    } 
  };

}

export default velhoController;