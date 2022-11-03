import express from 'express';
import cors from 'cors';

import productsRouter from './routes/Products.router.js';

const app = express();

const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouter);

app.listen(port);
