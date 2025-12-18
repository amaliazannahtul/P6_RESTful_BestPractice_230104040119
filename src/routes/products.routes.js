const express = require('express');
const router = express.Router();

// ambil data products (in-memory)
let products = require('../data/products.data');

/**
 * GET /api/products
 * Ambil semua produk
 */
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'List of products',
    data: products
  });
});

/**
 * GET /api/products/:id
 * Ambil produk berdasarkan ID
 */
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  res.status(200).json({
    success: true,
    message: 'Product found',
    data: product
  });
});

/**
 * POST /api/products
 * Tambah produk baru
 */
router.post('/', (req, res) => {
  const { name, price, stock } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    stock
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: 'Product created',
    data: newProduct
  });
});

/**
 * PUT /api/products/:id
 * Update seluruh data produk
 */
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, stock } = req.body;

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  products[index] = {
    id,
    name,
    price,
    stock
  };

  res.status(200).json({
    success: true,
    message: 'Product updated',
    data: products[index]
  });
});

/**
 * PATCH /api/products/:id
 * Update sebagian data produk
 */
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  const { name, price, stock } = req.body;

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  if (stock !== undefined) product.stock = stock;

  res.status(200).json({
    success: true,
    message: 'Product partially updated',
    data: product
  });
});

/**
 * DELETE /api/products/:id
 * Hapus produk
 */
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  products.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'Product deleted'
  });
});

module.exports = router;
