import {stockJs} from "./producto.js";





  //simulo carga servidor
  export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(stockJs)
      }, 3000)
    })
  }