import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
} from 'antd';
import axios from 'axios'; 
import { useEffect } from "react";



const App = (props) => {
  
  const [form] = Form.useForm();
  const place=props.place
  const [fields, setFields] = useState([
    
]);

React.useEffect(() => {
  setFields([
    {
      name: ['name'],
      value:`${place.name}`
    },
    {
      name: ['description'],
      value:`${place.description}`
    }

  ])
})
  
const editPlace =async (data)=>{
console.log(data);
axios.put(`https://lugaressegurosv3.azurewebsites.net/places/${props.place.id}`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
}
  
  return (
    <Form 
     name="form"
     form={form}
      fields={fields}    
      onFieldsChange={(_, allFields) => {
        setFields(allFields);
      }}  
      onFinish={editPlace}
      abelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >

      <h2>{props.place.name}</h2>

      <Form.Item 
        name="name"
        label="Nombre:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="description"
        label="Descripcion:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="state"
        label="Estado:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="city"
        label="Ciudad:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="suburb"
        label="Colonia:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="street"
        label="Calle:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="postal_code"
        label="Codigo Postal:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name="image"
        label="Image:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
            Editar
        </Button>
      </Form.Item>

    </Form>
  );
};
export default App;