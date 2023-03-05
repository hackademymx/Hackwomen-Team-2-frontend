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
        address_state:"",
        address_city:"",
        address_suburb:"",
        address_street:"",
        address_postCode:""

    });
    const[formError, setFormError]=useState({
        name:{error:false, message:""},
        description:{error:false, message:""},
        address_state:{error:false, message:""},
        address_city:{error:false, message:""},
        address_suburb:{error:false, message:""},
        address_street:{error:false, message:""},
        address_postCode:{error:false, message:""},
    });

    const [loading, setLoading] = useState(false)

    const handleComprove=()=>{
        const regExpZipCode = /^\d{5}$/;
        const {
            name,
            description,
            address_state, //eslint-disable-line
            address_city, //eslint-disable-line
            address_suburb, //eslint-disable-line
            address_street, //eslint-disable-line
            address_postCode, //eslint-disable-line
        }=form;
        const internalForm={...formError}
        let isCorrect=true

        if (name==="") {
            internalForm.name.error=true
            internalForm.name.message="Completa el campo"
            isCorrect=false
        }else{
            internalForm.name.error=false
            internalForm.name.message=""
        }

        if (description==="") {
            internalForm.description.error=true
            internalForm.description.message="Completa el campo"
            isCorrect=false
        }else{
            internalForm.description.error=false
            internalForm.description.message=""
        }
         // eslint-disable-next-line
        if (address_state=== "") { 
            internalForm.address_state.error=true
            internalForm.address_state.message="Completa el campo"
            isCorrect=false
        }else{
            internalForm.address_state.error=false
            internalForm.address_state.message=""
        }
         // eslint-disable-next-line
         if (address_city=== "") { 
            internalForm.address_city.error=true
            internalForm.address_city.message="Completa el campo"
            isCorrect=false
        }else{
            internalForm.address_state.error=false
            internalForm.address_state.message=""
        }
        // eslint-disable-next-line
        if (address_suburb==="") {
            internalForm.address_suburb.error=true
            internalForm.address_suburb.message="Completa el campo"
            isCorrect=false
        }else{
            internalForm.address_suburb.error=false
            internalForm.address_suburb.message=""
        }
        // eslint-disable-next-line
        if (address_street==="") {
            internalForm.address_street.error=true
            internalForm.address_street.message="Completa el campo"
            isCorrect=false
        }else{
            internalForm.address_street.error=false
            internalForm.address_street.message=""
        }
        // eslint-disable-next-line
        if (address_postCode==="") {
            internalForm.address_postCode.error=true
            internalForm.address_postCode.message="Completa el campo"
            isCorrect=false
        }else if(!regExpZipCode.test(address_postCode)){
            internalForm.address_postCode.error=true
            internalForm.address_postCode.message="Ingresa únicamente dígitos"
            isCorrect=false
        }
        else{
            internalForm.address_postCode.error=false
            internalForm.address_postCode.message=""
        }

        setFormError(internalForm)
        return isCorrect
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const allFine=handleComprove()
        if (allFine) {
            console.log("Enviando Datos");
        }
        setLoading(false)
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
                error={formError.name.error}
                helperText={formError.name.error&&formError.name.message}
                id={
                    formError.name.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Nombre" 
                name="name"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                error={formError.description.error}
                helperText={formError.description.error&&formError.description.message}
                id={
                    formError.description.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Descripción" 
                name="description"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                error={formError.state.error}
                helperText={formError.state.error&&formError.state.message}
                id={
                    formError.state.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Estado" 
                name="state"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                error={formError.street.error}
                helperText={formError.street.error&&formError.street.message}
                id={
                    formError.street.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Calle" 
                name="street"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                error={formError.number.error}
                helperText={formError.number.error&&formError.number.message}
                id={
                    formError.number.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Número" 
                name="number"
                variant="outlined"
                onChange={handleChange}
            />
            <TextFieldFormSecurePlace
                error={formError.suburb.error}
                helperText={formError.suburb.error&&formError.suburb.message}
                id={
                    formError.suburb.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
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