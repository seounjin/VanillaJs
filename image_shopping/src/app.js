import ProductListPage from './page/ProductListPage.js';
import ProductDetailPage from './page/ProductDetailPage.js';

import { init } from './router.js';


export default function app(target) {


    this.route = () => {
        const { pathname } = location;
        target.innerHTML = '';
        console.log("pathname", pathname)
        if( pathname === '/'){
            new ProductListPage({ app:target });
        } else if(pathname.indexOf('/products/') === 0){    
            const [ , , productId] = pathname.split('/');
            new ProductDetailPage({ app:target, productId:productId })
        }

    };

    init(this.route);
    this.route();
    window.addEventListener('popstate', this.route);
    
};




