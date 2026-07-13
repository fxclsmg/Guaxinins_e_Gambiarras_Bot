// Bot Guaxinins & Gambiarras
// let moduloBaralho = require("./baralho");
// let moduloPedraPapelETesoura = require("./pedraPapelETesoura");
// let moduloNotasMusicais = require("./notasMusicais");
// let moduloRolagemDeDados = require("./rolagemDeDados");
const config = require("./config");
const Discord = require("discord.js");
const bot = new Discord.Client();
const prefixo = ".";
const comandoAtributo = "atributo";
const comandoPainel = ["eu acredito no guaxaverso", "🦝"];
const comandoAjuda = "ajuda";
const comandoLimparAtributo = "limpar atributo";
const token = config.token; // token G&G
let jogadores = [config.botId]; // Id do bot Guaxinins & Gambiarras
let reacao = [];
let atributos = [0];
let nomeJogador = [];
let canaisGeg = [];
let idUltimaMensagem = [];
let ultimaMensagemGeg = [];
let ordem = 0;
let horaHora = setInterval(quantasHoras, 1000 * 60 * 60);
const erroAtributoGeg = [
  ":unicorn: Os atributos devem ser entre 2 e 5. Toma aqui seu cupcake.",
  ":santa: Ta pior que o Adam P@r$%! Escolhe um atribto entre 2 e 5 logo.",
  ":wolf: Te achei coelhinha... Mas não achei o seu atributo. Eles devem ser entre 2 e 5.",
  ":desktop: A humanidade precisa ser ~~destruída~~ corrigida. Use atributos entre 2 e 5.",
  ":dancer: Todo mundo tem atributo entre 2 e 5. Só a bailarina que não tem.",
  ":cup_with_straw: Senhor(a), escolha um atributo entre 2 e 5, por favor.",
];
const erroGeralGeg = [
  "Verifique se o aparelho está conectado na tomada e use o comando **" +
    prefixo +
    comandoAjuda +
    "**",
  "_Num intidi o que c falô._ Pede **" +
    prefixo +
    comandoAjuda +
    "** pro guaxinim aê.",
  "Então... eu sei lá. Acione o departamento do problema de outra pessoa com **" +
    prefixo +
    comandoAjuda +
    "**",
  "Use o comando **" +
    prefixo +
    comandoAjuda +
    "** porque seja lá o que é isso que você quer fazer, você conseguirá... talvez.",
  "Use o comando **" +
    prefixo +
    comandoAjuda +
    "** não use **" +
    prefixo +
    "juada**, nem **" +
    prefixo +
    "dajua**, tampouco **" +
    prefixo +
    "AJUDA**",
  "_Saudade do sidekick né minha filha._ Use o comando **" +
    prefixo +
    comandoAjuda +
    "**",
];
const frases = [
  "Aí vocês estão na taverna...",
  "Rolem os dados.",
  "Bola de fogo!",
  "Chama... cof, cof... Chama o clérigo.",
  "Como assim eu morri?",
  "Hahaha, rolem iniciativa.",
  "Então, não tem armadilha, podemos ir.",
  "O que vocês fazem? Uhm, uhm?",
  "Tá, tá. Eu amarro uma corda nelas e uso como arma.",
  "Eu ataco.",
  "O mago lança seu thunderbolt +15 no Beholder.",
  "Ai, eu quero rolar percepção, posso?",
  "Tem algum lugar pra se esconder?",
  "Ah, falha crítica.",
  "Ataque de oportunidade.",
  "Ae oh arrombado, chama o clérigo!",
];
const arquetipos = [
  "https://tenor.com/view/raccoon-flying-gif-9031574",
  "https://tenor.com/view/raccoon-roll-rolling-gif-9052103",
  "https://tenor.com/view/raccoon-playing-piano-focused-amazing-engrossed-funny-gif-13573672",
  "https://tenor.com/view/raccoon-playful-playing-bored-music-gif-14245228",
];
const regras =
  "Guaxinins & Gambiarras, uma adaptação de Lasers & Sentimentos por Marcelo Guaxinim:" +
  "\n\n" +
  "**Personagem:**" +
  "\n" +
  "O jogador escolherá um atributo de 2 a 5. Saiba que atributos como 2 ou 3 correspondem a personagens bons em interações sociais (são mais inteligentes e tem melhor percepção do ambiente), por sua vez personagens com atributos de 4 e 5 tem um porte físico melhor (assim são melhores em atacar, correr, etc). Todo o resto da criação do personagem (nome, descrição, ítens) são meramente pontos estéticos que não interferem na mecânica, devendo se encaixar a narrativa proposta na mesa em questão." +
  "\n\n" +
  "**Testes:**" +
  "\n" +
  "Em uma situação normal uma personagem rola 2 dados de 6 lados para executar seus testes. Caso esteja ferido ou em desvantagem, rola-se 1 dado, já em caso de vantagem ou recebendo ajuda de outro jogador rolam-se 3 dados." +
  "\n\n" +
  "**Ação Guaxinim:** Quando o personagem quer usar seu condicionamento físico para agir (atacar, correr, escalar, etc). Para que tenha sucesso o jogador precisa tirar seu atributo ou um valor MENOR em pelo menos um dado." +
  "\n\n" +
  "**Ação Gambiarra:** Quando o personagem quer usar suas capacidades psico-sociais e intelectuais para agir (perceber, decifrar, convencer, etc). Para que tenha sucesso o jogador precisa tirar seu atributo ou um valor MAIOR em pelo menos um dado." +
  "\n\n" +
  "Caso o jogador tire exatamente o valor do seu atributo no dado, isso configura acerto crítico, dando ao jogador uma vantagem ou benefício em sua ação ou contando como dois acertos." +
  "\n\n" +
  "**Pontos de vida:**" +
  "\n" +
  "Cada personagem tem 3 pontos de vida. Esses pontos se perdem ao ser atacados por inimigos ou em caso de falhas durante testes com risco de se ferir." +
  "\n" +
  "Para recuperar basta ter uma justificativa narrativa como cuidados médicos num hospital ou uma noite de sono numa estalagem.";
