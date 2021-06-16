import View from "./View.js"


export default class RoadMapCard extends View {

    
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


