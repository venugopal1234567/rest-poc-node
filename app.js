const express = require('express');

const healthCheckRouter = require('./routes/healthCheckRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();


app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use('/api/v1/healthCheck', healthCheckRouter);
app.use('/api/v1/product', productRouter);


module.exports = app;