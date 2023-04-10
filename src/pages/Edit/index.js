import { EditPlace } from "../../components"
import axios from 'axios'
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Spin } from 'antd';

const baseURL = 'https://lugaressegurosv3.azurewebsites.net/places'
function App() {
  let {id}=useParams();
  const [place, setPlace] = React.useState({});
  const getData = async (state) => {
    try {
      const response = await axios({
          method: 'get',
          url: `${baseURL}/${id}`
      });
      console.log("Get data con el id",response.data)
      setPlace(response.data);
 } catch (error) {
  console.log(error)
 }
  }
  React.useEffect(() => {
    getData()
  },[id] )
    return (
      <div className="App">
          {!place ? <Spin /> : <EditPlace place={place} /> }
      </div>
    );
  }
  
  export default App;