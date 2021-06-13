

export default class Card {
    
    constructor(element, data) {
        this.element = element;
        this.data = data;
        this.setup()
        this.render();
    };

    template () { return ''; };

    setup () { };

    render () {
        this.element.innerHTML = this.template();
    };

    setState (newState) {
        this.state = {...this.state, ...newState };
        this.render();
    };
    

}