



export default function CardSection({ app, state }){

    this.state = state;
    this.section = document.createElement('section');
    
    app.appendChild(this.section);

    this.setState = (newState)=> {
        this.state = newState;
        this.render();
    };
    
    this.render = () => {

        this.section.innerHTML = this.state ? this.state.reduce((html,item) => {
            console.log("item",item.title, item.img, item.descript)
            html += `<div class='card-container'>
                        <div class='card-title-img'>
                            <div class='card-title'>${item.title}</div>
                            <img class='card-img' src=${item.img}></img>
                        </div>
                        <div class='card-descript'>${item.descript}</div>
                    </div>
                    `
            return html;
            },'')
                            : '';
       
    };


};