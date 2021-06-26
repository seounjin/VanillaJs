import View from '../components/View.js';



export default class BackToTop extends View {
    
    
    setEvent () {

        const backToTop = this.element;

        backToTop.addEventListener('click', ()=>{
            if (window.pageYOffset > 0) {
                window.scrollTo({top: 0 })
            }
        });
    }

};