const resultado = document.getElementById("resultado");
const boton = document.getElementById("mandar");
const calculadora = "http://localhost:4000/calcular";


function hacerPeticion(){
    const formulario = document.getElementById("formulario");
    fetch(calculadora,{
        method: 'post',
        body: new FormData(formulario)
    })
    .then(resultado =>{
        return resultado.json();
    }).
    then(json => {
        const output = document.getElementById("result");
        output.innerHTML = `  ${json.precio}`;
    })
    .catch(error => console.log(error));
}






boton.addEventListener("click", (e)=>{
    hacerPeticion();
})
