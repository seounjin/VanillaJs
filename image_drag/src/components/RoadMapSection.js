import View from '../components/View.js';
import ArrowSection from '../components/ArrowSection.js';
import roadMapCardApi from '../api/roadMapCardApi.js';
import RoadMapCard from '../components/RoadMapCard.js';

import { CardRequest } from "../_actions/modal_actions.js"


export default class RoadMapSection extends View {


    mount () {
        this.setRoadMapContainer();
    }

    setRoadMapContainer () {

        window.store.dispatch(CardRequest());
        const info = window.store.getState();
                

            info.data.map( item => {
                
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
                
                
                new RoadMapCard(CardListElement, { data: item.info, num: item.num});
               
            });

            
            this.lazyLoadObserver();
            
        

    };

    lazyLoadObserver() {
        
            const callBack = (entries, observer) => {
                
                entries.forEach(entry => {

                    //isIntersecting ?????? ??????????????? ???????????? ??????
                    if (!entry.isIntersecting) {
                        return;
                    }
                    


                    // ?????? ???????????? ??????
                    observer.unobserve(entry.target);


                    //??????????????? ????????? ????????? ?????? ????????? ??????
                    const target = Array.from(entry.target.querySelectorAll('li'));
                    target.forEach(element => {
                        const classImage = element.querySelector('.class-image');
                        const classExp = element.querySelector('.class-exp');
                        
                        const classLike = element.querySelector('.class-like');
                        const classDisLike = element.querySelector('.class-dislike');
                        
                        classImage.src = classImage.dataset.src;
                        classExp.innerText = classExp.dataset.exp;


                        classLike.innerText = classLike.dataset.like;
                        classDisLike.innerText = classDisLike.dataset.dislike;


                    })        
                    
                });

            };
        
        
        const io = new IntersectionObserver(callBack);
        //???????????? class-list-container
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






// import View from '../components/View.js';
// import ArrowSection from '../components/ArrowSection.js';
// import roadMapCardApi from '../api/roadMapCardApi.js';
// import RoadMapCard from '../components/RoadMapCard.js';

// import { CardRequest } from "../_actions/modal_actions.js"


// export default class RoadMapSection extends View {


//     mount () {
//         this.setRoadMapContainer();
//     }

//     setRoadMapContainer () {
//         // roadMapCardApi.roadMapCardList()

//         roadMapCardApi.roadMapCardList().then( data => {
            
//             data.map( item => {
                
//                 const inner = this.element.querySelector('.inner');
//                 const roadMapContainer = document.createElement('div');
//                 roadMapContainer.classList.add('roadmap-container');
//                 inner.appendChild(roadMapContainer);

//                 const titleContainer = document.createElement('div');
//                 titleContainer.classList.add('roadmap-title-container');
//                 roadMapContainer.appendChild(titleContainer);
                
//                 const roadMapTitle =  document.createElement('div');
//                 roadMapTitle.classList.add('roadmap-title');
//                 roadMapTitle.innerHTML = item.title;

//                 const arrowContainer = document.createElement('div');
//                 arrowContainer.classList.add('arrow-container');

//                 titleContainer.appendChild(roadMapTitle);
//                 titleContainer.appendChild(arrowContainer);
                

//                 const CardListElement = document.createElement('div');
//                 CardListElement.classList.add('class-list-container');
//                 roadMapContainer.appendChild(CardListElement);

//                 new ArrowSection(arrowContainer);

//                 new RoadMapCard(CardListElement, { data: item.info });
               
//             });

            
//             this.lazyLoadObserver();
            
//         });

//     };

//     lazyLoadObserver() {
        
//             const callBack = (entries, observer) => {
                
//                 entries.forEach(entry => {

//                     //isIntersecting ?????? ??????????????? ???????????? ??????
//                     if (!entry.isIntersecting) {
//                         return;
//                     }
                    


//                     // ?????? ???????????? ??????
//                     observer.unobserve(entry.target);


//                     //??????????????? ????????? ????????? ?????? ????????? ??????
//                     const target = Array.from(entry.target.querySelectorAll('li'));
//                     target.forEach(element => {
//                         const classImage = element.querySelector('.class-image');
//                         const classExp = element.querySelector('.class-exp');
//                         const classTotal = element.querySelector('.class-total');

//                         classImage.src = classImage.dataset.src;
//                         classExp.innerText = classExp.dataset.exp;
//                         classTotal.innerText = classTotal.dataset.total;
//                     })        
                    
//                 });

//             };
        
        
//         const io = new IntersectionObserver(callBack);
//         //???????????? class-list-container
//         const classdListContainer = Array.from(document.getElementsByClassName('class-list-container'));

       
//         classdListContainer.forEach( element => {
//             io.observe(element);
//         })


//     };


//     template () { 

//         return `
//             <div class="inner">
//             </div>
//         `;
//      };

// };




