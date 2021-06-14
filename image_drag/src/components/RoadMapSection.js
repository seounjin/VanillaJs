import Section from '../components/Section.js';
import ArrowSection from '../components/ArrowSection.js';
import roadMapCardApi from '../api/roadMapCardApi.js';
import RoadMapCard from '../components/RoadMapCard.js';


export default class RoadMapSection extends Section {



    setup () {
        this.setRoadMapContainer();
    }

    callBack () {
        console.log("콜백")
    }

    setRoadMapContainer () {

        roadMapCardApi.roadMapCardList().then( data => {
            
            data.map( item => {
                
                const inner = this.element.querySelector('.inner');
                const roadMapContainer = document.createElement('div');
                roadMapContainer.classList.add('roadmap-container');
                inner.appendChild(roadMapContainer);

                const titleContainer = document.createElement('div');
                titleContainer.classList.add('roadmap-title-container');
                roadMapContainer.appendChild(titleContainer);
                
                const roadMapTitle =  document.createElement('div');
                roadMapTitle.classList.add('roadmap-title');
                roadMapTitle.innerHTML = item.title;

                const arrowContainer = document.createElement('div');
                arrowContainer.classList.add('arrow-container');

                titleContainer.appendChild(roadMapTitle);
                titleContainer.appendChild(arrowContainer);
                
                
                new ArrowSection(arrowContainer, this.callBack);
        

                const CardListElement = document.createElement('div');
                CardListElement.classList.add('class-list-container');
                roadMapContainer.appendChild(CardListElement);

                new RoadMapCard(CardListElement, item.info);
               
                
            })


            
        })

    }


    template () { 

        return `
            <div class="inner">
            </div>
        `;
     };

}