import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProductList = ({ sortOption }) => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = 'http://localhost:5000/products';

        if (sortOption === 'alphabetical') {
          endpoint += '?sort=alphabetical';
        } else if (sortOption === 'numerical') {
          endpoint += '?sort=numerical';
        }

        const response = await axios.get(endpoint);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [sortOption]);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.product_id !== productId));
      console.log('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async () => {
    try {
      const updatedFields = {
        product_name: editingProduct.product_name,  
        product_price: editingProduct.product_price,  
      };
  
      await axios.put(`http://localhost:5000/upproducts/${editingProduct.product_id}`, updatedFields);
      setEditingProduct(null);
      console.log('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center" >

      <table className="table table-striped w-auto align-middle mb-0 table-responsive ">
        <thead className="bg-light">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <React.Fragment key={product.product_id}>
              <tr>
                <td>
                  <p className="fw-normal mb-1">{product.product_id}</p>
                </td>
                <td>
                  <img src={`http://localhost:5000/product/image/${product.product_id}`}
                    alt={product.product_name}
                    style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </td>
                <td>
                  <p className="fw-normal mb-1">{product.product_name}</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">{product.product_price}</p>
                </td>
                
                <td>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-secondary me-md-2 btn-sm" type="button"
                      onClick={() => handleEdit(product)}>
                      Edit
                    </button>
                    <button className="btn btn-secondary btn-sm" type="button"
                      onClick={() => handleDelete(product.product_id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              {editingProduct && editingProduct.product_id === product.product_id && (
                <tr>
                  <td colSpan="12">
                    <div>
                      <h2>Edit Product</h2>
                      <table className='mx-auto'>
                        <tbody>
                          <tr>
                            <td>
                              <label>Product Name:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                value={editingProduct.product_name}
                                onChange={(e) => setEditingProduct({ ...editingProduct, product_name: e.target.value })}
                              />
                            </td>
                          </tr>
                         
                          
                          <tr>
                            <td>
                              <label>Product Price:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                value={editingProduct.product_price}
                                onChange={(e) => setEditingProduct({ ...editingProduct, product_price: e.target.value })}
                              />
                            </td>
                          </tr>
                         

                        </tbody>
                      </table>
                      <button className="btn btn-primary mt-2" onClick={handleUpdate}>
                        Update
                      </button>
                      <button className="btn btn-secondary mt-2" style={{ marginLeft: '10px' }}
                        onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AdminProductList;
