import SmallCardSection from './components/SmallCardSection.js';
import RoadMapSection from './components/RoadMapSection.js';


export default class App {

    constructor(element) {
        this.element = element;
        
        new SmallCardSection(this.element.querySelector('.section-character'));

        new RoadMapSection(this.element.querySelector('.section-roadmap'));

    };



}