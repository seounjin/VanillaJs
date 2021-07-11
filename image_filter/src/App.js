import TitleInput from './components/TitleInput.js';
import Category from './components/Category.js';
import Job from './components/Job.js';
import End from './components/End.js';
import ButtonSection from './components/ButtonSection.js';
import CardSection from './components/CardSection.js';

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
    const cardSection = new CardSection({ app });


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
    this.target.addEventListener('submit', async(e) => {
        e.preventDefault(); 
        

        const titleValue = e.target.title.value;        
        const characterValue = e.target.character.value;    
        
        const jobList = [];
        Array.from(e.target.job).map(item => { if (item.checked) {jobList.push(item.value)}});

        const endValue = e.target.end.checked ? e.target.end.value : '';     
        
        let query = '/card?';

        query += titleValue ? 'title=' + titleValue + '&' : '';
        query += characterValue ? 'charcter=' + characterValue + '&' : '';
        query += jobList.length !==0 ? 'job=' +  jobList.join('&job=') + '&': '';
        query += endValue ? 'op=' + endValue : '';

        if (query[query.length - 1] == '&'){
            query = query.slice(0,query.length - 1)
        }

        
        try {
            const res = await api.requestCardList(query);
            
            console.log("res");
        } catch (error) {
            throw new Error('submit',error);
        }

        
    });
    

    this.target.addEventListener('keydown', e => {
        if (e.keyCode === 13){
            e.preventDefault();
        }
    });
    
};