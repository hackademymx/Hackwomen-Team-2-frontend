import React from 'react'
import { Col, Row } from 'antd';
import { Image, Rate } from 'antd';
import { HeartFilled } from '@ant-design/icons'

const App = (props) => (
    <>
    <Row>
      <Col span={9}> 
      <Image
    width={450}
    height={300}
    src={props.place.image}
  />
  </Col>
  <Col span={15}> 
    <h2 
    style={{
        position: 'relative',
        verticalAlign: 'top',
        lineHeight: '50%'
      }}
    >
    <font
        size={25}
        >
          {props.place.name}
  </font>
  </h2>
  <p
  style={{
    lineHeight: '15%',
    position: 'relative',
    color: 'grey'
  }}
  ><font size={3}>
    </font></p>
  <p
  style={{
    marginTop: '5%'
  }}
  ><font size={5}>
 {props.place.description}
    </font></p>
    <p>{props.place.Rate} </p>
  </Col>
    </Row>
  </>
);
export default App;