const ajuda = require("./comandos/ajuda");
const dados = require("./comandos/dados");
const baralhos = require("./comandos/baralhos");
const formatador = require("./formatador");
const config = require("../config");

function executar(msg) {

    // evita ler proprias mensagens
    if(msg.author.bot)
        return;
    
    // captura resposta do comando
    let resposta = null;

    // lê comando simplificado de dados
    if (config.dados_simplificados) {
        if (/^\d*d\d+$/i.test(msg.content)) {
            resposta = dados(msg.content);
            if (resposta.length <= 2000) {           
                msg.channel.send(resposta);
                return;
            }
        }
    }

    // lê padrões complexos de rolagem
    // /^\d*d\d+([+\-*/]\d*d?\d+)*$/i
    // 2d6-1
    // 1d20+2d6
    // 3d6+1d8-2

    // evitar ler textos sem prefixo
    if(!msg.content.startsWith(config.prefixo))
        return;

    // trata prefixo
    let mensagem = msg.content
        .slice(config.prefixo.length)
        .trim()
        .toLowerCase();

    // comando de ajuda
    if (mensagem.startsWith("ajuda"))
        resposta = ajuda();

    // rolagem com prefixo
    else if (mensagem.startsWith(config.rolar_dado)) {
        let comando = mensagem.substring(config.rolar_dado.length);
        resposta = dados(comando);
    }

    // altera modo do dado
    else if (mensagem.startsWith(config.alterna_modo_dado)) {
        config.dados_simplificados = !config.dados_simplificados;
        resposta = "Modo do dado alterado para ";         
        resposta += config.dados_simplificados ? "simples" : "comando";
    }

    // baralho 

    //sacar carta
    else if (mensagem.startsWith(config.sacar_carta)) {
        let comando = mensagem.substring(config.sacar_carta.length);
        resposta = baralhos.sacar_cartas(msg.channel.id, comando);
    }
    //embaralhar
    else if (mensagem.startsWith(config.embaralhar)) {
        resposta = baralhos.embaralhar(msg.channel.id);
    }

    // Adicionar piada de comando falho com prefixo
    else {
        resposta = 
            "Comando " + 
            formatador.formatar(resposta, config.format_comentario) + 
            " desconhecido. " +
            "Veja a lista de comandos digitando " + 
            formatador.formatar(".ajuda", config.format_comentario);
    }

    // Retorna mensagem. Discord só permite até 2k caracteres
    if (resposta)
      if (resposta.length <= 2000)
        msg.channel.send(resposta);
}

module.exports = executar;