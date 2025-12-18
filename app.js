const express = require('express');
const app = express();

// middleware JSON
app.use(express.json());

// import routes
const productRoutes = require('./src/routes/products.routes');

// gunakan routes
app.use('/api/products', productRoutes);

// test root
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
