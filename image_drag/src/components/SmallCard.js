import Card from "./Card.js"


export default class SmallCard extends Card {


    // constructor(element, data) {
    //     this.element = element
    //     this.data = data
    // };

    template () {
        // this.cardList = this.element.querySelector('.character-container');


        // /<div class="character"> </div>

        // return data.reduce((html, item, index) => {
        //     html += `<li data-keyword="${item.keyword}"><span class="number">${index + 1}</span>${item.keyword}</li>`
            
        //     return html
        //   }, '<ul class="list">') + "</ul>"
        
    //     <div class="skill">
    //     <i class="fab fa-python skill-icon python-style"></i>
    //     <div class="skill-title">
    //       <div class="skill-name">업무 자동화</div>
    //       <div class="skill-usage">크롤링/자동매매</div>
    //     </div>
    //   </div>

        console.log(this.data)

        return this.data.reduce((html, item) => {

            html += `
                        <div class="character-name">${item.name}</div>
                        <div class="character-job">${item.job}</div>  
                    `
            console.log("html", html)
            return html;
        }, ``);
                        
        // return '하이';
        
    }




}