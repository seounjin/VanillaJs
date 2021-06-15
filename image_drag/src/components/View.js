

export default class View {
    
    constructor(element, data) {
        this.element = element;
        this.data = data;

        this.setup();
        this.render();
        this.mount();
        this.setEvent();
        
    };

    template () { return ''; };

    setup () { };

    render () {
        this.element.innerHTML = this.template();
    };
    
    mount () {};

    setEvent () {};

    // setState (newState) {
    //     this.state = {...this.state, ...newState };
    //     this.render();
    // };
    

};