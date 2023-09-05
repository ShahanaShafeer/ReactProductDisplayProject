import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { samplecontext } from './Router'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const EditForm = () => {
    const nav=useNavigate();
    const sample=useContext(samplecontext)
    const {products, setProducts,rowData, setrowData}=sample

    const handleSave = (updatedData) => {
        setProducts(products.map((item) => (item.id === updatedData.id ? updatedData : item)));
      };
      console.log(products);
    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setrowData({ ...rowData, [name]: value });
      };
      console.log(rowData);
      const handleSubmit = (event) => {
        event.preventDefault();
        handleSave(rowData);
        
      toast.success("Item edited sucessfully", {
        position: toast.POSITION.TOP_CENTER
      });
      setTimeout(() => {
        nav('/Home');
      }, 3000);
        
      };
  return (
    <div className='FormWrapper'>
    <h1 className='FormTitle'>Edit Products</h1>
    <Form className='form-div'>
        <Form.Group className="mb-3 m-auto w-50 " >
            <Form.Control 
            type="text" 
            placeholder="Enter Product Name"
            name="title"
            value={rowData.title}
            onChange={handleChangeInput}
        />
        </Form.Group>
        <Form.Group className="mb-3 m-auto w-50 " >
            <Form.Control 
            type="text" 
            placeholder="Enter Brand" 
            name="brand"
            value={rowData.brand}
            onChange={handleChangeInput}
        />
        </Form.Group>
        <Form.Group className="mb-3 m-auto w-50" >
            <Form.Control 
            type="text" 
            placeholder="" 
            name="category"
            value={rowData.category}
            onChange={handleChangeInput}
        />
        </Form.Group>
        <Form.Group className="mb-3 m-auto w-50 " >

            <Form.Control 
            type="number" 
            placeholder="price" 
            name="price"
            value={rowData.price}
            onChange={handleChangeInput}
        />
        </Form.Group>
        <button className='submitBtn'  onClick={handleSubmit}>Submit</button>
        
    </Form>
</div>
  )
}

export default EditForm