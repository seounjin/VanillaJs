export default function Breadcrumb({ app, state, keywordClick }){

    this.state = state;
    
    this.target = document.createElement('nav');
    this.target.className = 'Breadcrumb';

    app.appendChild(this.target);

    
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };


    this.render = () => {
        
        this.target.innerHTML = `<div class="keyword" data-index='0' data-id="root">root</div>
        ${this.state.reduce( (html, node, index) => {
           html += `<div class="keyword" data-id=${node.id} data-index=${index + 1}>
                ${ node.name }
            </div>`
            return html;
        },'')}   `


    };

    this.render();

    this.target.addEventListener('click', e => {
    
        const keyword = e.target.closest('.keyword');
        
        if (keyword){

            const nodeId = keyword.dataset.id;
            const index = keyword.dataset.index;

            keywordClick(index);
        }


        // console.log("keyword", keyword);
        
    
    });

};