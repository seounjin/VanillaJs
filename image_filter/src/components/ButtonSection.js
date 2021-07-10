


export default function ButtonSection({ app }){

    this.filterButton = document.createElement('div');
    this.filterButton.className = 'filter-button';


    this.reset = document.createElement('input');
    this.reset.type = 'reset';

    this.submit = document.createElement('input');
    this.submit.type = 'submit';


    this.filterButton.appendChild(this.reset);
    this.filterButton.appendChild(this.submit);

    app.appendChild(this.filterButton);


};