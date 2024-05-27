import React, { useState, useEffect } from 'react';

const AddFlavors = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [flavors, setFlavors] = useState([]);

    useEffect(() => {
        info_flavor();
    }, []);

    async function info_flavor() {
        try {
            let res = await fetch("http://127.0.0.1:8000/api/info_flavors");
            let data = await res.json();
            setFlavors(data);
        } catch (error) {
            console.error('Failed to fetch flavors:', error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/add_flavors', {
              method: 'POST',
              body: formData,
            });

            if (response.ok) {
              const result = await response.json();
              setMessage('Flavor added successfully');
              console.log(result);
              info_flavor(); // Refresh the flavor list after successful upload
            } else {
              throw new Error('Failed to upload flavor');
            }
        } catch (error) {
            setMessage(error.message);
            console.error('Error during the upload:', error);
        }
    }

    async function deleteFlavor(id) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/delete_flavor/${id}`, { method: 'DELETE' });
          if (response.ok) {
            info_flavor(); // Refresh the list on successful delete
          } else {
            console.error('Failed to delete flavor:', response.status);
          }
        } catch (error) {
          console.error('Error deleting flavor:', error);
        }
    }

    return (
        <>
            <h1>Add Flavors</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
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
                {flavors.map((flavor) => (
                    <tr key={flavor.id}>
                        <td>{flavor.name}</td>
                        <td><button onClick={() => deleteFlavor(flavor.id)}>Delete Flavor</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default AddFlavors;
