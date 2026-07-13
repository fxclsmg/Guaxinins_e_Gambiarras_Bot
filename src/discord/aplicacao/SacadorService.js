const Baralho = require("../../dominio/Baralho");
const config = require("../../config");

class SacadorService {

    static sacar(expressao){
        let cartas = [];
        let resultado = [];
        let baralho = null;
        let qtdCartas = 0;

        try {

            qtdCartas = Number(expressao);
            baralho = new Baralho();

            // valida se pode sacar
            if (qtdCartas > baralho.cartas.length)
                throw "Valor muito alto. Valor atual de cartas é " + String(baralho.cartas.length);

            cartas = baralho.sacar_cartas(qtdCartas);

            // formata resultado
            for (let i = 0; i < cartas.length; i++) {
                resultado.push(cartas[i].valor_str +  cartas[i].naipe);
            }

            return resultado;

        } catch {
        }

    }

}

module.exports = SacadorService;
