

export default class ArrowSection {

    constructor (element, callBack) {

        this.element = element;
        this.callBack = callBack;
        
        this.render();
        this.setEvent();
        
    }



    setEvent() {
        const slideNext = this.element.querySelector('.slide-next')
        slideNext.addEventListener('click', ((e)=> console.log("하이",this.callBack)));
    }

    transformPrev() {
        console.log("이벤트 리스너");
        console.log(this.target)
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