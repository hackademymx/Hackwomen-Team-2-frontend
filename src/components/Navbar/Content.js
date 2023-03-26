import React from 'react'
import { Layout} from 'antd';

const { Content } = Layout;
export default function ContentComponent(props)  {
    return (
            <Content
                style={{
                    padding: '50px',
                }}
            >
                <div>
                    {props.children}
                </div>
            </Content>
    );
};

