

export default class ArrowSection {

    constructor(element, data={}) {
        this.element = element;
        this.data = data;

        
        this.render();
    }



    template () { 
        
        return `
                <i class="fas fa-chevron-circle-left slide-prev"></i>
                <i class="fas fa-chevron-circle-right slide-next"></i>
                `
    
    }

    render () {
        this.element.innerHTML = this.template();
    }

}