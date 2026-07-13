    const Carta = require("./Carta");

    class Baralho {
        
        cartas = [];
        
        constructor () {

            for (let c = 1; c < 55; c++) {
                this.cartas.push(new Carta(c));
            }   
            this.cartas = this.embaralhar(this.cartas);
        }

        embaralhar(array) {

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
                
        sacar_cartas(qtdCartas) {

            // Objeto resultado
            let resultado_saque = [];         

            // saca N cartas 
            for (let c = 0 ; c < qtdCartas; c ++) {
                resultado_saque.push(this.cartas.pop());
            }

            return resultado_saque;

        }

    }

    module.exports = Baralho;