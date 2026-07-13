const config = require("../config");

class Carta {
    numero = 0;
    naipe = "";
    valor = 0;
    valor_str = "";
    real = false;
    coringa = false;
    cor = "";

    constructor (numero) {
        
        // Coringas
        if (numero === 53) {
            this.numero = numero
            this.naipe = config.coringa;     
            this.valor = numero
            this.valor_str = "C";
            this.real = false;
            this.coringa = true;
            this.cor = "vermelha";  

        } else if (numero === 54) {
            this.numero = numero
            this.naipe = config.coringa;     
            this.valor = numero
            this.valor_str = "C";
            this.real = false;
            this.coringa = true;
            this.cor = "preta"; 

        // 52 cartas restantes
        } else {
            // numero e valor
            this.numero = numero;
            this.valor = (numero)%13 > 0 ? (numero)%13 : 13;
            this.valor_str = String(this.valor);
            
            // Familia real
            switch (this.valor) {
                case 11:
                    this.valor_str = "J";
                    this.real = true;
                    break;
                case 12:
                    this.valor_str = "Q";
                    this.real = true;
                    break;
                case 13:
                    this.valor_str = "K";
                    this.real = true;
                    break;
            }
        
            // naipe e cor
            if (this.numero >= 0 && this.numero < 14) {
                this.cor = "preta"; 
                this.naipe = config.naipe_paus; 
            }

            if (this.numero >= 14 && this.numero < 27) {
                this.cor = "vermelha";
                this.naipe = config.naipe_ouros; 
            }
            
            if (this.numero >= 27 && this.numero < 40) {
                this.cor = "preta";
                this.naipe = config.naipe_espadas; 
            }
            
            if (this.numero >= 40 && this.numero < 53) {
                this.cor = "vermelha";  
                this.naipe = config.naipe_copas;                     
            }             
        }
    }
}

module.exports = Carta;
