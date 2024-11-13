import { useState } from "react";


export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const increment = () => setCounter(counter + 1);
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };
    return (
        <div>
            <h2>Valor del contador: {counter}</h2>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement} >Decrementar</button>
        </div>
    )
}