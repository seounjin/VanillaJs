import View from '../components/View.js';
import { TotalUpdate } from "../_actions/modal_actions.js"


export default class LikeDislike extends View {


    setEvent () {
        
        const thumbUp = this.element.querySelector('.thumb-up');
        
        thumbUp.addEventListener('click', ( event => {

            const num = Number(this.data.parentElement.dataset.num);
            const cNum = Number(this.data.dataset.num);
            

            // this.data.querySelector('.class-total').innerHTML = Number(this.data.querySelector('.class-total').innerHTML) + 1
            const totalModify = () => {
                const total = window.store.getState().data[num - 1].info[cNum - 1].total
                this.data.querySelector('.class-total').innerHTML = total
            };

            const store = window.store;
            
            store.subscribe(totalModify);

            store.dispatch(TotalUpdate(num, cNum));
            


        }));

    };

    template() {
        return `
                <i class="far fa-thumbs-up thumb-up"></i>
                <i class="far fa-thumbs-down thumb-down"></i>
                `
    
    };


};