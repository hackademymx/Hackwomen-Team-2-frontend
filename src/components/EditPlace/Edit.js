import {
  Button,
  Form,
  Input,
} from 'antd';
import axios from 'axios'; 

import { useState } from 'react';

const App = (props) => {
  console.log("MI prop", props.place);
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [editedData, setEditedData] = useState(props.place);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;


    setEditedData({
      ...editedData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`https://lugaressegurosv3.azurewebsites.net/places/${props.place.id}`, editedData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
 
console.log("Edited", editedData.name);

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
        <Input name="name" value={editedData.name} onChange={handleInputChange}/>
      </Form.Item>

      <Form.Item
        name="descriptionLabel"
        label="Descripción"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} name="description" value={editedData.description} onChange={handleInputChange}/>
      </Form.Item>

      <Form.Item 
        name="stateLabel"
        label="Estado:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="state" value={editedData.state} onChange={handleInputChange}/>
      </Form.Item>

      <Form.Item 
        name="cityLabel"
        label="Ciudad:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="city" value={editedData.city} onChange={handleInputChange}/>
      </Form.Item>

      <Form.Item 
        name="suburbLabel"
        label="Colonia:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="suburb" value={editedData.suburb} onChange={handleInputChange}/>
      </Form.Item>

      <Form.Item 
        name="streetLabel"
        label="Calle:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input name="street" value={editedData.street} onChange={handleInputChange}/>
      </Form.Item>
      
      <Form.Item 
        name="postCodeLabel"
        label="Código Postal"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="postal_code" value={editedData.postal_code} onChange={handleInputChange}/>
      </Form.Item>

      <Form.Item 
        name="imageLabel"
        label="Imagen:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input type='file' name="image" value={editedData.image} onChange={handleInputChange}/>
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