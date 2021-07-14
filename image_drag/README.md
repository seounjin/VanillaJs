# Image_Drag


- 프로젝트 설명: 인프런에서 수강한 내용 기반으로 여러가지 기능을 추가한 토이프로젝트입니다.
- 사용스택: JavaScript, HTML, CSS
- 개발환경: Ubuntu
- 개발도구: Visual Studio Code
- 프로젝트기간: 21. 06 ~ 21. 07
- 프로젝트인원: 1명

## 주요기능


- 클래스형 컴포넌트 개발
- 카드 애니메이션
- 모달 기능
- Lazy Loading
- 리덕스를 구현하여 좋아요,싫어요 상태관리
- 다크모드 전환

## 동작화면


<img src="https://github.com/seounjin/VanillaJs/blob/main/image_drag/img/screenshot2.gif" width=1000  />


## 상세 설명


### 시멘틱 마크업

```html
<header>
      <!-- 메뉴 -->
</header>

<section>
     <!-- 메인 이미지 -->
</section>

<main>
    <section class="section-character"></section>
    <section class="section-roadmap"></section>
</main>

<footer>
</footer>
```

### 컴포넌트 구성

<img src="https://github.com/seounjin/VanillaJs/blob/main/image_drag/img/drag.png" width=600  />

- 화면이 랜더링 된 후 해야하는 작업(하위 컴포넌트를 마운트)이 있는 컴포넌트들은 View 클래스를 상속받아 생성함.

```jsx
export default class View {
    
    constructor(element, data) {
        this.element = element;
        this.data = data;

        this.setup();
        this.render();
        this.mount();
        this.setEvent();
        
    };

    template () { return ''; };

    render () {
        this.element.innerHTML = this.template();
    };
    
    mount () {};

    setEvent () {};

};
```- 프로젝트 설명: 인프런에서 수강한 내용 기반으로 여러가지 기능을 추가한 토이프로젝트입니다.
113
- 사용스택: JavaScript, HTML, CSS
114
- 개발환경: Ubuntu

### 투명도 적용한 메인 이미지

- 이미지 클래스위에 컨테이너 클래스를 덮는다.
- background-size: cover 배경에 사용하는 요소를 다 채울 수 있게 축소 되거나 확대 된다. 가로세로비율 유지.

```css
.img {
    height: 360px;
    background-image:url("../../img/troubleshooter.jpg");
    background-size: cover;
    background-position: center 20%;
    background-repeat: no-repeat;
    z-index: 1;
}
```

```css
.img-container {
    width:100%;
    height:100%;
    background-color:rgb(47, 48, 89);
    opacity: 0.8;
    margin-top: 60px;
    z-index: 2;
}
```

### 카드 애니메이션

- 실제 컨네이너크기 ul과 카드의 갯수li 비교함.
- 카드 크기는 260px.
- 컨네이너dataset 초기값 0을 할당.
- 오른쪽 에로우버튼 클릭씨 -260
- 왼쪽 에로우버튼 클릭씨 +260
- dataset 크기 기준으로 카드 이동.
- transition 을 'transform 1s' 지정하여 카드가 움직이는 애니메이션 표현.

```jsx
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
  } 

classListContainer.style.transition = 'transform 1s';
```

### Dark Mode

- 컴포넌트 생성자에 현재 모드를 파악할 수 있는 변수(current)를 할당한다음, 이 변수 토대로 class name(dark, light) 변환.
- dark class를 만든다음 dark mode 버튼을 클릭할때마다 (current)을 참조하여 class name을 변환함.

```css
@media (prefers-color-scheme: dark) {
    /* 원하는 css 사용*/
		:root {
        --color-mode: "dark";
        --background: var(--color-dark);
        --text-color: var(--color-white);
    }
}
```

```css
.dark {
    --color-mode: "dark";
    --background: var(--color-dark);
    --text-color: var(--color-white);
}
```

### Lazy Loading

