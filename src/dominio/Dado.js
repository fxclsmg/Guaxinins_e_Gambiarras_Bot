class Dado {

    static rolar(dados, faces){

        // Objeto resultado
        let resultado_rolagem = {
            "soma":0,
            "parciais":[]            
        };

        let parcial = 0;

        // aleatório à escolha de N dados para N faces
        for (let dado = 1 ; dado <= dados; dado ++){
            parcial = Math.ceil(Math.random() * faces)
            resultado_rolagem.parciais.push(parcial);
            resultado_rolagem.soma += parcial;
        }

        return resultado_rolagem;

    }

}

module.exports = Dado;
