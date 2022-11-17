

export function Fruits({name}){
    return(
        <h1>{name}</h1>
    )
}

export function ButtonFilter({onClick}){
    return(
        <button onClick={onClick}>Frutas Vermelhas</button>
    )
}

export function TotalPrice({total}){
    return(
        <p>{total}</p>
    )
}