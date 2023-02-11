import './css.css'
export function Card(bool){
    console.log(bool)
    return <div className='Card'>
        <h1>hola</h1>
        <h2>buenas</h2>
        <p>linea de texto</p>
        
        <span>
            <p className={bool ? "bg-true" : "bg-false"}>
                {bool ? "verdadero": "falso"}
            </p>
        </span>
    </div>
}