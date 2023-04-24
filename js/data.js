const URL='https://restcountries.com/v3.1/all'

const getData= async () =>{
    const data =fetch('https://restcountries.com/v3.1/all')
    .then(response =>response.json())
    .then(json=>json)
    
    return data
}

const filtroPalabras =(arreglo,filtro)=>{
        let filtrado =arreglo.filter(Element => Element.name.common.toLowerCase().includes(filtro))
        return filtrado
    }
//sacar las regiones
const filtroDRegion=(arreglo,filtro)=>{
    let filtrado = arreglo.filter(Element=>Element.region===filtro)
    return filtrado
}



export default{
    getData,
    filtroPalabras,
    filtroDRegion
}