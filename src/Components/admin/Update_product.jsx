import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Update_product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    show_products();
  }, []);

  async function show_products() {
    let res = await fetch("http://127.0.0.1:8000/api/show_product");
    let data = await res.json();
    setProduct(data);
  }

  return (
    <>
      <h2>Update Products</h2>
      <table border={1}>
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
          {product.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.old_price}</td>
              <td>{p.price}</td>
              <td>{p.stock_quantity}</td>
              <td>
                <img
                  src={`http://127.0.0.1:8000/storage/${p.image}`}
                  alt={p.image}
                  width={100}
                  height={50}
                />
              </td>
              <td>
                <Link to={`/update-product/${p.id}`}>
                  <button>Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Update_product;