- 페이지에 액세스할 때 모든 콘텐츠를 대량으로 로드하는 대신 사용자가 필요한 페이지의 일부에 액세스할 때 콘텐츠를 로드할 수 있으므로 메모리를 절약할 수 있다.
- 비동기적으로 실행 되기 때문에 scroll 같은 이벤트 기반의 요소 관찰에서 발생하는 랜더링 성능이나 이벤트 연속 호출문제 없이 사용이 가능하다.
- IntersectionObserver는 브라우저 Viewport와 설정한 Element의 교차점을 관찰하며, Element가 Viewport에 포함되는지 안되는지를 구별하는 기능을 제공한다.

```jsx
// 관찰자 초기화 및 관찰할 대상을 지정한다.
const io = new IntersectionObserver(callBack);// callback은 entries, observer인수를 가짐
```

```jsx
const callBack = (entries, observer) => {
                
                  entries.forEach(entry => {

	                    // isIntersecting 해당 엘리먼트가 보이는지 표시
	                    if (!entry.isIntersecting) {
	                        return;
	                    }

	                    // 해당 엘리먼트 관찰 해제
	                    observer.unobserve(entry.target);

	                    // 엘리먼트가 보이는 상태일 경우 이미지 로딩
	                    const target = Array.from(entry.target.querySelectorAll('li'));
	                    target.forEach(element => {
	                        const classImage = element.querySelector('.class-image');
	                        classImage.src = classImage.dataset.src;
	                    })          
                });

            };
```

```jsx
const div = document.querySelector('div')
//관찰자 등록
io.observe(div);
```

### Modal


- 카드를 감싸고 있는 classList에 이벤트를 걸어놓는다.
- 카드 클릭씨 Bubbling이 발생하여 모달이 생성되는 이벤트가 발생한다.

```jsx
const classList = this.element.querySelector('.class-list');
        
classList.addEventListener('click', ( event => {
		      const path = event.path;
          const classCard = path.find(data => data.className == 'class-card');
            
          if (classCard){
               const data = { img:classCard.querySelector('.class-image').dataset.src, 
                              exp:classCard.querySelector('.class-exp').dataset.exp }
                    
               new CardModal(classCard, data);
				 }
}));
```

- overlay에 클릭 이벤트를 걸어두어 모달창 바깥부분 클릭시 모달을 제거함.

```html
<wrapper> <!-- 모달창 바깥부분을 감싸는 영역--> 
	<overlay></overlay> <!--wrapper 위를 감싸는 영역--> 
	<modal></modal> <!--모달--> 
</wrapper>
```

### Redux

Store

- getState: 스토어의 상태를 가져옴. 스토어 외부에서는 값변경이 불가능하다.
- subscribe: 리스너에 함수를 전달하였다가 dispatch될때 리스너에 있는 함수를 호출함.
- dispatch: 액션이 발생하였다는 것을 리듀서에 알려줌.

```jsx
export function createStore(reducer) {

    let state;
    const listeners = [];

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(f => { f()});
    };

    const subscribe = f => {
        listeners.push(f)};

    const getState = () => state;

    return { dispatch, getState, subscribe };
};
```

Action

- 액션은 type 속성값을 갖고있는 객체이다.
- View에서 상태값을 변경시키고 싶을때는 액션을 발생시킨다.

```jsx
export function CardRequest () {
    
    const request = new Promise((res) => setTimeout(res(data), 3000))
    
    return {
        type: CARD_REQUEST,
        payload: data
    };
};
```

Reducer

- 리덕스의 상태값을 수정하는 유일한 방법은 액션 객체와 함께 디스패치 함수로 접근하는것이다.
- state와 action을 받아서 새로운 상태를 리턴해준다.
- 즉 상태값은 불변 객체로 관리한다.
- spread 연산자를 사용하여 새로운 객체를 만든다.

```jsx
export default function (state={}, action) {

    switch(action.type) {
        case CARD_REQUEST:
            return {...state, data: action.payload }       
		}
}
```

## 참고

[https://www.inflearn.com/course/프런트엔드-풀스택-2](https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%92%80%EC%8A%A4%ED%83%9D-2)
