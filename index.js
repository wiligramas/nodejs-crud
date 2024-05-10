/**O Express. js é um Framework rápido e um dos mais utilizados em conjunto com o Node. js, facilitando no desenvolvimento de aplicações back-end e até, em conjunto com sistemas de templates, aplicações full-stack. */
const express = require('express');
/**O Morgan é uma biblioteca que pode ser utilizada no NodeJS para salvar o log das requisições feitas a API. E o uso do Morgan no Node pode ser importante, pois com ele, é possível monitorar todos os dados de entrada de sua API, verificar se tem algum dado incorreto que está sendo enviado e entre outros casos de uso */
const morgan = require('morgan');
/** O body-parser é um módulo capaz de converter o body da requisição para vários formatos. */
const bodyParser = require('body-parser');
/**Mongoose é um biblioteca de Modelagem de Dados de Objeto (ou ODM, do inglês: Object Data Modeling) para MongoDB e Node. js. Ele gerencia o relacionamento entre dados, fornece a validação de esquemas e é usado como tradutor entre objetos no código e a representação desses objetos no MongoDB */
const mongoose = require('mongoose');

  const app = express();


  /*Constante recebe a importação das outras rotas */
  const routes = require('./src/routes/filmes.routes');
  mongoose.connect('mongodb://localhost:27017/netflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use('/', routes);
 
  app.listen(3000, () => {
    console.log('Listando as rotas');
  })
