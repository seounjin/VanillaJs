import { getItem, clearItem } from '../storage.js';
import { routeChange } from '../router.js';
import api from '../api/api.js';


export default function Cart ( { target }) {
    
    const cartData = getItem('products_cart', []);
    if (cartData.length === 0) {
        alert('바구니 비워있음');
        routeChange('/')
    }

    this.state = null;
    this.target = document.createElement('div');
    this.target.className = 'Cart';
    target.appendChild(this.target);


    this.getTotalPrice = () => {
        
        return this.state.reduce((total, data, index ) => {

            const { quantity, price, optionPrice } = data;

            total += ((optionPrice + price) * quantity);

            return total;
        },0);

    };

    this.setState = newState => {
        this.state = newState;
        this.render();
    };

    this.fetchProducts = async() => {

        const products = await Promise.all(
            cartData.map(async( data ) => {

                const product = await api.fetchProduct(`${data.productId}`);
                const option = product.productOptions.find( option => data.optionId === option.id);
                
                return {
                    imageUrl: product.imageUrl,
                    productName: product.name,
                    quantity: data.quantity,
                    price: product.price,
                    optionName: option.name,
                    optionPrice: option.price

                }

            })
        )

        this.setState(products);
    };

    this.render = () => {

        this.target.innerHTML = `
        <ul>
            ${this.state.reduce((html, data, index) => {
                const { imageUrl, productName, quantity, price, optionName, optionPrice } = data;
                html += `
                <li class="Cart__item">
                    <img src=${imageUrl}>
                    <div class="Cart__itemDesription">
                        <div>${productName} ${optionName} ${quantity}개</div>
                        <div>${price + optionPrice}원</div>
                    </div>
                </li>
                `
                return html;

            },'')}

        </ul>
        <div class="Cart__totalPrice">
            총 상품가격 ${this.getTotalPrice()}원
          </div>
        <button class="OrderButton">주문하기</button>
        `
    };

    this.target.addEventListener('click', (e) => {
        
            alert('주문 완료')
            clearItem();
            routeChange('/');
        
    })

    this.fetchProducts();

};