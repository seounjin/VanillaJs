



export default function End({ app }){

    this.filter = document.createElement('div');
    this.filter.className = 'filter';


    this.filterTitle = document.createElement('div');
    this.filterTitle.className = 'filter-title';
    this.filterTitle.innerText = 'OP';


    this.filterValue = document.createElement('div');
    this.filterValue.className = 'filter-value';

    this.filter.appendChild(this.filterTitle);
    this.filter.appendChild(this.filterValue);

    app.appendChild(this.filter);


    this.render = () => {

        this.filterValue.innerHTML = `<label> check </label>
                                        <input type="checkbox" name='end' value="check"> 
                                    `
    }


    this.render();
};