let guilds = [];
bot.login(token);
bot.on("ready", () => {
  console.log("Não tem armadilha, podemos ir.");
  // console.log(moduloNotasMusicais()); // módulos para particionar código
  // console.log(moduloPedraPapelETesoura());
  // console.log(moduloRolagemDeDados());

  // const Guilds = bot.guilds.cache.map(guild => guild.name); // código para listar servidores
  // console.log(Guilds.length);
  // console.log(Guilds.toString());
});
bot.on("messageReactionAdd", (react) => {
  reacao = react.users.cache.keyArray();
  if (react.message.author.id !== reacao[1] && reacao[1] !== undefined) {
    nomeJogador = react.users
      .valueOf(reacao)
      .mapValues((user) => user.username)
      .array();
  }
  novoJogador(reacao[1]);
});
bot.on("message", (msg) => {
  if (msg.content.startsWith(prefixo)) {
    let comando = msg.content.substring(1);
    let atributo = 0;
    if (comando.startsWith(comandoAtributo)) {
      comando = apagaEspaco(comando);
      atributo = parseInt(comando.substr(comandoAtributo.length, 1));
      if (!isNaN(atributo) && atributo > 1 && atributo < 6) {
        novoJogador(msg.author.id);
        for (let i = 0; i < jogadores.length; i++) {
          if (msg.author.id === jogadores[i]) {
            atributos.splice(i, 1, atributo);
            msg.reply("seu atributo é " + "` " + atributos[i] + " `");
            switch (atributo) {
              case 5:
                msg.channel.send(arquetipos[0]);
                break;
              case 4:
                const shelly = [
                  "4, 4 pra toda sua família, 4 pra tu, 4 pra tua vaca, 4 pra todo mundo!",
                  "O número de seguidores do Shellynismo ultrapassou a metade da humanidade",
                  "No Anel pode-se ler: \n _um número para todos governar,_ \n _um número para encontrá-los,_ \n _um número para todos trazer_ \n _e no atributo 4 aprisioná-los._",
                  "A sindrome de Shelly está se espalhando pelo mundo rapiadamente.",
                ];
                msg.channel.send(
                  shelly[Math.floor(Math.random() * shelly.length)]
                );
                msg.channel.send(arquetipos[1]);
                break;
              case 3:
                msg.channel.send(arquetipos[2]);
                break;
              case 2:
                msg.channel.send(arquetipos[3]);
                break;
            }
            break;
          }
        }
      }
    }
    if (
      comando.startsWith(comandoAtributo[0]) &&
      (isNaN(atributo) || atributo <= 1 || atributo >= 6) &&
      comando !== comandoAjuda
    ) {
      msg.reply(
        erroAtributoGeg[Math.floor(Math.random() * erroAtributoGeg.length)]
      );
    }
    if (
      comando.startsWith("e") &&
      !comando.startsWith(comandoAtributo[0]) &&
      !comando.startsWith("n") &&
      !comando.startsWith("b") &&
      !comando.startsWith("r") &&
      !comando.startsWith(comandoLimparAtributo[0]) &&
      comando !== comandoPainel[1] &&
      comando !== comandoAjuda &&
      !comando.startsWith(prefixo) &&
      comando.length !== 0
    ) {
      msg.reply(erroGeralGeg[Math.floor(Math.random() * erroGeralGeg.length)]);
    }
  }
  if (
    msg.content === prefixo + comandoPainel[0] ||
    msg.content === comandoPainel[1] ||
    msg.content === comandoPainel[1] + "@Guaxinins & Gambiarras"
  ) {
    msg.channel.send("Então, não tem armadilha, podemos ir.");
  }
  if (msg.content === prefixo + "logGeG") {
    logGeG();
  }
  if (msg.content === prefixo + comandoLimparAtributo) {
    limparAtributo(msg.author.id);
    logGeG();
  }
  if (msg.content === prefixo + comandoAjuda) {
    msg.channel.send(
      "**COMANDOS PARA G&G:**" +
        "\n" +
        "**" +
        prefixo +
        "eu acredito no guaxaverso**: exibe painel de rolagem. Enviar o emoji 🦝 tem o mesmo resultado." +
        "\n" +
        "**" +
        prefixo +
        "atributo + número de 2 a 5**: define o número de atributo para o jogador." +
        "\n" +
        "**" +
        prefixo +
        "limpar atributo**: apaga atributo da memória, assim como a ID do usuário." +
        "\n" +
        "**" +
        prefixo +
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
        prefixo +
        "n + número**: lança um número de dados de 12 lados, com as 7 notas naturais e os 5 acidentes nas faces." +
        "\n" +
        "\n" +
        "**COMANDO PARA O BARALHO:**" +
        "\n" +
        "**" +
        prefixo +
        "b + número**: saca um número de cartas de baralho." +
        "\n" +
        "**" +
        prefixo +
        "b + embaralhar**: embaralha todas as 54 cartas no canal de texto atual." +
        "\n" +
        "**" +
        prefixo +
        "limpar baralho**: apaga o baralho do canal de texto atual, juntamente com as IDs e dados armazenados." +
        "\n" +
        "**" +
        prefixo +
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
        prefixo +
        "r + quantidade de dados + d + número de lados**: rola o número específicado de dados." +
        "\n" +
        "Exemplos:" +
        "\n" +
        "**" +
        prefixo +
        "r 3d6**: rola 3 dados de 6 lados." +
        "\n" +
        "**" +
        prefixo +
        "r d12+2d4**: rola 1 dado de 12 lados mais 2 dados de 4 lados e soma os resultados." +
        "\n" +
        "**" +
        prefixo +
        "r 2d20 - 2**: rola 1 dado de 20 lados e subtrai o resultado por 2." +
        "\n" +
        "\n" +
        "Ouça o podcast rpguaxa em https://www.deviante.com.br/podcasts/rpguaxa/"
    );
  }
  for (let i = 0; i < frases.length; i++) {
    if (msg.content === frases[i] && msg.author.id === jogadores[0]) {
      msg
        .react("☝️")
        .then(() => msg.react("✌️"))
        .then(() => msg.react("🤟"))
        .then(() => msg.react("🦝"))
        .catch(() => console.error("Ah, falha crítica."));
      break;
    }
  }
  const filter2 = (reaction, user) => {
    return (
      ["☝️", "✌️", "🤟", "🦝"].includes(reaction.emoji.name) &&
      user.id !== msg.author.id
    );
  };
  msg
    .awaitReactions(filter2, { max: 1, time: 60 * 60 * 1000, errors: ["time"] })
    .then((collected) => {
      const reaction = collected.first();
      if (reaction.emoji.name === "☝️") {
        let rolagem = [];
        for (let i = 1; i <= 1; i++) {
          let dado = Math.ceil(Math.random() * 6);
          if (dado == 0) {
            dado++;
          }
          critico(rolagem, dado);
        }
        msg.channel.send(
          "<@!" +
            reacao[1] +
            ">" +
            "\n" +
            " rolou `1d6` e tirou: " +
            rolagem.toString()
        );
        painel(msg);
        console.log(
          nomeJogador[1] + " rolou" + rolagem // + " no servidor " + msg.guild.name
        );
        reacao.splice(1);
      }
      if (reaction.emoji.name === "✌️") {
        let rolagem = [];
        for (let i = 1; i <= 2; i++) {
          let dado = Math.ceil(Math.random() * 6);
          if (dado == 0) {
            dado++;
          }
          critico(rolagem, dado);
        }
        msg.channel.send(
          "<@!" +
            reacao[1] +
            ">" +
            "\n" +
            " rolou `2d6` e tirou: " +
            rolagem[0] +
            " e " +
            rolagem[1]
        );
        painel(msg);
        console.log(
          nomeJogador[1] + " rolou" + rolagem // + " no servidor " + msg.guild.name
        );
        reacao.splice(1);
      }
      if (reaction.emoji.name === "🤟") {
        let rolagem = [];
        for (let i = 1; i <= 3; i++) {
          let dado = Math.ceil(Math.random() * 6);
          if (dado == 0) {
            dado++;
          }
          critico(rolagem, dado);
        }
        msg.channel.send(
          "<@!" +
            reacao[1] +
            ">" +
            "\n" +
            " rolou `3d6` e tirou: " +
            rolagem[0] +
            " , " +
            rolagem[1] +
            " e " +
            rolagem[2]
        );
        painel(msg);
        console.log(
          nomeJogador[1] + " rolou" + rolagem // + " no servidor " + msg.guild.name
        );
        reacao.splice(1);
      }
      if (reaction.emoji.name === "🦝") {
        // msg.client.users.cache.get(reacao[1]).send(painelSecreto);
        msg.channel.send(
          "<@!" +
            reacao[1] +
            ">" +
            ", " +
            "\n" +
            // frases[Math.floor(Math.random() * frases.length)]
            regras
        );
        painel(msg);
        console.log(
          nomeJogador[1] + " exibiu as regras" // + " no servidor " + msg.guild.name
        );
        reacao.splice(1);
      }
    })
    .catch(() => {});
});
function novoJogador(id) {
  var posicaoJogador = 0;
  while (posicaoJogador < jogadores.length) {
    if (jogadores[posicaoJogador] === id) {
      break;
    } else {
      posicaoJogador++;
    }
  }
  if (posicaoJogador === jogadores.length && id !== undefined) {
    jogadores.push(id);
    atributos.push(0);
  }
}
function critico(rolagem, dado) {
  for (let i = 0; i < jogadores.length; i++) {
    if (reacao[1] === jogadores[i]) {
      if (atributos[i] === dado) {
        rolagem.push(" " + "**" + dado + "** ");
        break;
      } else {
        rolagem.push("` " + dado + " `");
        break;
      }
    }
  }
}
function painel(msg) {
  msg.channel.send(frases[Math.floor(Math.random() * frases.length)]);
  verificaCanaisEIds(msg);
  console.log(`Posição atual é: ${ordem}`);
  msg.channel.messages
    .fetch(idUltimaMensagem[ordem])
    .then((msg) => msg.delete())
    .catch(() => console.error("Ah, falha crítica."));
  ordem = 0;
  for (let i = 0; i < canaisGeg.length; i++) {
    if (msg.channel.id === canaisGeg[i]) {
      ultimaMensagemGeg.splice(i, 1, parseInt(Date().substring(16, 18)));
      break;
    }
  }
  ordem = 0;
  logGeG();
}
function quantasHoras() {
  var horaAtual = parseInt(Date().substring(16, 18));
  if (horaAtual === parseInt("04")) {
    resetar();
  }
}
function resetar() {
  reacao = [];
  atributos = [0];
  jogadores = ["790240317818929172"];
  nomeJogador = [];
}
function limparAtributo(idAutor) {
  for (let i = 0; i < jogadores.length; i++) {
    if (idAutor === jogadores[i]) {
      atributos.splice(i, 1);
      jogadores.splice(i, 1);
    }
  }
}
function verificaCanaisEIds(msg) {
  ordem = 0;
  while (ordem <= canaisGeg.length) {
    if (canaisGeg.length === 0) {
      canaisGeg.push(msg.channel.id);
      console.log("Primeiro canal de ID criado");
    }
    if (canaisGeg[ordem] === msg.channel.id) {
      idUltimaMensagem.splice(ordem, 1, msg.id);
      console.log("Id armazenado.");
      break;
    }
    if (canaisGeg[ordem] !== msg.channel.id) {
      ordem++;
      console.log("Canal de ID não encontrado.");
      if (ordem === canaisGeg.length) {
        console.log(
          "Nenhum canal de ID da lista de canais de ID corresponde à pesquisa."
        );
        canaisGeg.push(msg.channel.id);
        idUltimaMensagem.splice(ordem, 1, msg.id);
        break;
      }
    }
  }
}
function logGeG() {
  console.log("reacao");
  console.log(reacao);
  console.log("atributos");
  console.log(atributos);
  console.log("jogadores");
  console.log(jogadores);
  console.log("nomeJogador");
  console.log(nomeJogador);
  console.log("canaisGeg");
  console.log(canaisGeg);
  console.log("idUltimaMensagem");
  console.log(idUltimaMensagem);
  console.log("ultimaMensagemGeg");
  console.log(ultimaMensagemGeg);
  console.log("ordem");
  console.log(ordem);
}
function eNumeroPositivo(texto) {
  if (!isNaN(texto) && parseInt(texto) > 0) {
    return true;
  } else {
    return false;
  }
}
function temPrefixo(texto) {
  texto === texto.startsWith(prefixo) ? true : false;
  return texto;
}

