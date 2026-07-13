const Baralho = require("../../dominio/Baralho");
const Canal = require("../../dominio/Canal");
const config = require("../../config");
let canais = [];

class SacadorService {

    static localizarCanal(channelId) {

        try {

            let id = null;
            
            // Procura canal e recupera o baralho
            for (let i = 0; i < canais.length; i++) {
                if (canais[i].id === channelId) {
                    if (canais[i].baralho)
                        return i;
                }
            }
            
            //insere baralho se não encontrar nos canais
            canais.push(new Canal(channelId, new Baralho()));
            id = canais.length-1;
            
            return id;

        } catch {
        }
    }
    
    static sacar(channelId, expressao){
        let cartas = [];
        let resultado = [];
        let baralho = null;
        let qtdCartas = 0;

        try {

            let id = this.localizarCanal(channelId);
            
            baralho = canais[id].baralho;

            qtdCartas = Number(expressao);
            

            // valida se pode sacar
            if (baralho.cartas.length === 0) {
                return null;
            }

            if (qtdCartas > baralho.cartas.length)
                cartas = baralho.sacar_cartas(baralho.cartas.length);
            else
                cartas = baralho.sacar_cartas(qtdCartas);

            // atualiza o baralho
            canais[id].baralho = baralho;

            return cartas;

        } catch (e) {
            throw e;
        }

    }

    static embaralhar(channelId) {
        let id = this.localizarCanal(channelId);
        canais[id].baralho = new Baralho();
        return true;
    }

}

module.exports = SacadorService;
