class Respostas {
    
    static formatar(msg,formatacao) {
        return formatacao + msg + formatacao;
    }
    
    static formatar2(msg, formatacao1, formatacao2) {
        return formatacao2 + formatacao1 + msg + formatacao1 + formatacao2;
    }

}

module.exports = Respostas;