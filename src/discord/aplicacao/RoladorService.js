const Dado = require("../../dominio/Dado");
const config = require("../../config");

class RoladorService {

    static rolar(expressao){

        if(!(/^\d*d\d+$/i.test(expressao))) {
            return null;
        }

        const comando = expressao.split(config.dado);

        let dados = comando[0]
        let faces = comando[1];

        if (dados === "")
            dados = "1";   
        
        let d = 0;
        let f = 0;

        try {
            d = Number(dados);
        } catch {
            throw "A quantidade de dados deve ser um inteiro positivo.\n";
        }

        try {
            f = Number(faces);
        } catch {
            throw "A quantidade de faces deve ser um inteiro positivo.\n";
        }

        if ((d > 0) && (f > 0))             
            return Dado.rolar(d, f);

    }

}

module.exports = RoladorService;
