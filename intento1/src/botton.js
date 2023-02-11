export function Botton({text, user = "persona"}){
    console.log(text, user)
    return<button>
        {text} - {user}
    </button>
}