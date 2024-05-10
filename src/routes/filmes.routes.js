const express = require('express');
const router = express.Router();
  const Filme = require('../models/filme');

   //RECUPERA TODOS OS REGISTOS COM ID
   router.get('/', async (req, res) => {
    try{
      const filmes = await Filme.find({})
      res.json({ error: true, filmes });
    }catch (err) {
      res.json({ error: true, message: err.message });
    }
  });


  //PEGAR TODOS OS REGISTOS COM ID
  router.get('/:id', async (req, res) => {
    try{
      const id = req.params.id;
      const filme = await Filme.findById(id);
      res.json({ error: false, filme });
    }catch (err) {
      res.json({ error: true, message: err.message });
    }
  })


  //CRIAR REGISTOS COM ID
  router.post('/', async (req, res) => {
    try{
      const filme = req.body;
      const response = await new Filme(filme).save();
      res.json({ error: false, filme: response });
    }catch (err) {
      res.json({ error: true, message: err.message });
    }
  });


  //ATUALIZAR TODOS OS REGISTOS COM ID
  router.put('/:id', async (req, res) => {
    try{
      const id = req.params.id;//Pesquisar por um filme
      const novo_filme = req.body;//Pesquisar por varios filmes
      
      const filme = await Filme.findByIdAndUpdate(id, novo_filme);//Procura o id e atualiza
      res.json({ error: false, filme });
    }catch ( err ) {
      res.json({ error: true, message: err.message });
    }
  });


  //DELETAR REGISTO COM ID
  router.delete('/:id', async (req, res) => {
    try{
      const id = req.params.id;
      await Filme.findByIdAndDelete(id);
      res.jsom({ error: false})
    }catch ( err ) {
      res.json({ error: true, message: err.message })
    }
  });

  module.exports = router;


