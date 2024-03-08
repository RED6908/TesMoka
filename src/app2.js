/*class conversor {
    constructor(){
        this.CambioActual = {
            USD: {
                MXN: 16.87,
                EURO: 0.92
            },
            
            EURO: {
                MXN: 16.87,
                EURO: 0.92
            },

            MXN: {
                MXN: 16.87,
                EURO: 0.92
            }
        };

    }
    conversionMXN(monto,tipoCambio){
        return this.conversion(monto,tipoCambio,'MXN')
    }

    conversion (monto,tipoCambio){
        if (!this.CambioActual[tipoCambio] || !this.CambioActual[tipoCambio][conversor])
        {
            throw new Error ('No se puede realizar la conversion');
        }
       const CambioActual = this.CambioActual[tipoCambio][this.conversor]
       return monto * CambioActual;
    }

    
}*/

class Conversion{
  // Dollars and Euros to Mexican Pesos.
  convertDollarsToPesos(dollars) {
      return dollars * 16.87;
    }
  
   convertEurosToPesos(euros) {
      return euros * 18.40;
    }
  
  //Dollars and Mexican Pesos to Euros.
  convertDollarsToEuros(dollars) {
      return dollars * 0.92;
    }
  
  convertPesosToEuros(pesos) {
      return pesos * 0.054;
    }
    
    //Euros and Mexican Pesos to Dollars.
    convertEurosToDollars(euros) {
      return euros * 1.09;
    }
  
  convertPesosToDollars(pesos) {
      return pesos * 0.059;
    }  
  }
  
  module.exports = new Conversion () ;