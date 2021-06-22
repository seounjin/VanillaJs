import View from "./View.js";
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

                new CardModal(classCard, classCard.querySelector('.class-image').dataset.src);
            }
            
        }));
        
    }


};



// import View from "./View.js";
// import CardModal from "./CardModal.js";


// export default class RoadMapCard extends View {


//     setEvent () {

//         const classList = this.element.querySelector('.class-list');
        
//         classList.addEventListener('click', ( event => {

//             if (event.target.dataset.src){
//                 new CardModal(event.target.dataset.src);
//                 console.log("data", this.element)
//             }

//         }));
        
//     }
    
//     template () { 
//             console.log("RoadMapCard")

//             const { data } = this.data;

//             return data.reduce((html, item) => {
//                 html += `
//                             <li class="class-card">
//                                 <img class="class-image" data-src=${item.img} >
//                                 <div class="class-container">
//                                     <div class="class-exp" data-exp=${item.exp}></div>
//                                     <div class="class-total" data-total=${item.total}></div>
//                                 </div>
//                             </li>
                        
//                         `

//                     return html;

//                 }, '<ul class="class-list" data-position="0">') + '</ul>';
//     };

   
// };


