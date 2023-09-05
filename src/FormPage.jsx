import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { samplecontext } from './Router';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const FormPage = () => {
  const sample=useContext(samplecontext);
  const {products,setProducts}= sample;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({});
    
    toast.success(`New Product "${formData.title}" is added`, {
      position: toast.POSITION.TOP_CENTER
    });
    setTimeout(() => {
      navigate('/Home');
    }, 3000);
    
  };
  

  return (
    <div className='FormWrapper'>
      <h1 className='FormTitle'>Add Product</h1>
      <Form style={{ paddingTop: '10px', marginTop: '10px' }} onSubmit={handleSubmit}>
        <Form.Control
          className="mb-3 m-auto w-75"
          type="text"
          placeholder="Brand"
          value={formData.brand || ''}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        />
        <Form.Control
          className="mb-3 m-auto w-75"
          type="text"
          placeholder="Category"
          value={formData.category || ''}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
        <Form.Control
          className="mb-3 m-auto w-75"
          type="text"
          placeholder="Price"
          value={formData.price || ''}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <Form.Control
          className="mb-3 m-auto w-75"
          type="text"
          placeholder="Rating"
          value={formData.rating || ''}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
        />
        <Form.Control
          className="mb-3 m-auto w-75"
          type="text"
          placeholder="Stock"
          value={formData.stock || ''}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
        />
        <Form.Control
          className="mb-3 m-auto w-75"
          type="text"
          placeholder="Image"
          value={formData.image || ''}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <Form.Control
          className="mb-3 m-auto w-75"
          type="text"
          placeholder="Title"
          value={formData.title || ''}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Form.Control
          className="mb-3 m-auto w-75"
          type="text"
          placeholder="Discount Percentage"
          value={formData.discountPercentage || ''}
          onChange={(e) => setFormData({ ...formData, discountPercentage: e.target.value })}
        />
        <button className='submitBtn'>
          Submit
        </button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default FormPage;
