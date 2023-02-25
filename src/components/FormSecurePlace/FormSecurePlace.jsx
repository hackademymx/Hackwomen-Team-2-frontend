import React from "react";
import {DivFormSecurePlace, FormFormSecurePlace, TextFieldFormSecurePlace} from "./FormSecurePlaceStyles"

export default function FormSecurePlace(){
    return (
    <DivFormSecurePlace>
        <FormFormSecurePlace>
            <TextFieldFormSecurePlace
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined"
            />
        </FormFormSecurePlace>
    </DivFormSecurePlace>
    );
}