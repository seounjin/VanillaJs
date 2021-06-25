import SmallCardSection from './components/SmallCardSection.js';
import RoadMapSection from './components/RoadMapSection.js';
import ChangeButton from './components/ChangeButton.js'

export default class App {

    constructor(element) {
        this.element = element;
        
        new SmallCardSection(this.element.querySelector('.section-character'));

        new RoadMapSection(this.element.querySelector('.section-roadmap'));

        new ChangeButton(this.element.querySelector('.section-changebtn'));

        // this.setEvent();
    };
    

    setEvent () {
        const backToTop = document.getElementById('section-backtotop-changebtn')

        backToTop.addEventListener('click', ()=>{
            if (window.pageYOffset > 0) {
                window.scrollTo({top: 0 })
            }
        });
    }

}