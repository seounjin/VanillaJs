

export default function Modal({ app, state }) {
    
    this.state = state;
    this.target = document.createElement('div');
    this.target.className = 'Modal ImageViewer';

    app.appendChild(this.target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render = () => {
        

        this.target.innerHTML = `<div class="content">${this.state ?
                                    `<img src=${this.state}></img>`
                                     : ''   }
                                </div>`
        
        this.target.style.display = this.state ? 'block': 'none';
    
    };

    this.render();

    this.target.addEventListener('click', e => {

        if (e.target.className ==='Modal ImageViewer'){
            this.setState(null);
        }

    });

};

