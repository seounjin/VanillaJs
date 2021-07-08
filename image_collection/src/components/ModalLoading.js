

export default function ModalLoading({ app, state }) {
    
    this.state = state;
    this.target = document.createElement('div');
    this.target.className = 'Modal Loading';

    app.appendChild(this.target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render = () => {
        

        this.target.innerHTML = `<div class="content">${this.state ?
                                    `<img src=${"./img/t6.jpg"}></img>`
                                     : '' }
                                </div>`
        
        this.target.style.display = this.state ? 'block': 'none';
    
    };

    this.render();

    
};