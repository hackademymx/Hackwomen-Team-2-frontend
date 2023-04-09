import {
  Button,
  Form,
  Input,
} from 'antd';
import axios from 'axios';

import { useState, useEffect } from 'react';

const App = (id) => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [data, setData] = useState({});

  useEffect(() => {
    // Recuperar los datos de la API utilizando el ID de la URL
    axios.get(`https://lugaressegurosv3.azurewebsites.net/places/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar una solicitud PUT o PATCH para actualizar la API con los datos editados
    axios.put(`https://lugaressegurosv3.azurewebsites.net/places/${id}`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }


  return (
    <Form 
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >

      <h2>Editar Lugar Seguro</h2>

      <Form.Item 
        name="nameLabel"
        label="Nombre:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input name="name" onChange={handleChange} value={data.name}/>
      </Form.Item>

      <Form.Item
        name="descriptionLabel"
        label="Descripción"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} name="description" onChange={handleChange} value={data.description}/>
      </Form.Item>

      <Form.Item 
        name="stateLabel"
        label="Estado:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="state" onChange={handleChange} value={data.state}/>
      </Form.Item>

      <Form.Item 
        name="cityLabel"
        label="Ciudad:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="city" onChange={handleChange} value={data.city}/>
      </Form.Item>

      <Form.Item 
        name="suburbLabel"
        label="Colonia:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="suburb" onChange={handleChange} value={data.suburb}/>
      </Form.Item>

      <Form.Item 
        name="streetLabel"
        label="Calle:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input name="street" onChange={handleChange} value={data.street}/>
      </Form.Item>
      
      <Form.Item 
        name="postCodeLabel"
        label="Código Postal"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="postal_code" onChange={handleChange} value={data.postal_code}/>
      </Form.Item>

      <Form.Item 
        name="imageLabel"
        label="Imagen:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input type='file' name="image" onChange={handleChange} value={data.image}/>
      </Form.Item>

      <Form.Item 
          name="saveButton"
          label="">
          <Button onClick={handleSubmit}>Guardar</Button>
      </Form.Item>

    </Form>
  );
};
export default App;