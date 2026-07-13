const Sacador = require("../aplicacao/SacadorService");
const formatador = require("../formatador");
const config = require("../../config");

class baralhos {

    static sacar_cartas(channelId, expressao){

        // validar expressao e sair se necessário
        try {

            // Executa rolagem dos dados
            const resultado = Sacador.sacar(channelId, expressao);

            if (!(resultado)) {
                throw new Error(
                    "O baralho atual tem 0 cartas.\n" + 
                    "Use o camando " + 
                    formatador.formatar(
                        config.prefixo + config.embaralhar, 
                        config.format_comentario
                    ) +
                    " para reembaralhar todas as cartas." 
                );
            }

            // formata resultado
            let resposta = [];

            for (let i = 0; i < resultado.length; i++) {
                resposta.push(resultado[i].valor_str + resultado[i].naipe);
            }

            return resposta.join(", ");

        } catch (e) {
            return e.message;
        }
        
    }

    static embaralhar(channelId) {
        if (Sacador.embaralhar(channelId))
            return "54 cartas reembaralhadas.";
    }

}

module.exports = baralhos;

