import { styled } from "@mui/material/styles"
import { TextField, Button } from "@mui/material"

export const DivFormSecurePlace=styled("div")({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
});

export const FormFormSecurePlace=styled("form")({
    marginTop:"10vh",
    padding:"20px 0 30px 0",
    width:"450px",
    minHeight:"500px",
    boxShadow: "5px 8px 15px #aaa "
});

export const TextFieldFormSecurePlace=styled(TextField)({
    width: "90%",
    marginBottom:"15px",
});

export const ButtonFormSecurePlace=styled(Button)({
    width: "90%",
    marginTop:"10px",
})