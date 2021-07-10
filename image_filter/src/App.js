import TitleInput from './components/TitleInput.js';
import Category from './components/Category.js';
import Job from './components/Job.js';
import End from './components/End.js';
import ButtonSection from './components/ButtonSection.js';

import api from './api/troubleApi.js';


export default function App(app){

    this.state = {
        title:'',
        category:[],
    };

    this.target = document.createElement('form');
    this.target.className = 'filters';

    app.appendChild(this.target);
    

    const titleInput = new TitleInput({ app:this.target, state:this.state.title });
    const category = new Category({ app:this.target, state:this.state.category });
    const job = new Job({ app:this.target });
    const end = new End({ app:this.target });
    const buttonSection = new ButtonSection({ app:this.target });


    const requestApi = async() => {

        try {
            const data = await api.requestCategory();
            this.setState({...this.state, category:data});

        } catch (error) {
            throw new Error('requestApi',error);
        }

    };
    
    

    requestApi();    
    
    this.setState = (newState) => {
        this.state = newState;
        category.setState(this.state.category);
    };

    // setEvent
    this.target.addEventListener('submit', e => {
        e.preventDefault(); 
        const info = e.target.character.value;        

        if (info){
            console.log("info", info)
        }
        
    

    });
    
    this.target.addEventListener('keydown', e => {
        if (e.keyCode === 13){
            e.preventDefault();
        }
    });
    
    

};