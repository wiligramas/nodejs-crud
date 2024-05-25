const express = require('express');
const route = express.Router();

const Usuario = require('../models/usuario');

    // REQ - DADOS DA REQUISIÇÃO
    // RES - OBJECTO COM FUNÇÕES PARA DARMOS A RESPOSTA
    route.post('/', async (req, res) => {
        try{
            // CRIANDO USUÁRIO
            const usuario = await new Usuario(req.body).save();

            // RETORNAR O USUÁRIO
            res.json({ error: false, usuario });
        }catch (err) {
            res.json({ error: true, message: err.message });
        }
    });
     
    // OBTER TODOS OS USUÁRIOS
    route.get('/', async (req, res) => {
        try{
            // PROCURAR USUÁRIOS
            const usuario = await Usuario.find({});

            // RETORNAR OS USUÁRIOS
            res.json({ error: false, usuario });
        }catch (err) {
            res.json({ error: true, message: err.message });
        }
    });

    // OBTER O USUÁRIO POR ID
    route.get('/:id', async (req, res) => {
        try{
            // PROCURAR USUÁRIO
            const usuario = await Usuario.findById(req.params.id);

            // RETORNAR O USUÁRIO
            res.json({ error: false, usuario });
        }catch (err) {
            res.json({ error: true, message: err.message });
        }
    });

    // ACTUALIZAR USUÁRIO POR ID
    route.put('/:id', async (req, res) => {
      try{
          // CRIANDO USUÁRIO
          const id = req.params.id;
          const novo_usuario = req.body;
          const usuario = await Usuario.findByIdAndUpdate(id, novo_usuario);

          // RETORNAR O CARRO
          res.json({ error: false, usuario });
      }catch (err) {
          res.json({ error: true, message: err.message });
      }
  });


  // DELETER SOMENTE O REGISTRO COM O ID DO USUÁRIO
  route.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await Usuario.findByIdAndDelete(id);
      res.json({ error: false });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });



module.exports = route;