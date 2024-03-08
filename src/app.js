class Operations {
    suma (a,b){
        return a + b;
    }
    resta (a,b) {
    return a - b;
    }
    multiplicacion (a,b) {
        return a * b;
    }
    division (a,b) {
        return a / b;
    }
    porcentaje (a,b) {
        return a * b /100;
    }

    /*conversionMXN (a) {
        return  a * 16.87
    }*/
}

module.exports = new Operations();
