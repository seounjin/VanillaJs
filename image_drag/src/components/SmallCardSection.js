import smallCardApi from '../api/smallCardApi.js';
import SmallCard from '../components/SmallCard.js';
import Card from '../components/Card.js';

export default class SmallCardSection extends Card {
    
    
    setup () {
        this.cardList();
    }

    cardList () {
        smallCardApi.smallCardList().then(data => {
            new SmallCard(this.element.querySelector('.character-container'), data);
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