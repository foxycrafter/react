
export function Click() {
    return <button onClick={function (){
        alert("boton funcionando")
    }}>boton con evento</button>
}
const handleChange = (inf) =>{
    console.log(inf.target.value)
    //importante Captura de datos por teclado a consola de js
}
export function Teclado(){
    return <input onChange={handleChange}/>
    
}