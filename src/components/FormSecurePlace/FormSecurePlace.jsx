import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { addPlace } from "api/places";
import Notification from "../Notification/Notification"
import {DivFormSecurePlace, 
    FormFormSecurePlace, 
    TextFieldFormSecurePlace,
    ButtonImagen,
    ButtonFormSecurePlace,
} from "./FormSecurePlaceStyles"


export default function FormSecurePlace(){
    const navigate=useNavigate()
    const [form, setForm]= useState({
        name:"",
        description:"",
        address_state:"",
        address_city:"",
        address_suburb:"",
        address_street:"",
        address_postCode:"",
        image:""
    });
    const[formError, setFormError]=useState({
        name:{error:false, message:""},
        description:{error:false, message:""},
        address_state:{error:false, message:""},
        address_city:{error:false, message:""},
        address_suburb:{error:false, message:""},
        address_street:{error:false, message:""},
        address_postCode:{error:false, message:""},
        image:{error:false, message:""},
    });

    const [loading, setLoading] = useState(false)

    const [notification, setNotification]=useState({
        open: false,
        message: "",
        severity:"",    
    })

    const handleComprove=()=>{
        const regExpPostCode=/^\d{5}$/
        const {
            name, 
            description,
            address_state, //eslint-disable-line
            address_city, //eslint-disable-line
            address_suburb, //eslint-disable-line
            address_street, //eslint-disable-line
            address_postCode, //eslint-disable-line
            image, 
        }=form
        const internalForm={...formError}
        let isCorrect=true

        if (name==="") {
            internalForm.name.error=true
            internalForm.name.message="Completa el campo Nombre"
            isCorrect=false
        }else{
            internalForm.name.error=false
            internalForm.name.message=""
        }
        if (description==="") {
            internalForm.description.error=true
            internalForm.description.message="Completa el campo Descripcion"
            isCorrect=false
        }else{
            internalForm.description.error=false
            internalForm.description.message=""
        }
        // eslint-disable-next-line
        if (address_state==="") {
            internalForm.address_state.error=true
            internalForm.address_state.message="Completa el campo Estado"
            isCorrect=false
        }else{
            internalForm.address_state.error=false
            internalForm.address_state.message=""
        }
        // eslint-disable-next-line
        if (address_city==="") {
            internalForm.address_city.error=true
            internalForm.address_city.message="Completa el campo Ciudad"
            isCorrect=false
        }else{
            internalForm.address_city.error=false
            internalForm.address_city.message=""
        }
        // eslint-disable-next-line
        if (address_suburb==="") {
            internalForm.address_suburb.error=true
            internalForm.address_suburb.message="Completa el campo Colonia"
            isCorrect=false
        }else{
            internalForm.address_suburb.error=false
            internalForm.address_suburb.message=""
        }
        // eslint-disable-next-line
        if (address_street==="") {
            internalForm.address_street.error=true
            internalForm.address_street.message="Completa el campo Calle"
            isCorrect=false
        }else{
            internalForm.address_street.error=false
            internalForm.address_street.message=""
        }
        // eslint-disable-next-line
        if (address_postCode==="") {
            internalForm.address_postCode.error=true
            internalForm.address_postCode.message="Completa el campo Codigo Postal"
            isCorrect=false
        }else if(!regExpPostCode.test(address_postCode)){
            internalForm.address_postCode.error=true
            internalForm.address_postCode.message="El codigo postal debe tener 5 digitos"
        }
        else{
            internalForm.address_postCode.error=false
            internalForm.address_postCode.message=""
        }
        // eslint-disable-next-line
        if (image==="") {
            internalForm.image.error=true
            internalForm.image.message="Completa el campo"
            isCorrect=false
        }else{
            internalForm.image.error=false
            internalForm.image.message=""
        }
        

        setFormError(internalForm)
        return isCorrect
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        const allFine=handleComprove()
        if (allFine) {
            console.log("Form",form);
            const response =await addPlace(form);
            if (response.status!==200) {
                setNotification({
                    open:true,
                    message: "Ocurrio un error",
                    severity: "Error",
                })
                setLoading(false);
                return
            }

            navigate("/places",{ replace: true
            })
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

        {notification.open&&<Notification notification={notification} setNotification={setNotification}/>}

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
                error={formError.address_state.error}
                helperText={formError.address_state.error&&formError.address_state.message}
                id={
                    formError.address_state.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Estado" 
                name="address_state"
                variant="outlined"
                onChange={handleChange}
            />

            <TextFieldFormSecurePlace
                error={formError.address_city.error}
                helperText={formError.address_city.error&&formError.address_city.message}
                id={
                    formError.address_city.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Ciudad" 
                name="address_city"
                variant="outlined"
                onChange={handleChange}
            />

            <TextFieldFormSecurePlace
                error={formError.address_suburb.error}
                helperText={formError.address_suburb.error&&formError.address_suburb.message}
                id={
                    formError.address_suburb.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Colonia" 
                name="address_suburb"
                variant="outlined"
                onChange={handleChange}
            />

            <TextFieldFormSecurePlace
                error={formError.address_street.error}
                helperText={formError.address_street.error&&formError.address_street.message}
                id={
                    formError.address_street.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Calle" 
                name="address_street"
                variant="outlined"
                onChange={handleChange}
            />

            <TextFieldFormSecurePlace
                error={formError.address_postCode.error}
                helperText={formError.address_postCode.error&&formError.address_postCode.message}
                id={
                    formError.address_postCode.error
                    ? "outlined-error-helper-text"
                    :"outlined-basic"
                }
                label="Número" 
                name="address_postCode"
                variant="outlined"
                onChange={handleChange}
            />
                 
       
            <ButtonImagen variant="contained" component="label" >
             <input name="image" type="file" multiple onChange={handleChange}/>
            </ButtonImagen>
          

            <ButtonFormSecurePlace 
                type="submit" 
                variant="contained" 
                color="primary"
                desabled={loading.toString()}
            >
             {loading?"Enviando datos...":"Enviar Datos"}
            </ButtonFormSecurePlace>

        </FormFormSecurePlace>
    </DivFormSecurePlace>
    );
}