import React from 'react'
import {Cards} from '../../../components'
import { Col, Row } from 'antd';


export default function SitesRender(props) {

    return (
        <>
        <Row gutter={16}>
            {
                props.places.map(place => (
                    <Col 
                        id={place.id} 
                        className="gutter-row"  
                        span={6}     
                    >
                        <Cards id={place.id}   content={place}/>
                    </Col>
                ))
            }
        </Row>
        </> 
  );
}

