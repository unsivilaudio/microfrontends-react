import faker from 'faker';

const mount = el => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development isolation
// We are using our local index.html file, render immediately
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app, NO GUARANTEE that the element
// with the id of 'dev-products' exists, render on-demand
export { mount };
