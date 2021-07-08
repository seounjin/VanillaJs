import Breadcrumb from './components/Breadcrumb.js';
import Nodes from './components/Nodes.js';
import Modal from './components/Modal.js';
import ModalLoading from './components/ModalLoading.js';

import api from './api/troubleApi.js';

export default function App(app){

    this.state = {
        root:false,
        nodes:[],
        depth:[],
        filePath:null,
        loading:false
    };



    const nodeClick = async(node) => {
        
        this.setState({...this.state, loading:true})

        try {
            if (node.type === 'DIRECTORY'){  
                
                const data = await api.nodeRequest(node.id);
                this.setState({...this.state, root:true, depth:[...this.state.depth, node], nodes:data, filePath:null, loading:false});

            }  else if (node.type === 'FILE'){
                this.setState({ ...this.state, filePath:node.filePath, loading:false});
            }
           
        } catch (error) {
            throw new Error('nodeClick',error);
        }

    };

    const backClick = async() => {

        this.setState({...this.state, loading:true})

        try {
            //back했을때 root
            if (this.state.depth.length <= 1){
                const nodeId = this.state.depth.pop();
                const data = await api.rootRequest();
                this.setState({...this.state, root:false, depth:[...this.state.depth], nodes:data,filePath:null, loading:false });

            } else {
            //back했을때 root 아닌경우
                const nodeId = this.state.depth.pop();
                const data = await api.nodeRequest(this.state.depth[this.state.depth.length - 1].id);
                this.setState({...this.state, root:true, depth:[...this.state.depth], nodes:data,filePath:null, loading:false});
            }

        } catch (error) {
            throw new Error('backClick',error);
        }

    };

    const keywordClick = async(index) => {
        

        // 현재경로일경우 아무일도 안일어남
        if (parseInt(index) === this.state.depth.length ){
            return;
        }

        this.setState({...this.state, loading:true});
        
        try {
            if (parseInt(index) === 0){
                const data = await api.rootRequest();
                this.setState({...this.state, root:false, depth:[], nodes:data,filePath:null, loading:false });

            } else {
                const nodeId = this.state.depth[index - 1].id;
                const data = await api.nodeRequest(nodeId);

                this.setState({...this.state, root:true, depth:this.state.depth.slice(0, index), nodes:data, filePath:null, loading:false});
            }

        } catch (error) {
            throw new Error('keywordClick',error);
        }
        
    };

    const breadcrumb = new Breadcrumb({ app, state: this.state.depth, keywordClick });
        
    const nodes = new Nodes({ app, state:{root: this.state.root, nodes: this.state.nodes}, nodeClick, backClick });

    const modal = new Modal({ app, state:this.state.filePath }); 

    const modalLoading = new ModalLoading({app, state:this.state.loading })

    this.setState = (newState) => {
        this.state = newState;

        breadcrumb.setState(this.state.depth);
        nodes.setState({root: this.state.root, nodes: this.state.nodes});
        modal.setState(this.state.filePath);
        modalLoading.setState(this.state.loading);
    };

    const requestApi = async() => {

        this.setState({...this.state, loading:true})
        
        try {
            const data = await api.rootRequest();
            this.setState({...this.state, root:false, nodes:data, loading:false });

        } catch (error) {
            throw new Error('requestApi',error);
        }
    };
    
    requestApi();

};