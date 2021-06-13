import Card from "./Card.js"


export default class RoadMapCard extends Card {

    
    template () { 

            return this.data.reduce((html, item) => {

                html += `<ul class="class-list">
                            <li class="class-card">
                                <img src=${item.img} class="class-image">
                                <div class="class-container">
                                    
                                    <div class="class-exp">${item.exp}</div>
                                                                    
                                </div>
                            </li>
                        </ul>
                        `

                    return html;

                }, '')
    };

   
}