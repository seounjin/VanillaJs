

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

        //좋아요
        const thumbUp = document.createElement("i");
        thumbUp.className = 'far fa-thumbs-up thumb-up';

        const like = document.createElement("span");
        like.className = 'class-like';
        like.dataset.like = data.like;

        
        //싫어요
        const thumbDown = document.createElement("i");
        thumbDown.className = 'far fa-thumbs-down thumb-down';

        const disLike = document.createElement("span");
        disLike.className = 'class-dislike';
        disLike.dataset.dislike = data.dislike;

        
        classTotal.appendChild(thumbUp);
        classTotal.appendChild(like);
        classTotal.appendChild(thumbDown);
        classTotal.appendChild(disLike);

        classContainer.appendChild(classExp);
        classContainer.appendChild(classTotal);

        this.li.appendChild(img);
        this.li.appendChild(classContainer);



    };

};