import React, { useContext, useState } from 'react';
import { Button, Carousel, Modal, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { samplecontext } from './Router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const nav = useNavigate();
  const sample = useContext(samplecontext);
  const { products, setProducts, rowData, setrowData } = sample;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCloseViewModal = () => {
    setShowViewModal(false);
  };

  const handleShowViewModal = (product) => {
    setSelectedProduct(product);
    setShowViewModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedProducts = products.filter((product) => product.id !== selectedProduct.id);
    setProducts(updatedProducts);
    handleCloseDeleteModal();
    toast.error(`Product "${selectedProduct.title}" deleted successfully`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleCancelDelete = () => {
    handleCloseDeleteModal();
  };

  const handleEditRow = (item) => {
    setrowData(item);
    nav('/EditForm');
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{padding:"12px"}}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search product "
        style={{padding:"15px",marginLeft:"75%",width:"350px",marginTop:"15px",marginBottom:"15px",borderRadius:"20px"}}
      />
      <i className="fas fa-search" style={{marginLeft: "-40px"}}></i>
      <Table striped bordered style={{ margin: 'auto', backgroundColor: '#d2cfe8' }}>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            {/* <th>Image</th> */}
            <th>Title</th>
            <th>Discount Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.rating}</td>
                <td>{item.stock}</td>
                {/* <td>
                  <Carousel style={{ width: '100%', height: '200px' }}>
                    {item?.images?.map((imageUrl, index) => (
                      <Carousel.Item key={index}>
                        <img src={imageUrl} style={{ width: '200px', height: '200px' }} alt="" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </td> */}
                <td>{item.title}</td>
                <td>{item.discountPercentage}</td>
                <td style={{ display: 'flex', padding: '10px', justifyContent: 'center'}}>
                  <Button variant="dark" style={{ marginLeft: '10px', marginTop: '15px' }} onClick={() => handleShowViewModal(item)}>
                    View
                  </Button>
                  <Button variant="dark" style={{ marginLeft: '10px', marginTop: '15px' }} onClick={() => handleEditRow(item)}>
                    Edit
                  </Button>
                  <Button variant="danger" style={{ marginLeft: '10px', marginTop: '15px' }} onClick={() => handleShowDeleteModal(item)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Link to={'/FormPage'}>
        <Button variant="dark" style={{ marginLeft: '40%', marginTop: '20px' ,marginBottom:"32px"}}>
          Add Product
        </Button>
      </Link>

      {/* View Modal */}
      <Modal show={showViewModal} onHide={handleCloseViewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <h4>{selectedProduct.title}</h4>
              <p>Brand: {selectedProduct.brand}</p>
              <p>Category: {selectedProduct.category}</p>
              <p>Price: {selectedProduct.price}</p>
              <p>Rating: {selectedProduct.rating}</p>
              <p>Stock:{selectedProduct.stock}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseViewModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <p>Do you want to delete the product "{selectedProduct.title}"?</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default App;
