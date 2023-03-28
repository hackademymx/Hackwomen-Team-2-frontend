import { HeartFilled, EditOutlined } from '@ant-design/icons';
import {  Card, Rate, Button, Dropdown, Space  } from 'antd';
import React from 'react'
import { Link} from 'react-router-dom'

const { Meta } = Card;
const onMenuClick = (e) => {
    console.log('click', e);
  };
  const items = [
    {
      key: '1',
      label: <Link to='/VewSite/:id'>Ver lugar</Link>,
    },
    {
      key: '2',
      label: <Link to='/Edit/:id'>Editar</Link>,
    },
    {
      key: '3',
      label: <Link to='/Delete/:id'>Eliminar</Link>,
      }
    ];
  export const App = (e) => (
    <Space direction="vertical">
      <Dropdown.Button
        menu={{
          items,
          onClick: onMenuClick,
        }}
      >
        Opciones
      </Dropdown.Button>
    </Space>
  );

const Cards = (props) => (
    <Card
        extra={
            App()
        }
        style={{
            width: 300,
            margin: 10,
            height: 450,
        }}
        cover={
            <img
                style={{
                    width: 300,
                    height: 150,
                }}
                alt={props.content.place_photo}
                src={props.content.place_photo}
            />
        }

        actions={[

            <Rate
                style={{

                    color: '#DF2E38',
                }}
            allowHalf={true}
            defaultValue={props.content.place_rating} 
            character={<HeartFilled />} 
            />

        ]}
    >

    <Meta
        title={props.content.place_name}
        style={{
            height: 125,
        }}
        description={<>
        <addres>{props.content.place_addres}</addres><br></br>
        <p>{props.content.place_description}</p>
        </>}
    />
  </Card>
);
export default Cards;