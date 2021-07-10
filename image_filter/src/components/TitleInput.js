

export default function TitleInput({ app, state }){

    this.state = state;
    this.filter = document.createElement('div');
    this.filter.className = 'filter';


    this.filterTitle = document.createElement('div');
    this.filterTitle.className = 'filter-title';
    this.filterTitle.innerText = '제목';


    this.filterValue = document.createElement('div');
    this.filterValue.className = 'filter-value';

    this.titleInput = document.createElement('input');
    this.titleInput.type = 'text';
    this.titleInput.name = 'title';

    this.filterValue.appendChild(this.titleInput);

    this.filter.appendChild(this.filterTitle);
    this.filter.appendChild(this.filterValue);

    app.appendChild(this.filter);


    this.setState = (newState) => {
        this.state = newState;
        this.titleInput.value = this.state;
    };


};