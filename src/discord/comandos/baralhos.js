const Sacador = require("../aplicacao/SacadorService");
const formatador = require("../formatador");
const config = require("../../config");

function executar(expressao){

    // validar expressao e sair se necessário
    try {

        // Executa rolagem dos dados
        const resultado = Sacador.sacar(expressao);
        console.log(resultado);

        // Formata resposta
        let texto = resultado.join(", ");

        return texto;

    } catch {
        // evitar exibir erros no chat
    }
    
}

module.exports = executar;

