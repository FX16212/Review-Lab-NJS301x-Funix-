import express from 'express';
import cors from 'cors';

import productsRouters from './routes/Products.router.js';
import cartRouters from './routes/Cart.js';
import adminRoutes from './routes/admin.js';

const app = express();

const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouters);
app.use('/api/cart', cartRouters);
app.use('/api/admin', adminRoutes);

app.listen(port);
