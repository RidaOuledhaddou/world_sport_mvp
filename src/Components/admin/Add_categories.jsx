import React, {useState, useEffect} from 'react'

const Add_categories = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState([]);

    useEffect(() => {
        info_category();
    }, []);

    async function info_category() {
        try {
            let res = await fetch("http://127.0.0.1:8000/api/info_categories");
            let data = await res.json();
            setCategory(data);
        } catch (error) {
            console.error('Failed to fetch categorys:', error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('name', name);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/add_categories', {
              method: 'POST',
              body: formData,
            });
      
            if (response.ok) {
              const result = await response.json();
              setMessage('Upload successful');
              console.log(result);
              info_category();
            } else {
              throw new Error('Failed to upload');
            }
          } catch (error) {
            setMessage(error.message);
            console.error('Error during the upload:', error);
          }

    }

    async function deleteCategory(id) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/delete_categorie/${id}`, { method: 'DELETE' });
          if (response.ok) {
            info_category(); // Refresh the list on successful delete
          } else {
            console.error('Failed to delete Category:', response.status);
          }
        } catch (error) {
          console.error('Error deleting Category:', error);
        }
    }
  return (
    <>
      <h1>add_categories</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
       </form>
       {message && <p>{message}</p>}

       <br />
            <br />
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {category.map((Category) => (
                    <tr key={Category.id}>
                        <td>{Category.name}</td>
                        <td><button onClick={() => deleteCategory(Category.id)}>Delete Category</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
    </>
  )
}

export default Add_categories
