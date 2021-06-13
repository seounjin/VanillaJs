import smallCardApi from '../api/smallCardApi.js';
import SmallCard from '../components/SmallCard.js';
import Section from '../components/Section.js';

export default class SmallCardSection extends Section {
    
    
    setup () {
        this.setCardList();
    }

    setCardList () {
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