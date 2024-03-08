const expect = require ('chai').expect;
const archivoValidator = require('../src/app');

//Descrive el grupo de pruevas

describe('sum fuction', () => {
    //Define la primera prueva
    it('El resultado de la suma debe ser => 8', () => {
        //Invocar la funcion suma y verificar el resultado utilizando chai
        const result = archivoValidator.suma(4,4);
        expect(result).to.equal(8);
    })
})

//Descrive el grupo de pruevas

describe('res fuction', () => {
    //Define la segunda prueva
    it('El resultado de la resta debe ser => 2', () => {
        //Invocar la funcion resta y verificar el resultado utilizando chai
        const result = archivoValidator.resta(6,4);
        expect(result).to.equal(2);
    })
})

//Descrive el grupo de pruevas

describe('mult fuction', () => {
    //Define la tercera prueva
    it('El resultado de la multiplucacion debe ser => 40', () => {
        //Invocar la funcion multiplicacion y verificar el resultado utilizando chai
        const result = archivoValidator.multiplicacion(5,8);
        expect(result).to.equal(40);
    })
})

//Descrive el grupo de pruevas

describe('Div fuction', () => {
    //Define la cuarta prueva
    it('El resultado de la divicion debe ser => 2', () => {
        //Invocar la funcion divicion y verificar el resultado utilizando chai
        const result = archivoValidator.division(8,4);
        expect(result).to.equal(2);
    })
})

describe('Pors fuction', () => {
    //Define la quinta prueva
    it('El resultado del porcentaje debe ser => 750', () => {
        //Invocar la funcion porcentaje y verificar el resultado utilizando chai
        const result = archivoValidator.porcentaje(1500,50);
        expect(result).to.equal(750);
    })
})

/*describe('MXN fuction', () => {
    //Define la quinta prueva
    it('El resultado del porcentaje debe ser => 67.48', () => {
        //Invocar la funcion porcentaje y verificar el resultado utilizando chai
        const result = archivoValidator.conversionMXN(4);
        expect(result).to.equal(67.48);
    })
})*/
