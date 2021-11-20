import api from '../api/api.js';
import ProductDetail from '../components/ProductDetail.js';

export default function ProductDetailPage({ app, productId }){

    this.state = {};

    this.target = document.createElement('div');
    this.target.className = 'ProductDetailPage';

    this.setState = newState => {
        this.state = newState;
        this.render();
    };

    this.fetchProduct = async() => {
        const data = await api.fetchProduct(productId);
        this.setState(data);
    };


    this.render = () => {
        this.target.innerHTML =  `<h1>${this.state.name}상품 정보</h1>`
        app.appendChild(this.target);
        
        new ProductDetail({
            target:this.target,
            productState: this.state,
            productOptions:this.state.productOptions
        });
    };

    this.fetchProduct();

};