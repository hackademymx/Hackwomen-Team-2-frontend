import React from 'react'
import {Cards} from '../../../components'
import { Col, Row } from 'antd';


export default function SitesRender(props) {
console.log(props)
    return (
        <>
        <Row gutter={[6, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {
                props.places.map(place => (
                    <Col 
                        id={place.id} 
                        className="gutter-row"      
                    >
                        <Cards id={place.id} 
                        content={place}/>
                    </Col>
                ))
            }
        </Row>
        </> 
  );
}

