class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log("Acelerou");
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete) {
        super(rodas);
        this.capacete = capacete;
    }
    empinar() {
        super.acelerar();
        console.log(`Empinou com ${this.rodas} rodas`);
    }
    acelerar () {
        console.log("Acelerou muitão");
    }
}

const honda = new Moto(2, true);
honda.empinar();
honda.acelerar();