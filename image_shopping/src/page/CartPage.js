import Cart from '../components/Cart.js';


export default function CartPage({ app }) {

    this.target = document.createElement('div');
    this.target.className = 'CartPage';
    app.appendChild(this.target);

    this.render = () => {


        this.target.innerHTML = `
            <h1>장바구니</h1>
        `

        new Cart({ target : this.target});

    };

    this.render();
};