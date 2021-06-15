


export default class Section {
    
    constructor(element) {
        this.element = element;
        this.render();
        this.setup()
        
    };

    template () { return ''; };

    setup () { };

    render () {
        this.element.innerHTML = this.template();
    };    

}