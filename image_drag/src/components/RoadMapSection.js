import View from '../components/View.js';
import ArrowSection from '../components/ArrowSection.js';
import roadMapCardApi from '../api/roadMapCardApi.js';
import RoadMapCard from '../components/RoadMapCard.js';


export default class RoadMapSection extends View {


    mount () {
        this.setRoadMapContainer();
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
                

                const CardListElement = document.createElement('div');
                CardListElement.classList.add('class-list-container');
                roadMapContainer.appendChild(CardListElement);

                new ArrowSection(arrowContainer);

                new RoadMapCard(CardListElement, { data: item.info });
               
            })

            
            this.lazyLoadObserver();
            
        })

    };

    lazyLoadObserver() {
        
            const callBack = (entries, observer) => {
                
                entries.forEach(entry => {

                    //isIntersecting 해당 엘리먼트가 보이는지 표시
                    if (!entry.isIntersecting) {
                        return;
                    }
                    


                    // 해당 엘리먼트 해제
                    observer.unobserve(entry.target);


                    //엘리먼트가 보이는 상태일 경우 이미지 로딩
                    const target = Array.from(entry.target.querySelectorAll('li'));
                    target.forEach(element => {
                        const classImage = element.querySelector('.class-image');
                        const classExp = element.querySelector('.class-exp')


                        classImage.src = classImage.dataset.src;
                        classExp.innerText = classExp.dataset.exp;

                    })        
                    
                });

            };
        
        
        const io = new IntersectionObserver(callBack);
        //엘리먼트 등록roadmap-container
        const classdListContainer = Array.from(document.getElementsByClassName('class-list-container'));

       
        classdListContainer.forEach( element => {
            io.observe(element);
        })


    };


    template () { 

        return `
            <div class="inner">
            </div>
        `;
     };

};




