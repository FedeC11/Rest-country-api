import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData();

dom.mostrarCards(datos)

const filtroPalabras=dom.$('#filtroPalabras');
let filtroRegion =null;
let filtrado=null
let active =false
let cards1=null
let cards2=null
filtroPalabras.addEventListener('keyup',(event)=>{
    let buscar =event.target.value;
    filtrado =data.filtroPalabras(datos,buscar);
    active=true
    dom.mostrarCards(filtrado)
    cards1=dom.lugarCards
    dom.agregarClick(cards1,datos)
})

 
const region = [...dom.$("#region").children]
console.log(region)
region.forEach(Element =>{
    console.log(Element)
    Element.addEventListener('click',()=>{
        console.log('entre')
        let continente=Element.textContent
        if(continente=='Filter by Region'){
            dom.mostrarCards(datos)
            cards1=dom.lugarCards
            dom.agregarClick(cards1,datos)    

        }else{
            filtroRegion=data.filtroDRegion(datos,continente);
        console.log(filtroRegion)
        active=true
        dom.mostrarCards(filtroRegion)
        cards1=dom.lugarCards
        dom.agregarClick(cards1,datos)
        }
        
        
})
})
  
    const button=dom.$('#backButton')
    console.log(button)
    button.addEventListener('click',()=>{
        dom.Global.className="mt-3"
        dom.mostrarpais.className="d-none"
        dom.verPais.innerHTML="";
    })
 
