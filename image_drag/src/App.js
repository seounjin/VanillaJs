import SmallCardSection from './components/SmallCardSection.js';


export default class App {

    constructor(element) {
        this.element = element;

        new SmallCardSection(element);

    };



}