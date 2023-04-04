import axios from 'axios';
import React from 'react';

const baseURL = 'https://lugaressegurosv3.azurewebsites.net/places'

export default function places(){
    const [places, setPlaces] = React.useState(null);

    React.useEffect( async () => {
       try {
            const response = await axios({
                method: 'get',
                url: baseURL,
            });
            setPlaces(response.data);
       } catch (error) {
        console.log(error)
       }
    })
}