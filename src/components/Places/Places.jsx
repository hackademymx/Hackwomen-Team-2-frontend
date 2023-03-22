import { useEffect, useState } from "react"
import { getPlaces } from "api/places"
import Notification from "components/Notification/Notification"
import PlacesCard from "./PlacesCard/PlacesCard"
import { DivPlaces } from "./PlacesStyle"

export default function Places(){
    const [places, setPlaces]=useState([]);

    const [notification, setNotification] = useState({
        open: false,
        message: "",
        severity: "",
      });

    const callGetPlaces=async()=>{
        const response =await getPlaces();
        if (response.status!==200) {
            setNotification({
                open: "true",
                message: "Error al consultar los datos",
                severity: "warning"
            })
            return
        }

        setPlaces(response.data)
    }
    useEffect(()=>{
        callGetPlaces();
    },[])


    return (
        <DivPlaces>
            {notification.open&&<Notification notification={notification} setNotification={setNotification} />}
            {places.map(place=>(
                <PlacesCard place={place} key={place.id}/>
            ))}
            
        </DivPlaces>
    );
}