// Bot Notas Musicais

const prefixoNotaMusical = "n ";
const erroMusical = [
  "O pé faz assim, mãozinha pro ar...",
  "O rebolation tion tion, o reboletion.",
  "Nossa, nossa... Assim você me mata. Ai se eu te pego.",
  "Eu não preciso de ninguém pra fazer merda comigo.",
  "Baba baby, baby baba, baba, baibê",
  "Vem com o bumbumtantan, vai com o bumbumtantan",
];
bot.on("message", (msg) => {
  // moduloNotasMusicais(msg, prefixo);
  if (msg.content.startsWith(prefixo + prefixoNotaMusical)) {
    var sufixo = msg.content.substring(3);
    if (!isNaN(sufixo) && sufixo && sufixo > 0) {
      var nDados = parseInt(sufixo);
      if (nDados < 14) {
        var arrayTraduzido = [];
        var resultadoRolagem;
        for (var i = 0; i < nDados; i++) {
          resultadoRolagem = traducao(Math.ceil(Math.random() * 12));
          arrayTraduzido.push(resultadoRolagem);
        }
        var mensagem = arrayTraduzido.toString();
        msg.reply(mensagem);
        console.log("do re mi fa sol la si");
        console.log(
          msg.author.username + " tocou as notas " + mensagem // +
          // " no servidor " +
          // msg.guild.id
        );
      }
    }
    if (nDados >= 14) {
      msg.reply(
        "Por hora só dá pra tocar 13 notas. Meu criador é preguiçoso. :man_shrugging:"
      );
    }
  }
  if (msg.content.startsWith(prefixo + "n")) {
    var sufixoNotas = msg.content.substring(2);
    if (
      sufixoNotas.slice(0, 1) !== " " ||
      isNaN(parseInt(sufixoNotas.substring(1))) ||
      parseInt(sufixoNotas.substring(1)) <= 0
    ) {
      msg.reply(
        ":notes: " +
          erroMusical[Math.floor(Math.random() * erroMusical.length)] +
          " :musical_note:"
      );
    }
  }
});
function traducao(rolagem) {
  switch (rolagem) {
    case 1:
      return "C ";
    case 2:
      return "**C# **";
    case 3:
      return "D ";
    case 4:
      return "**D# **";
    case 5:
      return "E ";
    case 6:
      return "F ";
    case 7:
      return "**F# **";
    case 8:
      return "G ";
    case 9:
      return "**G# **";
    case 10:
      return "A ";
    case 11:
      return "**A# **";
    case 12:
      return "B ";
  }
}

// Bot Pedra, papel ou tesoura

