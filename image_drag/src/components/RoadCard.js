

export default class RoadCard {

    constructor(element, data) {

        this.element = element;
        this.data = data;

        this.li = document.createElement("li");
        this.li.className = 'class-card';

        this.element.appendChild(this.li);
        
        this.render();
    };

    render() {
        console.log("RoadCard")
        const { data } = this.data;
        this.li.dataset.num = data.cNum;

        const img = document.createElement("img");
        img.className = 'class-image';
        img.dataset.src = data.img;
        
        const classContainer = document.createElement("div");
        classContainer.className = 'class-container';

        const classExp = document.createElement("div");
        classExp.className = 'class-exp';
        classExp.dataset.exp = data.exp;

        const classTotal = document.createElement("div");
        classTotal.className = 'class-total';
        classTotal.dataset.total = data.total;

        classContainer.appendChild(classExp);
        classContainer.appendChild(classTotal);

        this.li.appendChild(img);
        this.li.appendChild(classContainer);



    };

};