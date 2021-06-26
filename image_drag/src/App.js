import SmallCardSection from './components/SmallCardSection.js';
import RoadMapSection from './components/RoadMapSection.js';
import ChangeButton from './components/ChangeButton.js';
import BackToTop from './components/BackToTop.js'


export default class App {

    constructor(element) {
        this.element = element;
        
        new SmallCardSection(this.element.querySelector('.section-character'));

        new RoadMapSection(this.element.querySelector('.section-roadmap'));

        new ChangeButton(this.element.querySelector('.section-changebtn'));

        new BackToTop(document.getElementById('backtotop'));
    };
    

}