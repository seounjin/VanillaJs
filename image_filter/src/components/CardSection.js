



export default function CardSection({ app }){

    this.section = document.createElement('section');
    
    app.appendChild(this.section);


    this.render = () => {

        this.section.innerHTML = `<div class='card-container'>
                                        <div class='card-title-img'>
                                            <div class='card-title'>카드</div>
                                            <img class='card-img' src='../../img/Ann.jpg'></img>
                                        </div>
                                        <div class='card-descript'>설명</div>
                                  </div>
                                    `
    };


    this.render();
};