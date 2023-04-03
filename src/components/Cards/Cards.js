import { HeartFilled } from '@ant-design/icons';
import {  Card, Rate, Dropdown, Space, message, Popconfirm  } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

// hay que usar useState para guardar los valores
const Data = () => {
  const [deleted, setDeleted] = React.useState('');
}

const { Meta } = Card;
    export const App = (id, name, statusDelete) => (
      <Space direction="vertical">
        <Dropdown.Button
          menu={{
            items: [
              {
                key: '1',
                label: <Link to={`/view-site/${id}`} >Ver lugar</Link>,
              },
              {
                key: '2',
                label: <Link to={`/edit/${id}`}>Editar</Link>,
              },
              {
                key: '3',
                label: <Popconfirm
                    title={`Estás a punto de eliminar: ${name}`}
                    description="¿Confirmas que quieres eliminar este lugar?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Confirmar"
                    cancelText="Cancelar"
                  >
                    <a href="#">Eliminar</a>
                  </Popconfirm>,
              }
              ],
            onClick: onMenuClick,
          }}
        >
          Opciones
        </Dropdown.Button>
      </Space>
    );
    const onMenuClick = (e) => {
      console.log(e);
    };
    const confirm = (e) => {
      console.log(e)
      message.success(`${e} ha sido eliminado exitosamente`);
    };
    const cancel = (e) => {
      console.log('cancelar')
      message.error('Tranqui, este lugar sigue existiendo en lugares seguros :)');
    };
  
const Cards = (props) => (
    <Card
        extra={
            App(props.content.id, props.content.name, props.content.statusDelete)
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
);
export default Cards;