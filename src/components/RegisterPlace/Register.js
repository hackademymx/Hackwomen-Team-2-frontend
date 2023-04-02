import {
    Button,
    Form,
    Input,
    InputNumber,
  } from 'antd';
  import { useState } from 'react';
  const App = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
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
          name="name" 
          label="Nombre:"
          rules={[{ required: true, message: 'Please input Intro' }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name="intro"
          label="Descripción"
          rules={[{ required: true, message: 'Please input Intro' }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="state" 
          label="Estado:"
          rules={[{ required: true, message: 'Please input Intro' }]}
          >
          <Input />
        </Form.Item>

        <Form.Item 
          name="city"
          label="Ciudad:"
          rules={[{ required: true, message: 'Please input Intro' }]}
          >
          <Input />
        </Form.Item>

        <Form.Item 
          name="suburb"
          label="Colonia:"
          rules={[{ required: true, message: 'Please input Intro' }]}
          >
          <Input />
        </Form.Item>

        <Form.Item 
          name="street"
          label="Calle:"
          rules={[{ required: true, message: 'Please input Intro' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item 
          name="postCode"
          label="Código Postal"
          rules={[{ required: true, message: 'Please input Intro' }]}
          >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="image" 
          label="Imagen:"
          rules={[{ required: true, message: 'Please input Intro' }]}
        >
          <Input type='file'/>
        </Form.Item>

        <Form.Item 
          name="saveButton"
          label="">
          <Button>Guardar</Button>
        </Form.Item>

      </Form>
    );
  };
  export default App;