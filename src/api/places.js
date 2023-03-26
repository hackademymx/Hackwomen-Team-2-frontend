import { API_URL } from "utils/const";
import axios from "axios";

export const getPlaces=async()=>{
    try {
        const url = `${API_URL}/places`;
        const {data, status} =await axios.get(url);
        return {data, status} ;
    } catch (error) {
        const {data, status} = error.response;
        return {data, status};
    }
}


export const addPlace=async(placeData)=>{
    
    try {
        const url = `${API_URL}/places`;
        const params={
            headers:{
                "Content-Type": "application/json"
            }
        }

        const body=JSON.stringify(placeData);
        const {data, status} = await axios.post(url,body,params);
        return {data, status}

    } catch (error) {
        const {data, status} = error.response;
        return {data, status};
    }
};