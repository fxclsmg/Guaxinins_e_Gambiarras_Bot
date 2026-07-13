require("dotenv").config();

const config = {
    // ambiente  
    token: process.env.BOTTOKENGG,
    botId: process.env.IDBOTGG,
    dados_simplificados: false, //ligar somente se necessario
    debug: true,
    
    //comandos
    prefixo: ".",
    
    // dados
    rolar_dado: "r",
    dado: "d",
    alterna_modo_dado: "alterar_modo_dado",

    // baralho
    limpar: "limparbaralho",
    embaralhar: "embaralhar",
    sacar_carta: "b",
    naipe_paus: ":clubs:",
    naipe_ouros: ":diamonds:",
    naipe_espadas: ":spades:",
    naipe_copas: ":hearts:",
    coringa: ":joker:",


    // formatacao de texto
    format_negrito: "**",
    format_comentario: "`"
};

if (!config.token) {
    throw new Error("Token do Discord não encontrado no .env");
}

if (!config.botId) {
    throw new Error("Id do Bot do Discord não encontrado no .env");
}

module.exports = config;