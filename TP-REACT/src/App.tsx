import { AppProduct } from "./components/AppProduct/AppProduct"
import { ComponentUseEffect } from "./components/ComponentUseEffect"
import { Counter } from "./components/Counter"
import { FormsComponent } from "./components/FormsComponent"
import { PrimerComponente } from "./components/PrimerComponente/PrimerComponente"

export const App = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            {/* <PrimerComponente text={"Texto desde propiedades"} color="red" fontSize={5} />
            <Counter />
            <ComponentUseEffect /> */}
            {/*<FormsComponent */}
            <AppProduct />
        </div>
    )
}

