import { HeartFilled } from '@ant-design/icons';
import { Card, Rate, Dropdown, Button, Modal } from 'antd';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const { Meta } = Card;

const Cards = (props) => {
  const [modal2Open, setModal2Open] = useState(false);
  let navigate = useNavigate()

  const deleteItem = async (data) => {
    try {
      console.log(data)

    const response = await axios.delete(`https://lugaressegurosv3.azurewebsites.net/places/${data.id}`, data)
    console.log(response)
    setModal2Open(false)
    navigate(0)
    } catch (error) {
      console.log(error)
    }
  }

  const App = (id) => (
    <Dropdown.Button
      menu={{
        items: [
          {
            key: '1',
            label: <Button type="transparent"><Link to={`/view-site/${id}`} >Ver lugar</Link></Button>,
          },
          {
            key: '2',
            label: <Button type="transparent"><Link to={`/edit/${id}`}>Editar</Link></Button>,
          },
          {
            key: '3',
            label: <Button type="transparent" onClick={() => setModal2Open(true)}>
            Eliminar lugar
          </Button>
          }
          ]
      }}
    >Opciones</Dropdown.Button>
);
  return (
    <>
      <Card
          extra={
              App(props.content.id)
          }
          style={{
              width: 300,
              marginTop: 1,
              marginLeft: 7,
              height: 450,
          }}
          cover={
              <img
                  style={{
                      width: 300,
                      height: 150,
                  }}
                  alt={props.content.image}
                  src={props.content.image}
              />
          }
  
          actions={[
              <Rate
                  style={{
                    color: '#DF2E38',          
                  }}
              allowHalf={true}
              defaultValue={props.content.likes.length} 
              character={<HeartFilled />} 
              /> 
          ]}
      >
  
      <Meta
          title={props.content.name}
          style={{
              height: 125,
              lineHeight: 1
          }}
          description={<>
          <address>{`${props.content.address.street}, ${props.content.address.suburb}, ${props.content.address.city}, ${props.content.address.state}, ${props.content.address.postal_code}`}</address><br></br>
          <p>{props.content.description}</p>
          </>}
      />
    </Card>
    <Modal
          title={<center><h1 style={{
            color: '#DF2E38',
            fontSize: 25,
            lineHeight: 1
        }}>{`¡CUIDADO!`}<br></br>{`Estás a punto de eliminar este lugar:`}</h1></center>}
          centered
          open={modal2Open}
          onOk={() => deleteItem(props.content)}
          onCancel={() => setModal2Open(false)}
        >
        <center><img
          style={{
              width: 300,
              height: 150,
          }}
          alt={props.content.image}
          src={props.content.image}
        /></center>
        
          <center><h1
            style={{
            lineHeight: 0,
            fontSize: 19
            }}
          >{props.content.name}</h1></center>
          <center><p>{`${props.content.address.street}, ${props.content.address.suburb}, ${props.content.address.city}, ${props.content.address.state}, ${props.content.address.postal_code}`}</p></center>
          <center><p>{props.content.description}</p></center> 
          <center><h1 style={{
            color: '#C190C6',
            fontSize: 23,
          }} >Para eliminarlo haz click en "OK"</h1></center>
        </Modal>
    </>
  );
} 
export default Cards;