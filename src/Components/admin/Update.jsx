import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [information, setInformation] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [review, setReview] = useState('');
  const [brand, setBrand] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [mainImage, setMainImage] = useState(null);
  const [message, setMessage] = useState('');
  const [flavors, setFlavors] = useState([]);
  const [Data_flavors, setDataFlavors] = useState([]);
  const [category, setCategory] = useState('');
  const [Data_category, setDataCategory] = useState([]);
  
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
      setFiles(event.target.files);
      console.log(files)
  };

  useEffect(() => {
      info_category();
  }, []);

  async function info_category() {
      try {
          let res = await fetch("http://127.0.0.1:8000/api/info_categories");
          let data = await res.json();
          setDataCategory(data);
      } catch (error) {
          console.error('Failed to fetch categorys:', error);
      }
  }

  const handleCategroyChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageChange = (event) => {
    setMainImage(event.target.files[0]);
  };

  const handleFlavorChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFlavors([...flavors, value]); // Add flavor
    } else {
      setFlavors(flavors.filter(flavor => flavor !== value)); // Remove flavor
    }
  };

  useEffect(() => {
      info_flavor();
  }, []);

  async function info_flavor() {
      try {
          let res = await fetch("http://127.0.0.1:8000/api/info_flavors");
          let data = await res.json();
          setDataFlavors(data);
      } catch (error) {
          console.error('Failed to fetch flavors:', error);
      }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('subtitle', subtitle);
    formData.append('information', information);
    formData.append('old_price', oldPrice);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('description', description);
    formData.append('review', review);
    formData.append('brand', brand);
    formData.append('stock_quantity', stockQuantity);
    formData.append('main_image_url', mainImage);
    formData.append('category', category);
    flavors.forEach(flavors => formData.append('flavors[]', flavors));

    for (let i = 0; i < files.length; i++) {
        formData.append('images[]', files[i]);
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/update_products/${id}`, {
        method: 'POST',
        body: formData,
      });
      console.log("FormData before sending: ", Object.fromEntries(formData));
      if (!response.ok) throw new Error('Network response was not ok.');
      const result = await response.json();
      setMessage('Upload successful');
      console.log(result);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      console.error('Error during the upload:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/product/${id}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to fetch');
  
        setName(data.name);
        setSubtitle(data.subtitle);
        setInformation(data.information);
        setOldPrice(data.old_price);
        setPrice(data.price);
        setStatus(data.status);
        setDescription(data.description);
        setReview(data.review);
        setBrand(data.brand);
        setStockQuantity(data.stock_quantity);
        setMainImage(data.main_image_url);
      } catch (error) {
        setMessage(error.toString());
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Subtitle:
          <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required />
        </label>
        <br />
        <label>
          Information:
          <textarea value={information} onChange={(e) => setInformation(e.target.value)} required />
        </label>
        <br />
        <label>
          Old Price:
          <input type="number" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <br />
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br />
        <label>
          Review:
          <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
        <br />
        <label>
          Brand:
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </label>
        <br />
        <label>
          Stock Quantity:
          <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required />
        </label>
        <br />
        <label>
          Upload Main Image:
          <input type="file" onChange={handleImageChange} accept="image/*" required />
        </label>
        <br />
        <div>
          <label>Flavors:</label>
          {Data_flavors.map(flavor => (
            <div key={flavor.id}>
              <input
                type="checkbox"
                id={`flavor-${flavor.id}`}
                name="flavors"
                value={flavor.id}
                onChange={handleFlavorChange}
                checked={flavors.includes(`${flavor.id}`)} // Ensuring the checkbox is checked if flavor is in the array
              />
              <label htmlFor={`flavor-${flavor.id}`}>{flavor.name}</label>
            </div>
          ))}
        </div>
        <br />
        <label>
          Category
          <select value={category} onChange={handleCategroyChange}>
            <option value="">Select a category</option>
            {Data_category.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <input type="file" multiple onChange={handleFileChange} />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      <br />
    </>
  );
};

export default UpdateProduct;
