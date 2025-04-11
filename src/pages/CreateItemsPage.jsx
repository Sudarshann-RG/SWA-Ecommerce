import { useState } from 'react';

const CreateItemsPage = () => {
  const [formData, setFormData] = useState({ id: '', title: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3001/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      alert('Item created successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to create item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID</label>
        <input
          placeholder="101"
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          placeholder="Marvelous Mug"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          placeholder="10.99"
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Create Item</button>
      </div>
    </form>
  );
};

export default CreateItemsPage;
