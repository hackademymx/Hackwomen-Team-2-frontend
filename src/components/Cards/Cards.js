import { HeartFilled, EditOutlined } from '@ant-design/icons';
import {  Card, Rate  } from 'antd';
import ReactNode from 'react'
const { Meta } = Card;
const Cards = (props) => (
    <Card
        style={{
            width: 300,
            margin: 10,
            height: 380,
        }}
        cover={
            <img
                style={{

                    height: 150,
                }}
                alt={props.content.place_photo}
                src={props.content.place_photo}
            />
        }

        actions={[

            <Rate key="rate"
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