const ppt = ["✊", "✋", "✌️"];
let lancamentoJogador = 0;
bot.on("message", (msg) => {
  for (let i = ppt.length; i > 0; i--) {
    if (msg.content === ppt[i - 1] && msg.author.id !== jogadores[0]) {
      lancamentoJogador = ppt[i - 1];
      let lancamentoBot = ppt[Math.floor(Math.random() * 3)];
      if (lancamentoJogador === lancamentoBot) {
        msg.reply(
          "lançou " +
            lancamentoJogador +
            ". Eu lancei " +
            lancamentoBot +
            ". Deu empate."
        );
      }
      if (
        (lancamentoJogador === ppt[2] && lancamentoBot === ppt[0]) ||
        (lancamentoJogador === ppt[0] && lancamentoBot === ppt[1]) ||
        (lancamentoJogador === ppt[1] && lancamentoBot === ppt[2])
      ) {
        msg.reply(
          "lançou " +
            lancamentoJogador +
            ". Eu lancei " +
            lancamentoBot +
            ". Você perdeu."
        );
      }
      if (
        (lancamentoJogador === ppt[0] && lancamentoBot === ppt[2]) ||
        (lancamentoJogador === ppt[1] && lancamentoBot === ppt[0]) ||
        (lancamentoJogador === ppt[2] && lancamentoBot === ppt[1])
      ) {
        msg.reply(
          "lançou " +
            lancamentoJogador +
            ". Eu lancei " +
            lancamentoBot +
            ". Você **ganhou**."
        );
      }
      break;
    }
  }
});

// Bot Baralho

const segundo = 1000;
const minuto = 60 * segundo;
const hora = 60 * minuto;
const dia = 24 * hora;
const intervalo = hora * 7;
const prefixoBaralho = "b";
const recomeçar = "embaralhar";
const limparBaralho = "limpar baralho";
let ultimaMensagem = [];
let baralhos = [];
let cartas = [];
let canais = [];
let posicao = 0;
let baralho = [];
let tempo = setInterval(resetarMemoria, intervalo);
const erroBaralho = [
  "Acredite no coração das cartas.",
  "Não existem cartas inúteis no baralho do meu avô.",
  "Você ativou mninha carta armadilha.",
  "YU-GI-OOOOOOOOOOOH!",
  "Eu invoco o dragão branco de olhos azuis.",
  "Exódia, obliterar!",
  "É hora do duelo.",
];
bot.on("message", (msg) => {
  verificaCanaisEBarahos(msg);
  if (msg.content === prefixo + limparBaralho) {
    apagarBaralho(msg.channel.id);
    msg.reply("baralho excluído");
  }
});
function verificaCanaisEBarahos(msg) {
  if (msg.content.startsWith(prefixo)) {
    let comando = msg.content.substring(1);
    comando = apagaEspaco(comando);
    let sufixo = comando;
    if (sufixo.startsWith(prefixoBaralho)) {
      sufixo = sufixo.substring(1);
      if (
        (isNaN(parseInt(sufixo)) &&
          sufixo !== recomeçar &&
          sufixo !== limparBaralho) ||
        parseInt(sufixo) <= 0
      ) {
        msg.reply(
          ":black_joker: " +
            erroBaralho[Math.floor(Math.random() * erroBaralho.length)] +
            " Use o comando " +
            "**" +
            prefixo +
            comandoAjuda +
            "**"
        );
      }
      posicao = 0;
      while (posicao <= canais.length) {
        if (canais.length === 0) {
          alocarBaralho(msg);
          console.log("Primeiro baralho criado.");
        }
        if (canais[posicao] === msg.channel.id) {
          console.log("Baralho encontrado.");
          sacarCarta(msg, sufixo);
          break;
        }
        if (canais[posicao] !== msg.channel.id) {
          posicao++;
          console.log("Baralho não encontrado.");
          if (posicao === canais.length) {
            console.log(
              "Nenhum baralho da lista de baralhos corresponde à pesquisa."
            );
            alocarBaralho(msg);
            sacarCarta(msg, sufixo);
            break;
          }
        }
      }
    }
  }
}
function sacarCarta(msg, sufixo) {
  if (!isNaN(sufixo) && sufixo && sufixo > 0) {
    let nCartas = parseInt(sufixo);
    baralho = baralhos[posicao];
    if (baralho.length > 0) {
      let cartasSacadas = [];
      let resultadoSaque;
      for (let i = 0; i < nCartas && baralho.length > 0; i++) {
        resultadoSaque = baralho[0];
        baralho.splice(0, 1);
        cartasSacadas.push(resultadoSaque);
      }
      let mensagem = cartasSacadas.toString();
      msg.reply(mensagem);
      console.log("Foram sacadas " + cartasSacadas.length + " cartas.");
      console.log(
        msg.author.username + " sacou as cartas " + mensagem // +
        // " no servidor " +
        // msg.guild.name
      );
    }
    if (baralho.length === 0) {
      msg.reply(
        "O baralho tem " +
          baralho.length +
          " cartas. Execute o comando **" +
          prefixo +
          prefixoBaralho +
          " " +
          recomeçar +
          "** para reembaralhar todas as cartas."
      );
    }
  }
  if (sufixo === recomeçar) {
    criarBaralho();
    baralho = cartas;
    baralhos.splice(posicao, 1, baralho);
    msg.reply("Todas as " + baralho.length + " cartas foram embaralhadas");
    console.log("Todas as " + baralho.length + " cartas foram embaralhadas");
    baralho = [];
  }
  console.log("Existem " + baralhos.length + " baralhos.");
  for (let i = 0; i < baralhos.length; i++) {
    let b = baralhos[i];
    console.log("Baralho " + i + " tem " + b.length + " cartas.");
  }
  console.log("Posicao atual " + posicao);
  console.log("Canal atual " + canais[posicao]);

  posicao = 0;
  for (let i = 0; i < canais.length; i++) {
    if (msg.channel.id === canais[i]) {
      ultimaMensagem.splice(i, 1, parseInt(Date().substring(16, 18)));
      break;
    }
    posicao++;
  }
}
function embaralhar(array) {
  let indice_atual = array.length,
    valor_temporario,
    indice_aleatorio;
  while (0 !== indice_atual) {
    indice_aleatorio = Math.floor(Math.random() * indice_atual);
    indice_atual -= 1;
    valor_temporario = array[indice_atual];
    array[indice_atual] = array[indice_aleatorio];
    array[indice_aleatorio] = valor_temporario;
  }
  return array;
}
function alocarBaralho(msg) {
  canais.push(msg.channel.id);
  criarBaralho();
  baralhos.push(cartas);
  console.log("Quantidade canais " + canais.length);
  console.log(canais);
}
function criarBaralho() {
  cartas = [];
  let contadorNaipe = 0;
  let contadorValor = 0;
  const naipe = [
    ":hearts:",
    ":spades:",
    ":diamonds:",
    ":clubs:",
    ":red_circle:",
    ":blue_circle:",
  ];
  const valor = [
    " A",
    " 2",
    " 3",
    " 4",
    " 5",
    " 6",
    " 7",
    " 8",
    " 9",
    " 10",
    " J",
    " Q",
    " K",
    " C",
  ];
  let carta;
  for (let i = 0; i < 52; i++) {
    carta = valor[contadorValor] + naipe[contadorNaipe];
    if (contadorValor < 13) {
      contadorValor++;
    }
    if (contadorValor === 13) {
      contadorValor = 0;
      contadorNaipe++;
    }
    cartas.push(carta);
  }
  cartas.push(valor[13] + naipe[4]);
  cartas.push(valor[13] + naipe[5]);
  embaralhar(cartas);
  console.log(cartas);
}
function resetarMemoria() {
  posicao = 0;
  for (let i = 0; i <= canais.length; i++) {
    let horaAtual = parseInt(Date().substring(16, 18));
    if (
      (canais.length > 0 && horaAtual - ultimaMensagem[posicao] >= 6) ||
      horaAtual - ultimaMensagem[posicao] < 0
    ) {
      baralhos.splice(posicao, 1);
      canais.splice(posicao, 1);
      console.log("O baralho " + posicao + " foi apagado.");
      console.log(baralhos);
      console.log("tudo limpo");
    }
    posicao++;
  }
  posicao = 0;
  for (let i = 0; i <= canaisGeg.length; i++) {
    let horaAtual = parseInt(Date().substring(16, 18));
    if (
      (canaisGeg.length > 0 && horaAtual - ultimaMensagemGeg[posicao] >= 6) ||
      horaAtual - ultimaMensagemGeg[posicao] < 0
    ) {
      idUltimaMensagem.splice(posicao, 1);
      canaisGeg.splice(posicao, 1);
      console.log("O canal de ID " + posicao + " foi apagado.");
      console.log(canaisGeg);
      console.log(idUltimaMensagem);
      console.log("tudo limpo");
    }
    posicao++;
  }
  posicao = 0;
}
function apagarBaralho(idCanal) {
  for (let i = 0; i < canais.length; i++) {
    if (idCanal === canais[i]) {
      baralhos.splice(i, 1);
      canais.splice(i, 1);
      console.log("O baralho " + i + " foi apagado.");
      console.log(baralhos);
      console.log("tudo limpo");
    }
  }
}

