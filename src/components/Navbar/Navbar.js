import React from 'react'
import { Layout } from 'antd';
import HeadersComponent from './Header'
import ContentComponent from './Content'
export default function Navbar(props)  {

    return (
        <Layout className="layout">
            <HeadersComponent/>
            <ContentComponent children={props.children}/>
        </Layout>
    );
};

