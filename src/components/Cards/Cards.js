import { HeartFilled } from '@ant-design/icons';
import {  Card, Rate, Button, Dropdown, Space  } from 'antd';
import React from 'react'
import { Link} from 'react-router-dom'

const { Meta } = Card;
const onMenuClick = (e) => {
    console.log('click', e);
  };
    export const App = (id) => (
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
              }
              ],
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
);
export default Cards;