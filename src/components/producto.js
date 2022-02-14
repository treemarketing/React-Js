import img1 from "./img/cono.jpg"
import img2 from "./img/balde.jpg"
import img3 from "./img/pollo-crispy.jpg"



export const stockJs = () => {
    return( 

[{
    id : 1,
    nombre : "Combo Cono",
    desc : "cono de papas fritas con una porción de pollo a elección",
    imgRoute : img1,
    precio : 390,
    stock : 10,
    categoria: "combo"
}, {
    id : 2,
    nombre : "Combo Balde",
    desc : " Medio balde de papas fritas más 2 porciones de pollo a elección",
    imgRoute : img2,
    precio : 890,
    stock : 10,
    categoria: "combo"
}, {
    id : 3,
    nombre : "Pollo Crispy",
    desc : " 6 piezas de pollo crujiente con cereales.",
    imgRoute : img3,
    precio : 450,
    stock : 10,
    categoria: "pollo"
}, {
    id : 4,
    nombre : "Finger Crispy",
    desc : "10 tiras de pollo crujiente con cereales.",
    imgRoute : 'https://via.placeholder.com/150',
    precio : 450,
    stock : 10,
    categoria: "pollo"
}, {
    id : 5,
    nombre : "Buffalos Wings",
    desc : "10 Piezas de Alitas de pollo con salsa picante.",
    imgRoute : 'https://via.placeholder.com/150',
    precio : 450, 
    stock : 10,
    categoria: "pollo"
}, {
    id : 6,
    nombre : "12 Empanadas",
    desc : "Docena de empanadas fritas.",
    imgRoute : 'https://via.placeholder.com/150',
    precio : 550,
    stock : 10,
    categoria: "empanadas"
}, {
    id : 7,
    nombre : "Miss. Papas",
    desc : "Porción de papas fritas.",
    imgRoute : 'https://via.placeholder.com/150',
    precio : 170,
    stock : 10,
    categoria: "papas"
}]
)
}  