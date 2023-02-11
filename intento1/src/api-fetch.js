export const Publicar = () => {
    return <button onClick={() => {
        alert("fetcg . . .")
        fetch ("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(data => console.log(data))
    }}> traer informacion de la api</button>
}