
const DATA = ['무도가','백마도사','전투법사','마녀','검호','흑마도사','백기사'];


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
                    DATA.reduce((html, job) => {

                        html += `<label> ${job} </label>
                                <input type="checkbox" name='job' value=${job}> 
                        
                                `
                        return html;
                    },'');
    }

    this.render();

};