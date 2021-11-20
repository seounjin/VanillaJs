import { routeChange } from '../router.js';
import { getItem, setItem } from '../storage.js';

export default function SelectedOptions({ target, selectOptions, productPrice, productId }) {

    this.state = selectOptions;
    this.target = document.createElement('div');
    this.target.className = 'ProductDetail__selectedOptions';
    target.appendChild(this.target);


    this.getTotalPrice = () => {
        
        return this.state.reduce((total, data, index ) => {

            total += ((data.price + productPrice) * data.number);

            return total;
        },0);

    };

    this.setState = newState => {
        this.state = [...this.state, newState];
        this.render();
    };

    this.render = () => {
        
        this.target.innerHTML = `
            <h3>선택된 상품</h3>

            <ul>
                ${this.state.length > 0 ? this.state.reduce((html, data, index ) => {
                    const { id, name, price, number } = data;       

                    html += `
                        <li>
                            ${name} ${price}원 <div><input data-id=${id} type="text" value=${number}></div>
                        </li>
                    `

                    return html;
                },'') : ''}
            </ul>

            <div class="ProductDetail__totalPrice">${this.getTotalPrice()}원</div>
            <button class="OrderButton">주문하기</button>
        
        `
    };

    this.target.addEventListener('change', (e) => {

        if (e.target.tagName === 'INPUT') {
            const num = parseInt(e.target.value);

            if (typeof num === 'number'){
                
                const { id } = e.target.dataset;
            
                const index = this.state.findIndex(data => data.id === parseInt(id));

                const newSelectoptions = [...this.state];

                newSelectoptions[index].number = newSelectoptions[index].stock >= num ?  num : newSelectoptions[index].stock;
                
                this.state = newSelectoptions;
                
                this.render();
            }

        }

    });

    // productId: '상품 id',
    // optionId: '선택한 옵션의 id',
    // quantity: '선택한 수량'

    this.target.addEventListener('click', (e) => {
        
        if (e.target.className === 'OrderButton') {

            const cartData = getItem('products_cart', []);

            setItem('products_cart', cartData.concat( 

                this.state.map((data) => (

                    {
                        productId:productId,
                        optionId:data.id,
                        quantity:data.number
                    }
                ))

            ))
            
            routeChange('/web/cart');
        
        }
        
    })

    this.render();
};
