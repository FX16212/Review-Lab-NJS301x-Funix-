import { readFileSync } from 'fs';

const data = readFileSync('./data/products.json', 'utf8');
const Products = JSON.parse(data);

export default Products;
