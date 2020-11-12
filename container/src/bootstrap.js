import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('Container');

const cart = document.querySelector('#my-cart');
const products = document.querySelector('#my-products');

productMount(products);
cartMount(cart);
