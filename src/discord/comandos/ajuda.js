const config = require("../../config");

function executar(msg){

    let ajuda = 
        config.format_negrito + 
        "COMANDOS PARA O BOT GUAXININS & GAMBIARRAS :" + 
        config.format_negrito +
        "\n";

    if (config.controle_ajuda) {
        ajuda += 
            config.format_negrito +
            config.format_comentario + 
            config.prefixo + config.ajuda + 
            config.format_comentario + 
            config.format_negrito +
            ": exibe lista de comandos do bot e modo de uso" +
            "\n";
    }
        
    if (config.controle_painel) {
        ajuda += 
            "\n" +
            config.format_negrito + 
            "EXIBIR PAINEL DE ROLAGEM POR REAÇÃO:" + 
            config.format_negrito +
            "\n" +
            config.format_negrito +
            config.format_comentario + 
            config.prefixo  + " + " + 
            "eu acredito no guaxaverso" +
            config.format_comentario + 
            config.format_negrito +
            ": exibe painel de rolagem. Enviar o emoji 🦝 tem o mesmo resultado." +
            "\n";
    }

    if (config.controle_atributo || config.controle_limpar_atributo) {
        ajuda += 
            "\n" +
            config.format_negrito + 
            "CONFIGURAR ATRIBUTOS G&G:" + 
            config.format_negrito +
            "\n";
    }

    if (config.controle_atributo) {
        ajuda += 
            config.format_negrito +
            config.prefixo +
            "atributo + número de 2 a 5" +
            config.format_negrito +
            ": define o número de atributo para o jogador." +
            "\n";
    }

    if (config.controle_limpar_atributo) {
        ajuda += 
            config.format_negrito +
            config.prefixo + " + " + 
            "limpar atributo" +
            config.format_negrito +
            ": apaga atributo da memória, assim como a ID do usuário." +
            "\n";
    }

    if (config.controle_dado_reacao) {
        ajuda += 
            // rolagem por reação
            "\n" +
            config.format_negrito +
            "MODO DE USO:" +
            config.format_negrito +
            "\n" +
            "Para rolar um dado reaja com ☝️ no painel de rolagem." +
            "\n" +
            "Para rolar dois dados reaja com ✌️ no painel de rolagem." +
            "\n" +
            "Para rolar três dados reaja com 🤟 no painel de rolagem." +
            "\n" +
            "Para lançar uma frase aleatória da vinheta reaja com 🦝 no painel de rolagem." +
            "\n";
    }

    if (config.controle_notas_musicais) {
        ajuda += 
            "\n" +
            config.format_negrito +
            "COMANDOS PARA NOTAS MUSICAIS:" +
            config.format_negrito +
            "\n" +
            config.format_negrito +
            config.prefixo + config.notas_musicais + " + " + "número" +
            config.format_negrito +
            ": lança um número de dados de 12 lados, com as 7 notas naturais e os 5 acidentes nas faces." +
            "\n";
    }

    if (config.controle_baralho) {
        ajuda += 
            "\n" +
            config.format_negrito +
            "COMANDOS PARA O BARALHO:" +
            config.format_negrito +
            "\n" +
            config.format_negrito +
            config.prefixo + config.sacar_carta + " + número" + 
            config.format_negrito +
            ": saca um número de cartas de baralho." +
            "\n" +
            "\n" +
            "Exemplos:" +
            "\n" +
            config.format_negrito +
            config.format_comentario + 
            config.prefixo + config.sacar_carta + "5" + 
            config.format_comentario + 
            config.format_negrito +
            ": saca 5 cartas do baralho: " +  
            "\n" + 
            "    " +
            "7" + config.naipe_copas + ", " +
            "A" + config.naipe_espadas + ", " +
            "K" + config.naipe_ouros + ", " +
            "4" + config.naipe_paus + ", " +
            "C" + config.coringa +
            "\n" +
            "\n" +
            config.format_negrito +
            config.format_comentario + 
            config.prefixo + config.embaralhar +
            config.format_comentario + 
            config.format_negrito +
            ": embaralha todas as 54 cartas no canal de texto atual." +
            "\n";
    }

    if (config.controle_pedra_papel_tesoura) {
        ajuda += 
            "\n" +
            config.format_negrito +
            "JOGAR PEDRA, PAPEL OU TESOURA:" +
            config.format_negrito +
            "\n" +
            "Ao enviar alguns dos emojis ✊, ✋, ou ✌️: bot responde com um destes três emojis mais o resultado." +
            "\n";
    }

    if (config.controle_dado_comando || config.controle_dado_simples) {
        ajuda += 
            "\n" +
            config.format_negrito +
            "COMANDOS PARA ROLAGEM DE DADOS:" +
            config.format_negrito +
            "\n";
    }

    if ( config.controle_dado_simples) {
        ajuda += 
            config.format_negrito +
            config.dado + 
            " + número de lados" +
            config.format_negrito +
            ": rola o número específicado de dados." +
            "\n" +
            "\n" +
            "Exemplos:" +
            "\n" +
            config.format_negrito +
            config.format_comentario + 
            config.dado + "6" + 
            config.format_comentario + 
            config.format_negrito +
            ": rola 1 dado de 6 lados." +
            "\n" +
            "\n" +
            config.format_negrito +
            config.format_comentario + 
            "2" + config.dado + "6" + 
            config.format_comentario + 
            config.format_negrito +
            ": rola 2 dados de 6 lados." +
            "\n";
    }

    if (config.controle_dado_comando) {
        ajuda += 
            config.format_negrito +
            config.prefixo +
            config.rolar_dado + 
            " + quantidade de dados + " + 
            config.dado + 
            " + número de lados" +
            config.format_negrito +
            ": rola o número específicado de dados." +
            "\n" +
            "\n" +
            "Exemplos:" +
            "\n" +
            config.format_negrito +
            config.format_comentario + 
            config.prefixo +
            config.rolar_dado + "3" + config.dado + "6" + 
            config.format_comentario + 
            config.format_negrito +
            ": rola 3 dados de 6 lados: " +
            "\n" +
            "    " +
            "5, 2, 4 = " + 
            config.format_negrito +
            config.format_comentario + 
            "11" +
            config.format_comentario + 
            config.format_negrito +
            "\n";
    }

    if (config.controle_dado_comando_modificador) {
        ajuda += 
            "\n" +
            config.format_negrito +
            config.format_comentario + 
            config.prefixo +
            config.rolar_dado + config.dado + "12+2" + config.dadp + "4" + 
            config.format_comentario + 
            config.format_negrito +
            ": rola 1 dado de 12 lados mais 2 dados de 4 lados e soma os resultados." +
            "\n" +
            "\n" +
            config.format_negrito +
            config.format_comentario + 
            config.prefixo +
            config.rolar_dado + "2" + config.dado + "20 - 2" +
            config.format_comentario + 
            config.format_negrito +
            ": rola 1 dado de 20 lados e subtrai o resultado por 2." +
            "\n";
    }

    ajuda += 
        "\n" +
        "Ouça o podcast rpguaxa em https://www.deviante.com.br/podcasts/rpguaxa/";

    return ajuda;
};

module.exports = executar;
