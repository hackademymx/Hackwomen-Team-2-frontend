import React,{useState} from "react";
import {DivFormSecurePlace, 
    FormFormSecurePlace, 
    TextFieldFormSecurePlace,
    ButtonFormSecurePlace,
} from "./FormSecurePlaceStyles"

export default function FormSecurePlace(){
    const [form, setForm]= useState({
        name:"",
        description:"",
        state:"",
        street:"",
        suburb:"",
        number:""
    });

    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(form);
    };

    const handleChange = (e) => {
        const nameInput=e.target.name;
        const valueInput=e.target.value;

        const internalForm=form;

        internalForm[nameInput]= valueInput;
    
        setForm(internalForm);
    };

    return (
    <DivFormSecurePlace>
        <FormFormSecurePlace onSubmit={handleSubmit}>
            <h1>Lugares Seguros</h1>
            <TextFieldFormSecurePlace
                id="outlined-basic" 
                label="Nombre" 
                name="name"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                id="outlined-basic" 
                label="Descripción" 
                name="description"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                id="outlined-basic" 
                label="Estado" 
                name="state"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                id="outlined-basic" 
                label="Calle" 
                name="street"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                id="outlined-basic" 
                label="Número" 
                name="number"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                id="outlined-basic" 
                label="Colonia" 
                name="suburb"
                variant="outlined"
                onChange={handleChange}
            />
            <ButtonFormSecurePlace 
                type="submit" 
                variant="contained" 
                color="primary"
                desabled={loading}
            >
             {loading?"Enviando datos...":"Enviar Datos"}
            </ButtonFormSecurePlace>
        </FormFormSecurePlace>
    </DivFormSecurePlace>
    );
}