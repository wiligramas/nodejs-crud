const mongoose = require('mongoose');

	const Usuario = mongoose.model('Usuario',
	{
		nome: {
			type: String,
			require: true
		},
		email: String,
		senha: {
			type: String,
			require: function() {
				return this.idade > 18;
			},
			idade: Number,
			status: Boolean,
			cor_olhos: {
				type: String,
				enum: ['azul', 'preto', 'marron', 'verde'],
				require: true
			},
			abilidades: Array,
			outros: Object,
		}
	});
	
	module.exports = Usuario;