import {
  Button,
  Form,
  Input,
} from 'antd';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'

import { useState } from 'react';

const initialForm = {
    name: "",
    description: "",
    state: "",
    city: "",
    suburb: "",
    street: "",
    postal_code: "",
    image: "",
}
const App = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [form, setForm] = useState(initialForm);

  let navigate = useNavigate()
  let statusCode = ''
  const createData=async (placedata)=>{
    try {
      const url = `https://lugaressegurosv3.azurewebsites.net/places`;
      const params={
          headers:{
              "Content-Type": "application/json"
          }
      }

      const body=JSON.stringify(placedata);
      const {data, status} = await axios.post(url,body,params);
      console.log("MI DATA", data, status);
      statusCode = '200'
      return {data, status, statusCode}

  } catch (error) {
      const {data, status} = error.response;
      statusCode = '400'
      return {data, status, statusCode};
  }
  }

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
  };

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Entrando al handle submit", form);
    if (!form.name || !form.description || !form.state || !form.city || !form.suburb || !form.street || !form.postal_code || !form.image) {
        alert("Datos incompletos");
        return;
    }
    console.log("MI FORM", form);
    createData(form);
    handleReset();
    if (statusCode === '200'){
    navigate('/sites')
  }else{
    alert("No se pudo registrar este lugar")
  }
  }

  const handleReset=(e)=>{
    console.log("Entrando a handlereset");
    setForm(initialForm);
    console.log(form);
    
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

      <h2>Registrar Lugar Seguro</h2>

        <Form.Item
          name="nameLabel" 
          label="Nombre:"
          rules={[{ required: true, message: 'Please input Intro' }]}
        >
          <Input name="name" onChange={handleChange} value={form.name} />
        </Form.Item>

      <Form.Item
        name="descriptionLabel"
        label="Descripción"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} name="description" onChange={handleChange} value={form.description}/>
      </Form.Item>

      <Form.Item 
        name="stateLabel"
        label="Estado:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="state" onChange={handleChange} value={form.state}/>
      </Form.Item>

      <Form.Item 
        name="cityLabel"
        label="Ciudad:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="city" onChange={handleChange} value={form.city}/>
      </Form.Item>

      <Form.Item 
        name="suburbLabel"
        label="Colonia:"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="suburb" onChange={handleChange} value={form.suburb}/>
      </Form.Item>

      <Form.Item 
        name="streetLabel"
        label="Calle:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input name="street" onChange={handleChange} value={form.street}/>
      </Form.Item>
      
      <Form.Item 
        name="postCodeLabel"
        label="Código Postal"
        rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input name="postal_code" onChange={handleChange} value={form.postal_code}/>
      </Form.Item>

      <Form.Item 
        name="imageLabel"
        label="Imagen:"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input type='file' name="image" onChange={handleChangeImage} value={form.image}/>
      </Form.Item>

      <Form.Item 
          name="saveButton"
          label="">
          <Button onClick={handleSubmit}>Guardar</Button>
      </Form.Item>
      <Form.Item 
          name="resetButton"
          label="">
          <Button onClick={handleReset}>Limpiar</Button>
      </Form.Item>

    </Form>
  );
};
export default App;