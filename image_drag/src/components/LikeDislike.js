import View from '../components/View.js';
import { LikeUpdate, disLikeUpdate } from "../_actions/modal_actions.js"


export default class LikeDislike extends View {


    setEvent () {
        
        const thumbUp = this.element.querySelector('.thumb-up');
        
        thumbUp.addEventListener('click', ( event => {

            const num = Number(this.data.parentElement.dataset.num);
            const cNum = Number(this.data.dataset.num);
            
            //redux 사용
            const likeEvent = () => {
                const like = window.store.getState().data[num - 1].info[cNum - 1].like;
                this.data.querySelector('.class-like').innerHTML = like;
            };

            const store = window.store;
            
            // redux를 거치지 않는 코드
            // this.data.querySelector('.class-total').innerHTML = Number(this.data.querySelector('.class-total').innerHTML) + 1

            // 등록
            store.subscribe(likeEvent);

            //dispatch
            store.dispatch(LikeUpdate(num, cNum));

        }));
        
        const thumbDown = this.element.querySelector('.thumb-down');

        thumbDown.addEventListener('click', ( event => {

            const num = Number(this.data.parentElement.dataset.num);
            const cNum = Number(this.data.dataset.num);
            
            //redux 사용
            const disLikeEvent = () => {
                const disLike = window.store.getState().data[num - 1].info[cNum - 1].dislike;
                this.data.querySelector('.class-dislike').innerHTML = disLike;
            };


            const store = window.store;
            
            // redux를 거치지 않는 코드
            // this.data.querySelector('.class-total').innerHTML = Number(this.data.querySelector('.class-total').innerHTML) + 1

            // 등록
            store.subscribe(disLikeEvent);

            //dispatch
            store.dispatch(disLikeUpdate(num, cNum));

        }));


    };

    template() {
        return `
                <i class="far fa-thumbs-up thumb-up"></i>
                <i class="far fa-thumbs-down thumb-down"></i>
                `
    
    };


};