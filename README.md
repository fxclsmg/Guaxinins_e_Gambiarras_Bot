# 🦝 Guaxinins & Gambiarras

Bot para Discord voltado a jogos de RPG de mesa.

O Guaxinins & Gambiarras é um bot desenvolvido em Node.js que oferece ferramentas para mesas de RPG diretamente no Discord, incluindo rolagem de dados, gerenciamento de baralhos, rolagem de notas musicais e suporte ao sistema de RPG **Guaxinins & Gambiarras** utilizado no podcast [Realidades Paralelas do Guaxinim](https://fxclsmg.github.io/Guaxinins_e_Gambiarras_Bot/).

## Funcionalidades

* 🎲 Rolagem de dados do sistema **Guaxinins & Gambiarras**
* 🃏 Gerenciamento de um baralho de 54 cartas por canal
* 🎼 Rolagem de dados das 12 notas musicais
* 🎲 Rolagem de dados genérica (ex.: `3d6`, `2d20+5`, `d12`)
* ✊ Pedra, Papel ou Tesoura
* 🦝 Painel interativo por reações

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/guaxinins-gambiarras.git
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env`:

```env
BOTTOKENGG=SEU_TOKEN_DO_DISCORD
IDBOTGG=ID_DO_BOT
```

Inicie o bot:

```bash
node index.js
```

---

# Comandos

## Sistema Guaxinins & Gambiarras

| Comando                      | Descrição                                           |
| ---------------------------- | --------------------------------------------------- |
| `.eu acredito no guaxaverso` | Exibe o painel de rolagem                           |
| 🦝                           | Também exibe o painel                               |
| `.atributo 2-5`              | Define o atributo do personagem                     |
| `.limpar atributo`           | Remove o atributo e os dados armazenados do usuário |
| `.ajuda`                     | Exibe a lista de comandos                           |

---

## Utilização do painel

Após abrir o painel, basta reagir com:

| Emoji | Ação                       |
| ----- | -------------------------- |
| ☝️    | Rola 1d6                   |
| ✌️    | Rola 2d6                   |
| 🤟    | Rola 3d6                   |
| 🦝    | Exibe as regras do sistema |

---

## Rolagem de dados

```
.r <expressão>
```

Exemplos:

```text
.r d20
.r 3d6
.r d12+2d4
.r 2d20-2
```

---

## Baralho

| Comando           | Descrição                                  |
| ----------------- | ------------------------------------------ |
| `.b <número>`     | Saca cartas do baralho                     |
| `.b embaralhar`   | Reinicia e embaralha o baralho do canal    |
| `.limpar baralho` | Remove o baralho armazenado para o canal   |
| `.limpar hora`    | Remove informações temporárias armazenadas |

Cada canal possui seu próprio baralho independente.

---

## Notas musicais

```
.n <quantidade>
```

Exemplo:

```text
.n 5
```

O bot sorteia notas dentre as sete notas naturais e os cinco acidentes.

---

## Pedra, Papel ou Tesoura

Envie uma das seguintes reações:

* ✊ Pedra
* ✋ Papel
* ✌️ Tesoura

O bot responderá com sua jogada e informará o vencedor.

---

# Armazenamento de dados

O bot mantém apenas os dados necessários para seu funcionamento, como:

* ID dos usuários
* ID dos canais
* atributos do sistema Guaxinins & Gambiarras
* estado dos baralhos
* informações temporárias para gerenciamento das partidas

Esses dados permanecem apenas pelo tempo necessário ao funcionamento das funcionalidades.

---

# Tecnologias

* Node.js
* Discord.js

---

# Licença

Este projeto está disponível para uso livre e geral.

---

Desenvolvido para auxiliar mesas de RPG no Discord e divulgar o sistema **Guaxinins & Gambiarras**.
