
const DATA = ['무도가','총잡이','전투법사','마녀','검호','흑마도사','춤꾼'];


export default function Job({ app }){

    this.filter = document.createElement('div');
    this.filter.className = 'filter';


    this.filterTitle = document.createElement('div');
    this.filterTitle.className = 'filter-title';
    this.filterTitle.innerText = '직업';


    this.filterValue = document.createElement('div');
    this.filterValue.className = 'filter-value';

    this.filter.appendChild(this.filterTitle);
    this.filter.appendChild(this.filterValue);

    app.appendChild(this.filter);


    this.render = () => {


        this.filterValue.innerHTML = 
                    DATA.reduce((html, day) => {

                        html += `<label> ${day} </label>
                                <input type="checkbox" name='day' value=${day}> 
                        
                                `
                        return html;
                    },'');
    }

    this.render();

};