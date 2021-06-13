import Section from '../components/Section.js';
import ArrowSection from '../components/ArrowSection.js';
import roadMapCardApi from '../api/roadMapCardApi.js';
import RoadMapCard from '../components/RoadMapCard.js';


export default class RoadMapSection extends Section {



    setup () {
        //타이틀, 그림 가져오기
        const temp = {}
        new ArrowSection(this.element.querySelector('.arrow-container'), temp);

        this.setRoadMapCard();
    }



    setRoadMapCard () {
        roadMapCardApi.roadMapCardList().then(data => {
            new RoadMapCard(this.element.querySelector('.class-list-container'), data);
        })
    }

    template () { 

        return `
            <div class="inner">
                <div class="roadmap-container">
                
                    <div class="roadmap-title-container">
                            <div class="roadmap-title">스크린샷</div>
                            <div class="arrow-container"></div>
                    </div>
                
                    <div class="class-list-container"></div>
                    
                </div>
            </div>
        `;
     };

}