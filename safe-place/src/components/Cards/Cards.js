import { HeartOutlined } from '@ant-design/icons';
import {  Card, Rate  } from 'antd';
const { Meta } = Card;
const Cards = (props) => (
    <Card
        style={{
            width: 300,
    
        }}
        cover={
            <img
                style={{
              
                    maxHeight: 150,
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
            defaultValue={parseInt(props.content.place_rating)} 
            character={<HeartOutlined />} 
            allowHalf />
        ]}
    >

    <Meta
      title={props.content.place_name}
      description={props.content.place_addres}
    />
  </Card>
);
export default Cards;