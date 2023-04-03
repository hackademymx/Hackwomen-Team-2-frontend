import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, SafeAreaView} from 'react-native';
import RegistroLugares from './Views/RegistroLugares';
import Login from './Views/LogIn';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import { faTemperature1 } from '@fortawesome/free-solid-svg-icons';



@@ -10,11 +15,21 @@ export default function App() {
  return (
    <ScrollView>
   <SafeAreaView style={styles.container}> 
      <RegistroLugares/>

  </SafeAreaView>
      <RegistroLugares />
    </SafeAreaView>
  </ScrollView>);
}
};

// constructor(props){
//     super(props);

//     this.state = { 
//       loading: false,
//       registrar:[],
//     url: "https://lugaressegurosv3.azurewebsites.net/"
//   }
// }


const styles = StyleSheet.create({
  container: {
 16  
Views/LogIn/index.jsx
Comment on this file
@@ -0,0 +1,16 @@
import {React} from 'react';
import {View,Text} from 'react-native';

export default function Login(props){
    console.log(props);
   return (
        <View>
            <Text>
                Esto es un login
            </Text>
        </View>
);
}



  239  
Views/RegistroLugares/index.jsx
Comment on this file
@@ -1,31 +1,65 @@
import React from 'react';
import React, {useState} from 'react';
import{Text, View, StyleSheet} from 'react-native';
import MyTextInput from '../../components/textInput';
import Button from '../../components/button';
import AñadirFoto from '../../components/buttonpic';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const RegistroLugares = () => {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [state, setState] = React.useState('');
    const [city, setCity] = React.useState('');
    const [province, setProvince] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [zipcode, setZipcode] = React.useState('');

    const [errorName, setErrorName] = React.useState("");
    const [errorDescription, setErrorDescription] = React.useState("");
    const [errorState, setErrorState] = React.useState("");
    const [errorCity, setErrorCity] = React.useState("");
    const [errorProvince, setErrorProvince] = React.useState("");
    const [errorStreet, setErrorStreet] = React.useState("");
    const [errorZipcode, setErrorZipcode] = React.useState("");

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [suburb, setSuburb] = useState('');
    const [street, setStreet] = useState('');
    const [postcode, setPostcode] = useState('');

    const [errorName, setErrorName] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorState, setErrorState] = useState("");
    const [errorCity, setErrorCity] = useState("");
    const [errorSuburb, setErrorSuburb] = useState("");
    const [errorStreet, setErrorStreet] = useState("");
    const [errorPostcode, setErrorPostcode] = useState("");

    const baseUrl = 'https://lugaressegurosv3.azurewebsites.net/places'
    const savePlace = async () => {
        try{
            const response = await axios({
                method:'post',
                url: baseUrl,
                data: {
                    name, 
                    description, 
                    state, 
                    city, 
                    suburb, 
                    street, 
                    postcode
                }
            });
            console.log(response.data);
            setName("")
            setDescription ("")
            setState ("")
            setCity ("")
            setSuburb ("") 
            setStreet ("")
            setPostcode ("") 

            alert("Registro exitoso :D ")
            return {response}

        }catch (error){
         alert("Ocurrio un error al hacer la peticion")
        console.log(error)
        }
    }

    const Registrar=() => {
        console.log(name);

        /*// Mensajes de Error /*/
        if (name=== ""){
@@ -60,12 +94,12 @@ const RegistroLugares = () => {



        if (province=== ""){
            return setErrorProvince("Completar el campo colonia");
        if (suburb=== ""){
            return setErrorSuburb("Completar el campo colonia");

        }

        setErrorProvince(" ")
        setErrorSuburb(" ")

        if (street=== ""){
            return setErrorStreet("Completar el campo calle");
@@ -74,13 +108,13 @@ const RegistroLugares = () => {

        setErrorStreet("")

        if (zipcode=== ""){
            return setErrorZipcode("Completar el campo codigo postal");
        if (postcode=== ""){
            return setErrorPostcode("Completar el campo codigo postal");


        }

        setErrorZipcode("")
        setErrorPostcode("")


        alert(`${name} ha sido registrado correctamente`);
@@ -90,6 +124,7 @@ const RegistroLugares = () => {
    };

    return (

        <View style={styles.container}> 

            <FontAwesomeIcon  style= {styles.plus} icon={faPlus} size={80} color="white"/><Text style={styles.title}>Añadir</Text>
@@ -105,52 +140,54 @@ const RegistroLugares = () => {

                    label="Descripcion" 
                    value= {description} 
                    setValue= {setDescription}
                    setValue=  {setDescription}
                    errorMsg={errorDescription}
                    />

                <MyTextInput 

                    label="Estado" 
                    value= {state}  
                    setValue={setState}
                    setValue= {setState}
                    errorMsg={errorState} />

                <MyTextInput 

                    label="Ciudad" 
                    value= {city} 
                    setValue={setCity}
                    setValue= {setCity}
                    errorMsg={errorCity}
                    />

                <MyTextInput 

                    label="Colonia" 
                    value= {province}
                    setValue={setProvince}
                    errorMsg={errorProvince}
                    value= {suburb}
                    setValue= {setSuburb}
                    errorMsg={errorSuburb}
                    />


                <MyTextInput 

                    label="Calle" 
                    value= {street} 
                    setValue={setStreet}
                    setValue= {setStreet}
                    errorMsg={errorStreet}
                    />

                <MyTextInput 

                    label="Codigo postal" 
                    value= {zipcode} 
                    setValue={setZipcode}
                    errorMsg={errorZipcode} 
                    />
                   label="Codigo postal" 
                   value= {postcode} 
                   setValue= {setPostcode}
                   errorMsg={errorPostcode} 
                   />


                <AñadirFoto onClick={Registrar}/>
                <Button text= "Registrar lugar"
                 onClick={Registrar}/>
                 onClick={savePlace}/>


        </View>
@@ -185,3 +222,131 @@ const styles = StyleSheet.create({
});

export default RegistroLugares;