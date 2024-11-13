import { useEffect, useState } from "react"


export const ComponentUseEffect = () => {
    const [state, setState] = useState(false)

    useEffect(() => {
        console.log('Componente montado')
        return () => {
            console.log('Componente desmontado')
        }
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div>
            <p>{state ? "Verdadero" : "Falso"}</p>
            <button onClick={() => setState(!state)}>Cambiar estado</button>
        </div>
    )
}