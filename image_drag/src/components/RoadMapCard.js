import View from "./View.js";
import CardModal from "./CardModal.js";

export default class RoadMapCard extends View {

    closeModal() {
        const modal = document.querySelector('.modal-wrapper');
        modal.remove();
    }

    setEvent () {

        const classList = this.element.querySelector('.class-list');
        
        classList.addEventListener('click', ( event => {

            if (event.target.dataset.src){
                new CardModal(event.target.dataset.src);            
            }

        }));
        


    }
    
    template () { 

            const { data } = this.data;

            return data.reduce((html, item) => {
                html += `
                            <li class="class-card">
                                <img class="class-image" data-src=${item.img} >
                                <div class="clss-container">
                                    <div class="class-exp" data-exp=${item.exp}></div>
                                    
                                </div>
                            </li>
                        
                        `

                    return html;

                }, '<ul class="class-list" data-position="0">') + '</ul>';
    };

   
};


