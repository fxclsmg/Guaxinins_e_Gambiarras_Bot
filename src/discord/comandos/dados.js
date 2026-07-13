const Rolador = require("../aplicacao/RoladorService");
const formatador = require("../formatador");
const config = require("../../config");

function executar(expressao){

    // validar expressao e sair se necessário
    try {

        // Executa rolagem dos dados
        const resultado = Rolador.rolar(expressao);

        // Formata resposta
        let texto = resultado.parciais.join(", ");
        texto += " = ";
        texto += formatador.formatar2(
            resultado.soma,
            config.format_comentario,
            config.format_negrito
        );

        return texto;

    } catch {
        // evitar exibir erros no chat
    }
    
}

module.exports = executar;

