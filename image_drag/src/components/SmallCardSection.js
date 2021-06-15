import smallCardApi from '../api/smallCardApi.js';
import SmallCard from '../components/SmallCard.js';
import View from '../components/View.js';

export default class SmallCardSection extends View {
    
    
    mount () {
        this.setCardList();
    }

    setCardList () {
        smallCardApi.smallCardList().then(data => {
            new SmallCard(this.element.querySelector('.character-container'), { smallCard:data });
        })
    }

    template () { 

        return `
            <div class="inner">
                <div class="character-container">
                </div>
            </div>
        `;
     };



}