import React from 'react'
import { Layout, Menu } from 'antd';
import { Link} from 'react-router-dom'
import { HomeOutlined,} from '@ant-design/icons'

const { Header} = Layout;
export default function HeadersComponent(props)  {
    const routes = [
        {
            key: 1,
            label: <Link to='/'><HomeOutlined/></Link>,
        },
        {
            key: 2,
            label: <Link to='/sites'>Sitios</Link>,
        },
        {
            key: 3,
            label: <Link to='/create'>Create <HomeOutlined/></Link>,
        }
    ]
    return (
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal" 
                    items={routes}
                />
            </Header>
    );
};