// bot rolagem de dados

let sufixoRolagem;
var mensagem;
var ordemCalculo = [];
var dados = 0;
var quantidadeDados = [];
var quantidadeFaces = [];
var simbolos = [];
var operadores = [];
var fatores = [];
var rolagens = [];
var totaisRolagens = [];
var totais = 0;
var totalFinal = 0;
var prefixoDados = prefixo + "r ";
const erroRolagem = ["", "", "", "", "", ""]; // criar mensagens de erros para as rolagens
bot.on("message", (msg) => {
  if (msg.content.startsWith(prefixoDados)) {
    sufixoRolagem = msg.content.substring(3);
    rolagemDeDadosEMensagem(msg);
  }
  if (
    msg.content.startsWith(prefixo + "r") &&
    !msg.content.substring(2).startsWith(" ")
  ) {
    console.log("Erro de sintaxe após '.r'");
  }
});
function rolagemDeDadosEMensagem(msg) {
  if (
    (sufixoRolagem.slice(0, 1) === "d" &&
      parseInt(sufixoRolagem.slice(1, 2)) > 0) ||
    (parseInt(sufixoRolagem.slice(0, 1)) > 0 &&
      !isNaN(sufixoRolagem.slice(0, 1)) &&
      sufixoRolagem.indexOf("d") >= 0)
  ) {
    sufixoRolagem = apagaEspaco(sufixoRolagem);
    mensagem = sufixoRolagem;
    dadosLancados(sufixoRolagem);
    quantidadeOperadores(sufixoRolagem);
    while (dados > 0) {
      numeroDeDados(sufixoRolagem);
      fatoresDaRolagem(sufixoRolagem);
      dados--;
    }
    rolagensDeDados(
      quantidadeDados,
      quantidadeFaces,
      operadores,
      fatores,
      rolagens,
      totaisRolagens
    );
    if (!isNaN(totalFinal)) {
      if (
        ordemCalculo.length > 0 &&
        ordemCalculo.length < 3 &&
        ordemCalculo.indexOf("f") !== -1 &&
        sufixoRolagem.length === 0
      ) {
        let teste = reacao[1] !== undefined ? reacao[1] : msg.author.id;
        msg.channel.send(
          "<@!" +
            teste +
            ">" +
            " rolou " +
            "`" +
            mensagem +
            "` " +
            "\n" +
            "[" +
            rolagens +
            "]" +
            " -> " +
            "(" +
            totaisRolagens +
            " " +
            operadores +
            " " +
            fatores +
            ")" +
            " = " +
            "" +
            totalFinal
        );
        reacao.splice(1);
      }
      if (
        ordemCalculo.length > 0 &&
        ordemCalculo.length < 3 &&
        ordemCalculo.indexOf("f") === -1 &&
        sufixoRolagem.length === 0
      ) {
        let teste = reacao[1] !== undefined ? reacao[1] : msg.author.id;
        msg.channel.send(
          "<@!" +
            teste +
            ">" +
            " rolou " +
            "`" +
            mensagem +
            "` " +
            "\n" +
            "[" +
            rolagens +
            "]" +
            " -> " +
            "(" +
            totaisRolagens[0] +
            " " +
            operadores[0] +
            " " +
            totaisRolagens[1] +
            ")" +
            " = " +
            "" +
            totalFinal
        );
        reacao.splice(1);
      }
      if (ordemCalculo.length >= 3 || sufixoRolagem.length > 0) {
        console.log("Ihhh... eu ainda não sei calcular isso");
        /*
        let teste = reacao[1] !== undefined ? reacao[1] : msg.author.id
          msg.channel.send(
         "<@!" + teste +
          ">" +
          " rolou " +
            "`" +
            mensagem +
            "` " +
            "\n" +
            "[" +
            rolagens +
            "]" +
            " -> " +
            "(" +
            totaisRolagens +
            " " +
            operadores +
            " " +
            fatores +
            ")" +
            " = " +
            "" +
            totalFinal
        );
        reacao.splice(1);
        */
      }
      if (ordemCalculo.length === 0 && rolagens.length > 1) {
        let teste = reacao[1] !== undefined ? reacao[1] : msg.author.id;
        msg.channel.send(
          "<@!" +
            teste +
            ">" +
            " rolou " +
            "`" +
            mensagem +
            "` " +
            "\n" +
            "[" +
            rolagens +
            "]" +
            " = " +
            "" +
            totalFinal
        );
        reacao.splice(1);
      }
      if (ordemCalculo.length === 0 && rolagens.length === 1) {
        let teste = reacao[1] !== undefined ? reacao[1] : msg.author.id;
        msg.channel.send(
          "<@!" +
            teste +
            ">" +
            " rolou " +
            "`" +
            mensagem +
            "` " +
            "= " +
            totalFinal
        );
        reacao.splice(1);
      }
    }
    logDeRolagem(
      ordemCalculo,
      quantidadeDados,
      quantidadeFaces,
      operadores,
      fatores,
      rolagens,
      totaisRolagens
    );
    // console.log(
    //   msg.author.username +
    //     " rolou " +
    //     totaisRolagens +
    //     " no servidor " +
    //     msg.guild.name
    // );
    dados = 0;
    quantidadeDados = [];
    quantidadeFaces = [];
    simbolos = [];
    operadores = [];
    fatores = [];
    rolagens = [];
    totaisRolagens = [];
    ordemCalculo = [];
    totais = 0;
    totalFinal = 0;
  } else {
    console.log("Erro de sintaxe após ' '");
  }
}
function apagaEspaco(texto) {
  while (texto.indexOf(" ") !== -1) {
    texto = texto.replace(" ", "");
  }
  console.log("Mensagem com espaços retirados: " + texto);
  return texto;
}
function dadosLancados(texto) {
  dados = 0;
  while (texto.indexOf("d") !== -1) {
    texto = texto.replace("d", "");
    dados++;
  }
  console.log(dados + " letras 'd' encontradas. ");
}
function quantidadeOperadores(texto) {
  for (var i = 9; i >= 0; i--) {
    while (texto.indexOf(i.toString()) !== -1) {
      texto = texto.replace(i.toString(), "");
    }
  }
  while (texto.indexOf("d") !== -1) {
    texto = texto.replace("d", "");
  }
  console.log(texto.length + " operadores foram encontrados.");
  while (texto.length > 0) {
    var operador = texto.slice(0, 1);
    simbolos.push(operador);
    texto = texto.substring(1);
  }
  if (dados < simbolos.length) {
    dados = simbolos.length + 1;
  }
}
function numeroDeDados(texto) {
  if (texto.length > 0) {
    var dado = texto.indexOf("d");
    var numero;
    if (dado !== -1) {
      if (dado === 0) {
        quantidadeDados.push(1);
        texto = texto.substring(1);
        sufixoRolagem = texto;
        facesDoDado(sufixoRolagem);
      }
      if (dado > 0) {
        if (
          dado < texto.indexOf("+") ||
          (texto.indexOf("+") < 0 &&
            (dado < texto.indexOf("-") || texto.indexOf("-") < 0) &&
            (dado < texto.indexOf("/") || texto.indexOf("/") < 0) &&
            (dado < texto.indexOf("*") || texto.indexOf("*") < 0))
        ) {
          numero = parseInt(texto.slice(0, dado + 1));
          if (!isNaN(numero) && numero && numero > 0) {
            quantidadeDados.push(numero);
            texto = texto.substring(dado + 1);
            sufixoRolagem = texto;
            facesDoDado(sufixoRolagem);
          } else {
            console.log("Erro de sintaxe no número de dados");
          }
        }
      }
    }
  }
}
function facesDoDado(texto) {
  if (texto.length > 0) {
    var operador;
    var faces;
    if (
      texto.indexOf("/") === -1 &&
      texto.indexOf("*") === -1 &&
      texto.indexOf("+") === -1 &&
      texto.indexOf("-") === -1
    ) {
      if (ordemCalculo.length > 0) {
        ordemCalculo.push("d");
      }
      var faces = parseInt(texto);
      if (!isNaN(faces) && faces && faces > 0) {
        quantidadeFaces.push(faces);
        texto = texto.substring(texto.length);
        sufixoRolagem = texto;
        operadorMatematico(sufixoRolagem);
      } else {
        console.log("Erro de sintaxe após 'd'");
      }
    }
    if (
      texto.indexOf("/") !== -1 ||
      texto.indexOf("*") !== -1 ||
      texto.indexOf("+") !== -1 ||
      texto.indexOf("-") !== -1
    ) {
      if (
        texto.indexOf("/") === 0 ||
        texto.indexOf("*") === 0 ||
        texto.indexOf("+") === 0 ||
        texto.indexOf("-") === 0
      ) {
        console.log("Erro de sintaxe após 'd'");
      }
      operador = texto.indexOf("+");
      if (operador > 0) {
        if (
          (operador < texto.indexOf("-") || texto.indexOf("-") === -1) &&
          (operador < texto.indexOf("/") || texto.indexOf("/") === -1) &&
          (operador < texto.indexOf("*") || texto.indexOf("*") === -1)
        ) {
          faces = parseInt(texto.slice(0, operador + 1));
          if (!isNaN(faces) && faces && faces > 0) {
            quantidadeFaces.push(faces);
            texto = texto.substring(operador);
            sufixoRolagem = texto;
            operadorMatematico(sufixoRolagem);
            ordemCalculo.push("d");
          }
        }
      }
      operador = texto.indexOf("-");
      if (operador > 0) {
        if (
          (operador < texto.indexOf("+") || texto.indexOf("+") === -1) &&
          (operador < texto.indexOf("/") || texto.indexOf("/") === -1) &&
          (operador < texto.indexOf("*") || texto.indexOf("*") === -1)
        ) {
          faces = parseInt(texto.slice(0, operador + 1));
          if (!isNaN(faces) && faces && faces > 0) {
            quantidadeFaces.push(faces);
            texto = texto.substring(operador);
            sufixoRolagem = texto;
            operadorMatematico(sufixoRolagem);
            ordemCalculo.push("d");
          }
        }
      }
      operador = texto.indexOf("/");
      if (operador > 0) {
        if (
          (operador < texto.indexOf("-") || texto.indexOf("-") === -1) &&
          (operador < texto.indexOf("+") || texto.indexOf("+") === -1) &&
          (operador < texto.indexOf("*") || texto.indexOf("*") === -1)
        ) {
          faces = parseInt(texto.slice(0, operador + 1));
          if (!isNaN(faces) && faces && faces > 0) {
            quantidadeFaces.push(faces);
            texto = texto.substring(operador);
            sufixoRolagem = texto;
            operadorMatematico(sufixoRolagem);
            ordemCalculo.push("d");
          }
        }
      }
      operador = texto.indexOf("*");
      if (operador > 0) {
        if (
          (operador < texto.indexOf("-") || texto.indexOf("-") === -1) &&
          (operador < texto.indexOf("/") || texto.indexOf("/") === -1) &&
          (operador < texto.indexOf("+") || texto.indexOf("+") === -1)
        ) {
          faces = parseInt(texto.slice(0, operador + 1));
          if (!isNaN(faces) && faces && faces > 0) {
            quantidadeFaces.push(faces);
            texto = texto.substring(operador);
            sufixoRolagem = texto;
            operadorMatematico(sufixoRolagem);
            ordemCalculo.push("d");
          }
        }
      }
    }
  }
}
function fatoresDaRolagem(texto) {
  let operador;
  let fator;
  if (texto.length > 0) {
    if (
      texto.indexOf("d") === -1 &&
      texto.indexOf("/") === -1 &&
      texto.indexOf("*") === -1 &&
      texto.indexOf("+") === -1 &&
      texto.indexOf("-") === -1
    ) {
      fator = parseInt(texto);
      if (!isNaN(fator) && fator && fator > 0) {
        fatores.push(fator);
        texto = texto.substring(texto.length);
        sufixoRolagem = texto;
        operadorMatematico(sufixoRolagem);
        ordemCalculo.push("f");
      } else {
        console.log("Erro de sintaxe no fator final");
      }
    }
    if (
      texto.indexOf("d") === -1 &&
      (texto.indexOf("/") !== -1 ||
        texto.indexOf("*") !== -1 ||
        texto.indexOf("+") !== -1 ||
        texto.indexOf("-") !== -1)
    ) {
      console.log("tem símbolos e não tem mais dados");
    } else {
      operador = texto.indexOf("+");
      if (
        operador > 0 &&
        operador < texto.indexOf("d") &&
        (operador < texto.indexOf("-") || texto.indexOf("-") === -1) &&
        (operador < texto.indexOf("/") || texto.indexOf("/") === -1) &&
        (operador < texto.indexOf("*") || texto.indexOf("*") === -1)
      ) {
        fator = parseInt(texto.slice(0, operador + 1));
        if (!isNaN(fator) && fator && fator > 0) {
          fatores.push(fator);
          texto = texto.substring(operador);
          sufixoRolagem = texto;
          operadorMatematico(sufixoRolagem);
          ordemCalculo.push("f");
        } else {
          console.log("Erro de sintaxe no fator intermediário no operador '+'");
        }
      }
      operador = texto.indexOf("-");
      if (
        operador > 0 &&
        operador < texto.indexOf("d") &&
        (operador < texto.indexOf("+") || texto.indexOf("+") === -1) &&
        (operador < texto.indexOf("/") || texto.indexOf("/") === -1) &&
        (operador < texto.indexOf("*") || texto.indexOf("*") === -1)
      ) {
        fator = parseInt(texto.slice(0, operador + 1));
        if (!isNaN(fator) && fator && fator > 0) {
          fatores.push(fator);
          texto = texto.substring(operador);
          sufixoRolagem = texto;
          operadorMatematico(sufixoRolagem);
          ordemCalculo.push("f");
        } else {
          console.log("Erro de sintaxe no fator intermediário no operador '-'");
        }
      }
      operador = texto.indexOf("/");
      if (
        operador > 0 &&
        operador < texto.indexOf("d") &&
        (operador < texto.indexOf("-") || texto.indexOf("-") === -1) &&
        (operador < texto.indexOf("+") || texto.indexOf("+") === -1) &&
        (operador < texto.indexOf("*") || texto.indexOf("*") === -1)
      ) {
        fator = parseInt(texto.slice(0, operador + 1));
        if (!isNaN(fator) && fator && fator > 0) {
          fatores.push(fator);
          texto = texto.substring(operador);
          sufixoRolagem = texto;
          operadorMatematico(sufixoRolagem);
          ordemCalculo.push("f");
        } else {
          console.log("Erro de sintaxe no fator intermediário no operador '/'");
        }
      }
      operador = texto.indexOf("*");
      if (
        operador > 0 &&
        operador < texto.indexOf("d") &&
        (operador < texto.indexOf("-") || texto.indexOf("-") === -1) &&
        (operador < texto.indexOf("/") || texto.indexOf("/") === -1) &&
        (operador < texto.indexOf("+") || texto.indexOf("+") === -1)
      ) {
        fator = parseInt(texto.slice(0, operador + 1));
        if (!isNaN(fator) && fator && fator > 0) {
          fatores.push(fator);
          texto = texto.substring(operador);
          sufixoRolagem = texto;
          operadorMatematico(sufixoRolagem);
          ordemCalculo.push("f");
        } else {
          console.log("Erro de sintaxe no fator intermediário no operador '*'");
        }
      }
    }
  }
}
function operadorMatematico(texto) {
  if (texto.length > 0) {
    if (
      texto.startsWith("/") ||
      texto.startsWith("*") ||
      texto.startsWith("+") ||
      texto.startsWith("-")
    ) {
      var operador = texto.slice(0, 1);
      operadores.push(operador);
      texto = texto.substring(1);
      sufixoRolagem = texto;
    } else {
      console.log("Erro de sintaxe do operador");
    }
  }
}
function logDeRolagem(
  ordemCalculo,
  quantidadeDados,
  quantidadeFaces,
  operadores,
  fatores,
  rolagens,
  totaisRolagens
) {
  console.log(quantidadeDados);
  console.log("Quantidade de dados rolados foi guardada. " + sufixoRolagem);
  console.log(quantidadeFaces);
  console.log("Quantidade de faces dos dados foi guardada. " + sufixoRolagem);
  console.log(operadores);
  console.log("Operadores matemáticos foram guardados. " + sufixoRolagem);
  console.log(fatores);
  console.log("Fatores foram guardados. " + sufixoRolagem);
  console.log(rolagens);
  console.log("Rolagens foram guardadas. " + sufixoRolagem);
  console.log(totaisRolagens);
  console.log("Totais foram guardados. " + sufixoRolagem);
  console.log(ordemCalculo);
  console.log("Ordem de cálculo estabelecida.");
  console.log(totalFinal);
  console.log("Total final foi calculado. " + sufixoRolagem);
}
function rolagensDeDados(
  quantidadeDados,
  quantidadeFaces,
  operadores,
  fatores,
  rolagens,
  totaisRolagens
) {
  var rolagem = quantidadeDados.length;
  var nDados = 0;
  while (rolagem > 0) {
    for (var i = quantidadeDados[nDados]; i > 0; i--) {
      var resultado = Math.ceil(Math.random() * quantidadeFaces[nDados]);
      rolagens.push(resultado);
    }
    nDados++;
    rolagem--;
  }
  var total = quantidadeDados.length;
  nDados = 0;
  var resultado = 0;
  var nRolagem = 0;
  while (total > 0) {
    for (var i = quantidadeDados[nDados]; i > 0; i--) {
      resultado += rolagens[nRolagem];
      nRolagem++;
    }
    totaisRolagens.push(resultado);
    resultado = 0;
    nDados++;
    total--;
  }
  var oCalculo = ordemCalculo.slice();
  var tRolagens = totaisRolagens.slice();
  var op = operadores.slice();
  var fat = fatores.slice();
  console.log(oCalculo);
  console.log(tRolagens);
  console.log(op);
  console.log(fat);
  for (var i = op.length; i > 0; i--) {
    if (oCalculo[0] === "d" && oCalculo[1] === "f") {
      if (op[0] === "+") {
        resultado = tRolagens[0] + fat[0];
        totais += resultado;
        oCalculo.splice(0, 2, "d");
        tRolagens.splice(0, 1, totais);
        op.splice(0, 1);
        fat.splice(0, 1);
      }
      if (op[0] === "-") {
        resultado = tRolagens[0] - fat[0];
        totais += resultado;
        oCalculo.splice(0, 2, "d");
        tRolagens.splice(0, 1, totais);
        op.splice(0, 1);
        fat.splice(0, 1);
      }
      if (op[0] === "/") {
        resultado = tRolagens[0] / fat[0];
        totais += resultado;
        oCalculo.splice(0, 2, "d");
        tRolagens.splice(0, 1, totais);
        op.splice(0, 1);
        fat.splice(0, 1);
      }
      if (op[0] === "*") {
        resultado = tRolagens[0] * fat[0];
        totais += resultado;
        oCalculo.splice(0, 2, "d");
        tRolagens.splice(0, 1, totais);
        op.splice(0, 1);
        fat.splice(0, 1);
      }
    }
    if (oCalculo[0] === "d" && oCalculo[1] === "d") {
      if (op[0] === "+") {
        resultado = tRolagens[0] + tRolagens[1];
        totais += resultado;
        oCalculo.splice(0, 2, "d");
        tRolagens.splice(0, 2, totais);
        op.splice(0, 1);
      }
      if (op[0] === "-") {
        resultado = tRolagens[0] - tRolagens[1];
        totais += resultado;
        oCalculo.splice(0, 2, "d");
        tRolagens.splice(0, 2, totais);
        op.splice(0, 1);
      }
      if (op[0] === "/") {
        resultado = tRolagens[0] / tRolagens[1];
        totais += resultado;
        oCalculo.splice(0, 2, "d");
        tRolagens.splice(0, 2, totais);
        op.splice(0, 1);
      }
      if (op[0] === "*") {
        resultado = tRolagens[0] * tRolagens[1];
        totais += resultado;
        oCalculo.splice(0, 2, "d");
        tRolagens.splice(0, 2, totais);
        op.splice(0, 1);
      }
    }
  }
  if (ordemCalculo.length === 0) {
    totais = totaisRolagens.slice();
    totalFinal = totais.reduce(function (acumulador, valorAtual) {
      return acumulador + valorAtual;
    }, 0);
  }
  console.log(totais);
  totalFinal = totais;
}
/*
// bot de rolagem por reação

const painelSecreto = "Role seus dados";
const defineAtributo = "..atr";
const selecionaDado = "..dad";
const defineModificador = "..mod";
const atributosMeuPersonagem = "..amp";
const deletaAtributo = "..del";
let dadoDoJogo = [];
let canalDadoDoJogo = [];
let emojisAtributos = [];
let nomeAtributos = [];
let personagens = [];
let modificadores = [];
let ultimaMensagemRolagem = [];
bot.on("message", (msg) => {
  if (msg.content.startsWith(defineAtributo)) {
    let sufixo = msg.content.substring(defineAtributo.length);
    let nome = sufixo.substring(2);
    let emoji = sufixo.substr(0, 2);
    verificaCanaisELista(emojisAtributos, nomeAtributos, emoji, nome);
    console.log(emoji + "  " + nome);
  }
  if (msg.content === painelSecreto || msg.content === "🎲") {
    msg.channel.send(painelrolagem(msg));

  }
  const filter3 = (reaction, user) => {
    return (
      emojisAtributos.includes(reaction.emoji.name) && user.id !== msg.author.id
    );
  };
  msg
    .awaitReactions(filter3, { max: 1, time: 60 * 60 * 1000, errors: ["time"] })
    .then((collected) => {
      const reaction = collected.first();
      let atributo = 0;
      let ficha = [];
      let modificador = 0;
      let dado = "";
      for (let i = 0; i < emojisAtributos.length; i++) {
        if (reaction.emoji.name === emojisAtributos[i]) {
          console.log("reação detectada");
          atributo = i;
          console.log(reacao[1]);
          for (let i = 0; i < personagens.length; i++) {
            if (reacao[1] === personagens[i]) {
              console.log("Reagente detectado");
              ficha = modificadores[i];
              modificador = ficha[atributo];
              for (let i = 0; i < canalDadoDoJogo.length; i++) {
                if (msg.channel.id === canalDadoDoJogo[i]) {
                  console.log("Canal do dado do jogo detectado");
                  dado = dadoDoJogo[i];
                  if (dado !== undefined || dado !== null) {
                    console.log("Dado detectado");
                    sufixoRolagem = dado + "+" + modificador;
                    rolagemDeDadosEMensagem(msg);
                  }
                } else {
                  msg.channel.send("Dado do jogo ainda não foi definido.");
                }
              }
            }
          }
        }
      }
    })
    .catch(() => {});
  if (
    msg.content.startsWith("Dado do jogo: ") &&
    msg.author.id === jogadores[0]
  ) {
    for (let i = 0; i < emojisAtributos.length; i++) {
      msg.react(emojisAtributos[i]);
    }
  }
  if (msg.content.startsWith(selecionaDado)) {
    let sufixo = msg.content.substring(selecionaDado.length);
    verificaCanaisELista(canalDadoDoJogo, dadoDoJogo, msg.channel.id, sufixo);
    console.log(canalDadoDoJogo);
    console.log(dadoDoJogo);
  }
  if (msg.content.startsWith(defineModificador)) {
    let sufixo = msg.content.substring(defineModificador.length);
    let valor = parseInt(sufixo.substring(2));
    let emoji = sufixo.substr(0, 2);
    console.log(emoji + "  " + valor);
    listaModificador(personagens, modificadores, msg.author.id, valor, emoji);
    console.log(personagens);
    console.log(modificadores);
  }
  if (msg.content === atributosMeuPersonagem) {
    msg.channel.send(atributosPersonagem(msg));
  }
  if(msg.content.startsWith(deletaAtributo)) {
    let sufixo = msg.content.substring(deletaAtributo.length);
    let emoji = sufixo.substr(0, 2);
    for (let i = 0; i < emojisAtributos.length; i++) {
      if(emojisAtributos[i] === emoji) {
        emojisAtributos.splice(i,1);
        break
      }
    }
    console.log("Emoji  " + emoji + "  deletado");
  }
});
function painelrolagem(msg) {
  let legendaAtributos = "";
  for (let i = 0; i < emojisAtributos.length; i++) {
    legendaAtributos += emojisAtributos[i] + "   " + nomeAtributos[i] + "\n ";
  }
  let dadoAtual = "";
  for (let i = 0; i < dadoDoJogo.length; i++) {
    if (canalDadoDoJogo[i] === msg.channel.id) {
      dadoAtual = dadoDoJogo[i];
    }
  }
  return (
    "Dado do jogo: " +
    "` " +
    dadoAtual +
    " `" +
    "\n" +
    "Legenda: " +
    "\n" +
    legendaAtributos
  );
}
function atributosPersonagem(msg) {
  let beta = [];
  let personagem;
  for (let i = 0; i < personagens.length; i++) {
    if (msg.author.id === personagens[i]) {
      beta = modificadores[i];
      personagem = personagens[i];
    }
  }
  let legendaAtributos = "";
  for (let i = 0; i < emojisAtributos.length; i++) {
    legendaAtributos +=
      emojisAtributos[i] +
      "   " +
      nomeAtributos[i] +
      "   " +
      "` " +
      beta[i] +
      " `" +
      "\n ";
  }
  let dadoAtual = "";
  for (let i = 0; i < dadoDoJogo.length; i++) {
    if (canalDadoDoJogo[i] === msg.channel.id) {
      dadoAtual = dadoDoJogo[i];
    }
  }
  return "Atributos de " + "<@!" + personagem + ">" + "\n" + legendaAtributos;
}
function verificaCanaisELista(canais, lista, id, valor) {
  let posicao = 0;
  while (posicao <= canais.length) {
    if (canais.length === 0) {
      canais.push(id);
      lista.push(valor);
      console.log("Primeiro canal e lista armazenados.");
      break;
    }
    if (canais[posicao] === id) {
      console.log("Canal encontrado.");
      lista.splice(posicao, 1, valor);
      break;
    }
    if (canais[posicao] !== id) {
      posicao++;
      console.log("Canal não encontrado.");
      if (posicao === canais.length) {
        console.log("Nenhum canal da lista canais corresponde à pesquisa.");
        canais.push(id);
        lista.push(valor);
        console.log("Canal e lista armazenados.");
        break;
      }
    }
  }
}
function criaModificador(emoji, valor) {
  let modificador = [];
  for (let i = 0; i < emojisAtributos.length; i++) {
    if (emojisAtributos[i] === emoji) {
      modificador.push(valor);
    } else {
      modificador.push(0);
    }
  }
  return modificador;
}
function listaModificador(canais, lista, id, valor, emoji) {
  let posicao = 0;
  while (posicao <= canais.length) {
    if (canais.length === 0) {
      canais.push(id);
      lista.push(criaModificador(emoji, valor));
      console.log("Primeiro canal e lista armazenados.");
      break;
    }
    if (canais[posicao] === id) {
      console.log("Canal encontrado.");
      let alfa = lista[posicao];
      lista.splice(posicao, 1, []);
      verificaCanaisELista(emojisAtributos, alfa, emoji, valor);
      lista.splice(posicao, 1, alfa);
      break;
    }
    if (canais[posicao] !== id) {
      posicao++;
      console.log("Canal não encontrado.");
      if (posicao === canais.length) {
        console.log("Nenhum canal da lista canais corresponde à pesquisa.");
        canais.push(id);
        lista.push(criaModificador(emoji, valor));
        console.log("Canal e lista armazenados.");
        break;
      }
    }
  }
}
*/
