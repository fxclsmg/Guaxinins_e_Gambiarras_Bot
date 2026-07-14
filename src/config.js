require("dotenv").config();

const config = {
    // ambiente  
    token: process.env.BOTTOKENGG,
    botId: process.env.IDBOTGG,
    debug: false, //para logar terminal se necessario 

    //controle dos comandos de ajuda
    controle_ajuda: true,
    controle_dado_comando: true,
    controle_baralho: true,
    controle_dado_simples: false, //ligar somente se necessario

    controle_dado_comando_modificador: false,
    controle_dado_reacao: false,
    controle_painel: false,
    controle_atributo: false,
    controle_limpar_atributo: false,
    controle_notas_musicais: false,
    controle_pedra_papel_tesoura: false,
    
    //comandos
    prefixo: ".",
    ajuda: "ajuda",
    notas_musicais: "n",
    
    // comando dados
    rolar_dado: "r",
    dado: "d",
    alterna_modo_dado: "alterar_modo_dado",

    // comando baralho
    embaralhar: "embaralhar",
    sacar_carta: "s",
    naipe_paus: ":clubs:",
    naipe_ouros: ":diamonds:",
    naipe_espadas: ":spades:",
    naipe_copas: ":hearts:",
    coringa: ":joker:",

    // formatacao de texto discord
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