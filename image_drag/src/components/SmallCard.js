import Card from "./Card.js"


export default class SmallCard extends Card {

    
    template () {
  

        return this.data.reduce((html, item) => {

            html += `   <div class="character">
                            <img src=${item.img} class="character-icon">
                            <div class="character-title">
                                <div class="character-name">${item.name}</div>
                                <div class="character-job">${item.job}</div>
                            </div>
                        </div>
                    `
            return html;
        }, '');
                        
        
    }




}