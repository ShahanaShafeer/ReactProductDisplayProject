import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NavPage from './NavPage';
import FormPage from './FormPage';
import EditForm from './EditForm';
import axios from 'axios';
import Login from './Login';
import { ToastContainer } from 'react-toastify';

const samplecontext=createContext()

const Router = () => {
  const [products, setProducts] = useState([]);

  const [newproducts, setnewproducts] = useState([])
  const [rowData, setrowData] = useState({})
  const url = 'https://dummyjson.com/products';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response?.data?.products);
        console.log(response);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);


  

  return (
    <div>
    <samplecontext.Provider value={{products,setProducts,newproducts,setnewproducts,rowData, setrowData}}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home"
            element={<App products={products} />}
          />
          <Route
            path="/FormPage"
            element={<FormPage/>}
          />
          <Route path="/EditForm" element={<EditForm/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
        
      </BrowserRouter>
      </samplecontext.Provider>
      <ToastContainer/>
    </div>
  );
};

export default Router;
export {samplecontext};

