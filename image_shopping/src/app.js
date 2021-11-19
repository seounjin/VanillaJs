import ProductListPage from './page/ProductListPage.js';
import { init } from './router.js';


export default function app(target) {


    this.route = () => {
        const { pathname } = location;
        target.innerHTML = '';

        if( pathname === '/'){
            new ProductListPage({ app:target });
        } 

    };

    init(this.route);
    this.route();
    window.addEventListener('popstate', this.route);
    
};