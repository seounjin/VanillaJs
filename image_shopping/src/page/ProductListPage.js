import api from '../api/api.js';
import { routeChange } from '../router.js';

export default function ProductListPage({ app }){

    this.state = {};

    this.target = document.createElement('div');
    this.target.className = 'ProductListPage';
    app.appendChild(this.target);

    this.setState = newState => {
        this.state = newState;
        this.render();
    };

    this.fetchProducts = async() => {
        const data = await api.fetchProducts();
        this.setState(data);
    };

    this.render = () => {
        this.target.innerHTML = 
        `<h1>상품목록</h1>
        <ul>
            ${this.state.reduce((html,data,index) => {
                html += `
                <li class="Product" data-product-id=${data.id}>
                        <img src=${data.imageUrl}>
                        <div class="Product__info">
                            <div>${data.name}</div>
                            <div>${data.price}원</div>
                        </div>
                </li>
                `
                return html;
            },'')}
        </ul>`
    };

    this.fetchProducts();

    this.target.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        const { productId } = li.dataset;

        if (productId) {
            routeChange(`/products/${productId}`);
        }
    });



};