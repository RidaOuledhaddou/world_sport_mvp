import { useEffect, useState } from "react";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    showProducts();
  }, []);

  async function showProducts() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/show_product");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/delete_product/${id}`, { method: 'DELETE' });
      if (response.ok) {
        showProducts(); // Refresh the list on successful delete
      } else {
        console.error('Failed to delete product:', response.status);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  return (
    <>
      <h2>Delete Products</h2>
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>old_price</th>
            <th>price</th>
            <th>stock_quantity</th>
            <th>image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.old_price}</td>
              <td>{product.price}</td>
              <td>{product.stock_quantity}</td>
              <td>
                <img
                  src={`http://127.0.0.1:8000/storage/${product.image}`}
                  alt={product.title}
                  width={250}
                  height={100}
                />
              </td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DeleteProduct;
