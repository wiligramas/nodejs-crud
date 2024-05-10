const mongoose = require('mongoose');

    const Filme = mongoose.model('Filme', {
        titulo: {
            type: String,
            require: true,
        },
        atores: Array,
        ano: Number,
        detalhes: Object,
				premiacoes: [Object],        
    });

		module.exports = Filme;