import LikeDislike from './LikeDislike.js'


export default class CardModal{

    constructor (element, data) {
        this.element = element;
        this.data = data;
        const mainSection = document.querySelector('.main');
        this.modalWrapper = document.createElement('div');
        this.modalWrapper.classList.add('modal-wrapper');
        mainSection.appendChild(this.modalWrapper);
        
        this.render();
    }

    closeModal() {
        const modal = document.querySelector('.modal-wrapper');
        modal.remove();
    }

    render () {

        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';

        const modalTitle = document.createElement('div');
        modalTitle.className = 'modal-title';
        modalTitle.innerText = '제목';
                
        const closeButton = document.createElement('i');
        closeButton.className = 'far fa-times-circle modal-close';

        const modalImage = document.createElement('img');
        modalImage.className = 'modal-image';
        modalImage.src = this.data;

        const modalLikeDislike = document.createElement('div');
        modalLikeDislike.className = 'modal-Like-Dislike';

        overlay.addEventListener("click", () => {
            this.closeModal();
        });

        closeButton.addEventListener('click', () => {
            this.closeModal();
        });

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);
        modalContent.appendChild(modalHeader);

        modalContent.appendChild(modalImage);
        modalContent.appendChild(modalLikeDislike); 
        
        this.modalWrapper.appendChild(overlay);
        this.modalWrapper.appendChild(modalContent);

        new LikeDislike(modalLikeDislike, this.element);
    };
    

};