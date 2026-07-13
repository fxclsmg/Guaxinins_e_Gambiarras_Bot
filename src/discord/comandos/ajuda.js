const config = require("../../config");

function executar(msg){

    return "**COMANDOS PARA GUAXININS & GAMBIARRAS:**" +
        
        "\n" +
        "**" +
        config.prefixo +
        "eu acredito no guaxaverso**: exibe painel de rolagem. Enviar o emoji 🦝 tem o mesmo resultado." +
        "\n" +
        "**" +

        config.prefixo +
        "atributo + número de 2 a 5**: define o número de atributo para o jogador." +
        "\n" +
        "**" +

        config.prefixo +
        "limpar atributo**: apaga atributo da memória, assim como a ID do usuário." +
        "\n" +
        "**" +

        config.prefixo +
        "ajuda**: exibe lista de comandos do bot e modo de uso" +
        "\n" +

        "\n" +
        "**MODO DE USO:**" +
        "\n" +
        "Para rolar um dado reaja com ☝️ no painel de rolagem." +
        "\n" +
        "Para rolar dois dados reaja com ✌️ no painel de rolagem." +
        "\n" +
        "Para rolar três dados reaja com 🤟 no painel de rolagem." +
        "\n" +
        "Para lançar uma frase aleatória da vinheta reaja com 🦝 no painel de rolagem." +
        "\n" +

        "\n" +
        "**COMANDOS PARA NOTAS MUSICAIS:**" +
        "\n" +

        "**" +
        config.prefixo +
        "n + número**: lança um número de dados de 12 lados, com as 7 notas naturais e os 5 acidentes nas faces." +
        "\n" +

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

        config.format_negrito +
        config.prefixo + config.embaralhar +
        config.format_negrito +
        ": embaralha todas as 54 cartas no canal de texto atual." +
        "\n" +

        "**" +
        config.prefixo +
        "limpar baralho**: apaga o baralho do canal de texto atual, juntamente com as IDs e dados armazenados." +
        "\n" +
        "**" +
        config.prefixo +
        "limpar hora**: apaga da memória as horas armazenadas das ultimas mensagens do bot." +
        "\n" +

        "\n" +
        "**JOGAR PEDRA, PAPEL OU TESOURA:**" +
        "\n" +
        "Ao enviar alguns dos emojis ✊, ✋, ou ✌️: bot responde com um destes três emojis mais o resultado." +
        "\n" +

        "\n" +
        "**COMANDOS PARA ROLAGEM DE DADOS:**" +
        "\n" +
        "**" +

        config.prefixo +
        "r + quantidade de dados + d + número de lados**: rola o número específicado de dados." +
        "\n" +
        "Exemplos:" +
        "\n" +
        "**" +

        config.prefixo +
        "r 3d6**: rola 3 dados de 6 lados." +
        "\n" +
        "**" +

        config.prefixo +
        "r d12+2d4**: rola 1 dado de 12 lados mais 2 dados de 4 lados e soma os resultados." +
        "\n" +
        "**" +

        config.prefixo +
        "r 2d20 - 2**: rola 1 dado de 20 lados e subtrai o resultado por 2." +
        "\n" +
        
        "\n" +
        "Ouça o podcast rpguaxa em https://www.deviante.com.br/podcasts/rpguaxa/";

};

module.exports = executar;
