import View from '../components/View.js';

export default class ArrowSection extends View{


    setEvent() {

        // 오른쪽 arrow 버튼
        const slideNext = this.element.querySelector('.slide-next');
        
        slideNext.addEventListener('click', ((event) => {
        
        // ul 태그
        const classListContainer = event.target.parentElement.parentElement.nextElementSibling;
        const classList = classListContainer.childNodes[0];
        let dataPosition = classList.getAttribute('data-position');
        
        //li 길이 (카드 갯수)
        const liList = classList.getElementsByTagName('li');
        
        // clientWidth 실제 컨네이너 크기
        if (classListContainer.clientWidth < (liList.length * 260 + Number(dataPosition))) {
            // 오른쪽으로 이동
            dataPosition = Number(dataPosition) - 260;
            
            if (classListContainer.clientWidth > (liList.length * 260 + Number(dataPosition))) {
                slideNext.style.color = '#cfd8dc';
                slideNext.classList.remove('slide-next-hover');
            }
            //오른쪽 arrow버튼 활성화
            slideNext.style.color = '#2f3059';
            slideNext.classList.add('slide-next-hover');

        } 

        classListContainer.style.transition = 'transform 1s';
        // x축으로 왼쪽 or 오른쪽 이동 
        classListContainer.style.transform = 'translateX(' + String(dataPosition) + 'px)';
        classListContainer.childNodes[0].setAttribute('data-position', dataPosition)

    }));


        const slidePrev = this.element.querySelector('.slide-prev');
        
        slidePrev.addEventListener('click', ((event) => {
        
        // ul 태그
            const classListContainer = event.target.parentElement.parentElement.nextElementSibling;
            const classList = classListContainer.childNodes[0];
            let dataPosition = classList.getAttribute('data-position');
            
            
            if (Number(dataPosition) < 0) {
                dataPosition = Number(dataPosition) + 260;

                slidePrev.style.color = '#2f3059';
                slidePrev.classList.add('slide-prev-hover');
                
                if (Number(dataPosition) === 0) {
                    slidePrev.style.color = '#cfd8dc';
                    slidePrev.classList.remove('slide-pre-hover');
                    
                }
            
            }
        
        classListContainer.style.transition = 'transform 1s';
        classListContainer.style.transform = 'translateX(' + String(dataPosition) + 'px)';
        classListContainer.childNodes[0].setAttribute('data-position', dataPosition);  

    }));
        

}


    


    
    template () { 
        
        
        return `
                <i class="fas fa-chevron-circle-left slide-prev"></i>
                <i class="fas fa-chevron-circle-right slide-next"></i>
                `
    }
}