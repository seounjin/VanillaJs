import View from '../components/View.js';



export default class LikeDislike extends View {


    setEvent () {
        // event
        // this.element.querySelector('');

    };

    template() {
        return `
                <i class="far fa-thumbs-up thumb-up"></i>
                <i class="far fa-thumbs-down thumb-down"></i>
                `
    
    };


};