export function Console({ title, name = "Usuario"}) {
    console.log(title, name)
    return <h1>{title}, dice {name}</h1>
}

export function Showstats(props){
    console.log(props)
    return <div>
        <h1>{props.name}</h1>
        <h2>{props.lastn}</h2>
        <p>{props.live ? "vivo" : "muerto"}</p>
        
    </div>
}
//nueva forma de porner if else (condicion)?(verdadero):(falso)
//props (padre) .{variable} (hijo)
//condicionar para def en la funcion se le pone el statement