import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore';
import {db} from '../firebase/config';










export const generarOrden = async (form, cart, totalCart, setOrderid) => {
    const orden = {
        comprador: form,
        items: cart,
        total: totalCart(),
        fyh: Timestamp.fromDate(new Date()),
    }
  
      const batch = writeBatch(db)
      const productosRef = collection(db, "productos")
      const ordenRef = collection(db, "orden")
      const q = query(productosRef, where(documentId(), "in", cart.map((el)=>el.id)))
  
      const productos = await getDocs(q)
      const outOfStock = []
  
      //busco en el carrito item que coincidan con el id del doc y comparo el stock de los 2
      productos.docs.forEach((doc) => {
          const item = cart.find((el) => el.id === doc.id)
          if(doc.data().stock >= item.cantidad){
              batch.update(doc.ref, {stock: doc.data().stock - item.cantidad})
          }else{
              outOfStock.push(item)
          }
  })
  console.log(outOfStock.map((el) => el.nombre));
  let nombreOutOfStock = (outOfStock.map((el) => el.nombre)).toString()
  const enJson = JSON.stringify(nombreOutOfStock)
  console.log(enJson)
          if(outOfStock.length === 0){
              addDoc(ordenRef, orden)
              .then((doc)=> {
                  batch.commit()
                  setOrderid(doc.id)
              })
              
          }
          else{ 
              return(
              alert("Uno de sus productos no tiene stock = " + enJson))
          }
  }
  
