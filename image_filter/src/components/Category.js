



export default function Category({ app, state }){

    this.state = state;
    this.filter = document.createElement('div');
    this.filter.className = 'filter';


    this.filterTitle = document.createElement('div');
    this.filterTitle.className = 'filter-title';
    this.filterTitle.innerText = '캐릭터';


    this.filterValue = document.createElement('div');
    this.filterValue.className = 'filter-value';

    this.filter.appendChild(this.filterTitle);
    this.filter.appendChild(this.filterValue);

    app.appendChild(this.filter);


    this.setState = (newState) => {
        // 이전상태와 비교해서 랜더링 할지 결정
        if(newState === this.state) {  return;}
        this.state = newState;
        this.render();
    };

    this.render = () => {
        console.log("cate",this.state);
        this.filterValue.innerHTML = 
                    this.state.reduce((html, character) => {
                        html += `<label> ${character} </label>
                                <input type="radio" name='character' value=${character}> 
                        
                                `
                        return html;
                    },'');

    }

};