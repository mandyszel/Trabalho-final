var conexao = require('../config/conexao')

const UsuarioSchema = new conexao.Schema({
    nome: String,
    email: {
        required: true,
        type: String
    },
    senha: String,
    foto: String
})

module.exports = conexao.model("Usuario",UsuarioSchema)

