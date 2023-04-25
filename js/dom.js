// creador de etiquetas
const newEl=etiqueta=>document.createElement(etiqueta)
//selecciona una aetiqueta del dom
const $=selector =>document.querySelector(selector)
//Selecciona donde iran las cards
const lugarCards=$('#cards');
//crea una nueva card
const newCard= info =>{
    const div =newEl('div');
    div.className='card mb-3 col p-0 ';
    div.id=info.name.common
    div.innerHTML=`
    <div clas="imagen">
    <img src="${info.flags.svg}" class="card-img-top" alt="${info.flags.png}">
     </div>
    
          <div class="card-body">
            <h3 class="card-text">${info.name.common}:</h3>
            <p class="card-text">population: ${info.population}</p>
            <p class="card-text">Region: ${info.region}</p>
            <p class="card-text">Capital: ${info.capital}</p>
          </div>`

    return div

}
//muestra las cards en el dom 
const mostrarCards =(arreglo)=>{
    lugarCards.innerHTML="";
    arreglo.forEach(element => {
        const card = newCard(element)
        lugarCards.appendChild( card);
    });
}
const crearPais =(pais)=>{

    const  section = newEl('section')
    section.className='mt-3 row'
    let nativeName= Object.keys(pais.name.nativeName)
    nativeName=nativeName[0]
    let currencies=Object.keys(pais.currencies)
    currencies=currencies[0]
    let languages=Object.keys(pais.languages)
    let textoLanguages="";
    languages.forEach(language=>{
        textoLanguages=`${textoLanguages} ${pais.languages[language]}, `
    })
    let bordersCountries=pais.borders
    console.log(bordersCountries)
    let textFrontera="";
    if(bordersCountries != undefined){
        bordersCountries.forEach(element=>{
            textFrontera=`${textFrontera} <span>${element}</span>`
        })
    }
    
    console.log(textFrontera)
    section.innerHTML=`
    <div class="col text-center mb-5 col-md-6 ">
      <img class="img-fluid px-3" src="${pais.flags.svg}" alt="${pais.flags.png}">
    </div>
    <div class="col-12 col-md-6 row">
      <div class=" col-12 col-md-6 px-3">
        <h3 class="mb-3">${pais.name.common}</h3>
        <div class="">
          <p class="p-0">Native name: ${pais.name.nativeName[nativeName].official}</p>
          <p class="p-0"> Population: ${pais.population}</p>
          <p class="p-0">Region: ${pais.region}</p>
          <p class="p-0">Sub Region: ${pais.subregion}</p>
          <p class="p-0">Capital: ${pais.capital}</p>
        </div>
      </div>
      
      <div class="col-12 col-md-6 mb-4 mt-5 px-3"> 
        <p>Top level Domain: ${pais.tld}</p>
        <p>Currencies: ${pais.currencies[currencies].name}</p>
        <p>Languages: ${textoLanguages}</p>
      </div>
      <div>
        <span class="px-3 col-12">Border Countries:</span>${textFrontera}
      </div>
    </div>`;
    return section
    
    }
    const Global=$('#global')
    const mostrarpais=$('#mostrarpais')
    const verPais=$('#Pais')
    const agregarClick =(seleccionador,datos)=>{
      let  presentarUna=[...seleccionador.children]
        presentarUna.forEach((Element,index)=>{
            Element.addEventListener('click',()=>{
                Global.className='d-none'
                mostrarpais.className=''
                let found= datos.find(element=>element.name.common==Element.id)
                console.log(found)
                const CrearPais = crearPais(found)
                verPais.appendChild(CrearPais)
        
            })
        })


 
/*
 let presentarUna =d

 */
}
export default{
    $,
    mostrarCards,
    lugarCards,
    crearPais,
    agregarClick,
    Global,
    verPais,
    mostrarpais
}