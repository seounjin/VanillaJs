export default function Nodes({ app, state, nodeClick, backClick}){

    this.state = state;
    this.target = document.createElement('div');
    this.target.className = 'Nodes';

    app.appendChild(this.target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };


    this.render = () => {

        const preButton = this.state.root ? '<div class="Node"> <i class="fas fa-chevron-left prev"></i></div>' : '';

        this.target.innerHTML = preButton + this.state.nodes.reduce( (html, node) => {
            html += `<div class='Node' data-nodeid=${node.id}>
                <img src=${node.filePath}></img>
                <div>${node.name}</div>
            </div>`
            return html;
        },'');

    };
    
    this.render();

    // 이벤트 버블링
    this.target.addEventListener('click', e => {

        const node = e.target.closest('.Node');
        

        if (node) {
            const nodeId = node.dataset.nodeid;
            
            if(!nodeId){
                backClick();
                return;
            }

            const selectNode = this.state.nodes.find(node => node.id === nodeId);

            if (selectNode){
                nodeClick(selectNode);
            }
            
        } 

    });
};

