import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormsComponent = () => {
    const { values, handleChange, resetForms } = useForm({
        email: '',
        nombre: '',
        edad: 0
    });

    const { email, nombre, edad } = values;

    const handleSubmitForm = () => {
        console.log(values);
    }
    const handleResetForm = () => {
        resetForms();
    }

    return (
        <>
            <div>
                <h2>Formulario</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", gap: "2vh" }}>
                <input value={email}
                    name="email" onChange={handleChange}
                    type="email" placeholder="Correo electrónico" />
                <input value={nombre} name="nombre" onChange={handleChange} type="text" placeholder="Nombre" />
                <input value={edad} name="edad" onChange={handleChange} type="number" placeholder="Edad" />
            </div>
            <div>
                <button onClick={handleSubmitForm}>Enviar</button>
                <button onClick={handleResetForm}>Borrar</button>
            </div>
        </>
    );
};