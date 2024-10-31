import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const SellPage = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null, // Image file
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProduct({
      ...product,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      imageURL: URL.createObjectURL(product.image), // Convert image to URL for preview
    };
    addProduct(newProduct); // Pass the new product with image to App.js
    setProduct({ name: '', description: '', price: '', image: null }); // Reset form
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      <Typography variant="h4" sx={{ mb: 3, color: '#C5A880' }}>
        Sell Your Antique
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
        />
        <TextField
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          fullWidth
          type="number"
          sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
        />
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: '#C5A880', color: '#000', mb: 2 }}
        >
          Upload Product Image
          <input type="file" hidden onChange={handleImageUpload} accept="image/*" />
        </Button>
        {product.image && (
          <Typography variant="body2" sx={{ color: '#C5A880' }}>
            {product.image.name}
          </Typography>
        )}
        <Button variant="contained" type="submit" sx={{ backgroundColor: '#C5A880', color: '#000' }}>
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default SellPage;
