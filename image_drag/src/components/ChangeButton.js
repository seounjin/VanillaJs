


export default class ChangeButton {

    constructor (element) {
        this.element = element;
        this.sunMoonIcon = document.createElement('i');
        this.wdText = document.createElement('span');

        this.currentMode = window.matchMedia("(prefers-color-scheme: dark)").matches
                            ? "dark"
                            : "light";


        
        

        this.render();
        this.setEvent();
    };

    toggleMode() {
        const body = document.querySelector('body');

        if (this.currentMode == "dark") {
            this.currentMode = "light";
            body.className = "light";

        } else {
            this.currentMode = "dark";
            body.className = "dark";
        }
        
        this.sunMoonIcon.className = this.currentMode === 'dark' ? 'fas fa-sun sun-btn': 'fas fa-moon moon-btn'; 
        this.wdText.className = this.currentMode === 'dark' ? 'dark-text':'white-text';
        this.wdText.innerText = this.currentMode === 'dark' ? '라이트모드로 보기' : '다크모드로 보기';
    };
    
    
    render () {        
        const body = document.querySelector('body');

        body.className = this.currentMode === "dark" ? "dark" : "light"

        this.sunMoonIcon.className = this.currentMode === 'dark' ? 'fas fa-sun sun-btn': 'fas fa-moon moon-btn'; 
        this.wdText.className = this.currentMode === 'dark' ? 'dark-text':'white-text';
        this.wdText.innerText = this.currentMode === 'dark' ? '라이트모드로 보기' : '다크모드로 보기';

        this.element.appendChild(this.sunMoonIcon);
        this.element.appendChild(this.wdText);


    };

    setEvent () {

        this.element.addEventListener('click', () => {
            
            this.toggleMode();

        });
    };

   
};