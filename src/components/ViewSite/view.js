import React from 'react'
import { Col, Row } from 'antd';
import { Image } from 'antd';

const App = () => (
    <>
    <Row>
      <Col span={9}> 
      <Image
    width={450}
    height={300}
    src="https://www.eltiempo.com/files/image_640_428/uploads/2019/04/19/5cba5f5bb4807.jpeg"
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
    Monserrate
  </font>
  </h2>
  <p
  style={{
    lineHeight: '15%',
    position: 'relative',
    color: 'grey'
  }}
  ><font size={3}>
    Dirección del lugar aquí, claro que yes
    </font></p>
  <p
  style={{
    marginTop: '5%'
  }}
  ><font size={5}>
  Una descripción un poco larga para ver que tal se ve, a ver si así se pueden posicionar bien las cosas.
    </font></p>
  </Col>
    </Row>
  </>
);
export default App;