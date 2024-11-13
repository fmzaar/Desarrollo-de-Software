import { ChangeEvent, useState } from "react";

interface IUseForm {
    [key: string]: string | number;
}

export const useForm = <T extends IUseForm>(initialValues: T) => {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'edad') {
            setValues({
                ...values,
                [name]: parseInt(value)
            });
        } else {
            setValues({
                ...values,
                [name]: value
            });
        }
    };

    const resetForms = () => {
        setValues(initialValues);
    };

    return { values, handleChange, resetForms };

}