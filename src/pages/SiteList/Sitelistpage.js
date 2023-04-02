import React from 'react'
import { SitesRender } from './Components'
import axios from 'axios'
const data = require('../../services/data.json')

const baseURL = 'https://lugaressegurosv3.azurewebsites.net/places'
export default function SiteList() {
  const [places, setPlaces] = React.useState([]);
  const getData = async (state) => {
    try {
      const response = await axios({
          method: 'get',
          url: baseURL,
      });
      console.log(response)
      setPlaces(response.data);
 } catch (error) {
  console.log(error)
 }
  }
  React.useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <SitesRender places={places}/>
    </> 
  );
}
