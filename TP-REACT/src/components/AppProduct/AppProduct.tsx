
import { useState } from "react"
import { FormProduct } from "./FormProduct"
import { Header } from "./Header/Header"
import { ListProduct } from "./ListProduct"

interface ItemProduct {
    nombre: string
    imagen: string
    precio: number
}

export const AppProduct = () => {

    const [products, setProducts] = useState<ItemProduct[]>([])
    console.log(products)

    const handleAddProduct = (product: ItemProduct) => {
        setProducts((prevProducts) => [...prevProducts, product])
    }

    return (
        <div>
            <Header />
            <h2 className="text-center">Formulario</h2>
            <FormProduct handleAddProduct={handleAddProduct} />
            <h2 className="text-center">Productos</h2>

            {products.length > 0 ? <ListProduct arrItems={products} /> : <p className="text-center">No hay productos cargados</p>}
        </div>
    )
}