import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData();

let cards1=dom.lugarCards
dom.mostrarCards(datos)
dom.agregarClick(cards1,datos)
const filtroPalabras=dom.$('#filtroPalabras');
let filtroRegion =null;
let filtrado=null

filtroPalabras.addEventListener('keyup',(event)=>{
    let buscar =event.target.value;
    filtrado =data.filtroPalabras(datos,buscar);
    
    dom.mostrarCards(filtrado)
    cards1=dom.lugarCards
    dom.agregarClick(cards1,datos)
})

 
const region = [...dom.$("#region").children]
region.forEach(Element =>{
    Element.addEventListener('click',()=>{
    
        let continente=Element.textContent
        if(continente=='Filter by Region'){
            dom.mostrarCards(datos)
            cards1=dom.lugarCards
            dom.agregarClick(cards1,datos)    

        }else{
            filtroRegion=data.filtroDRegion(datos,continente);
        
        dom.mostrarCards(filtroRegion)
        cards1=dom.lugarCards
        dom.agregarClick(cards1,datos)
        }
        
        
})
})
  
    const button=dom.$('#backButton')
    
    button.addEventListener('click',()=>{
        dom.Global.className="mt-3"
        dom.mostrarpais.className="d-none"
        dom.verPais.innerHTML="";
    })
    const html=dom.$('html')
    const buttonSwitch =dom.$('#switch')
    buttonSwitch.addEventListener("click",()=>{
        html.dataset.bsTheme=html.dataset.bsTheme=="ligth"?"dark":"ligth";
    })
 
