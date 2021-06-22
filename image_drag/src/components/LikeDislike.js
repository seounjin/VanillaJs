import View from '../components/View.js';
import { TotalUpdate } from "../_actions/modal_actions.js"



export default class LikeDislike extends View {


    setEvent () {
        
        const thumbUp = this.element.querySelector('.thumb-up');
        
        thumbUp.addEventListener('click', ( event => {
            // const state = window.store.getState();
            
            const num = this.data.dataset.num - 1;
            const cNum = this.data.parentElement.dataset.num - 1;
            
            window.store.dispatch(TotalUpdate(num, cNum));

            // state.data.then(item => console.log("item",item[1].info[1]))
            console.log("1", this.data.parentElement.dataset.num);
            console.log("2", this.data.dataset.num);
            console.log("3",window.store.getState());

            // const currentTotal = this.data.querySelector('.class-total');
            // currentTotal.innerText = Number(currentTotal.innerText) + 1;
            // console.log("currentTotal",currentTotal);

        }));

    };

    template() {
        return `
                <i class="far fa-thumbs-up thumb-up"></i>
                <i class="far fa-thumbs-down thumb-down"></i>
                `
    
    };


};