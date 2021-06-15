import View from "./View.js"


export default class RoadMapCard extends View {

    
    template () { 

            const { data } = this.data;

            return data.reduce((html, item) => {
                html += `
                            <li class="class-card">
                                <img src=${item.img} class="class-image">
                                <div class="class-container">
                                    <div class="class-exp">${item.exp}</div>
                                    <div>임시</div>
                                            

                                </div>
                            </li>
                        
                        `

                    return html;

                }, '<ul class="class-list" data-position="0">') + '</ul>';
    };

   
};