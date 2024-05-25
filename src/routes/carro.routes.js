const express = require('express');
const route = express.Router();

const Carro = require('../models/carro');

    // REQ - DADOS DA REQUISIÇÃO
    // RES - OBJECTO COM FUNÇÕES PARA DARMOS A RESPOSTA
    route.post('/', async (req, res) => {
        try{
            // CRIANDO CARRO
            const carro = await new Carro(req.body).save();

            // RETORNAR O CARRO
            res.json({ error: false, carro });
        }catch (err) {
            res.json({ error: true, message: err.message });
        }
    });


    route.get('/', async (req, res) => {
        try{
            // CRIANDO CARRO
            const carros = await Carro.find({});

            // RETORNAR O CARRO
            res.json({ error: false, carros });
        }catch (err) {
            res.json({ error: true, message: err.message });
        }
    });


    route.get('/:id', async (req, res) => {
        try{
            // CRIANDO CARRO
            const carro = await Carro.findById(req.params.id).populate('usuario_id');

            // RETORNAR O CARRO
            res.json({ error: false, carro });
        }catch (err) {
            res.json({ error: true, message: err.message });
        }
    });


    route.put('/:id', async (req, res) => {
      try{
          // CRIANDO CARRO
          const id = req.params.id;
          const novo_carro = req.body;
          const carro = await Carro.findByIdAndUpdate(id, novo_carro);

          // RETORNAR O CARRO
          res.json({ error: false, carro });
      }catch (err) {
          res.json({ error: true, message: err.message });
      }
  });


  // DELETER SOMENTE O REGISTRO COM O ID
  route.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await Carro.findByIdAndDelete(id);
      res.json({ error: false });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });


module.exports = route;