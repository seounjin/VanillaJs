import CardModal from "./CardModal.js";
import RoadCard from "./RoadCard.js";

export default class RoadMapCard {

    constructor (element, data) {
        this.element = element;
        this.data = data;
        this.ul = document.createElement("ul");
        this.ul.className = 'class-list';
        this.ul.dataset.position = '0';

        this.element.appendChild(this.ul);
        this.render();
        this.setEvent();
    };
    
    render () { 

        const { data, num } = this.data;
        
        this.ul.dataset.num = num;
        
        data.map(item => {
            //img exp total
            new RoadCard(this.ul, {data:item});

        });

    };

    setEvent () {

        const classList = this.element.querySelector('.class-list');
        
        classList.addEventListener('click', ( event => {
            const path = event.path;
            const classCard = path.find(data => data.className == 'class-card');
            
            if (classCard){
                const data = { img:classCard.querySelector('.class-image').dataset.src, 
                              exp:classCard.querySelector('.class-exp').dataset.exp
                                }
                new CardModal(classCard, data);
            }
            
        }));
        
    }


};

