const mongoose = require('mongoose');

	const Carro = mongoose.model('Carro',
	{
        usuario_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Usuario',
        },
		placa: {
			type: String,
			require: true
		},
        cor: {
			type: String,
			require: true
		},
        modelo: {
			type: String,
			require: true
		},
        fabricante: {
			type: String,
			require: true
		},
		
	});
	
	module.exports = Carro;