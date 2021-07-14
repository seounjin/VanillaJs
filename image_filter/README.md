# Image_Filter


- 프로젝트 설명: 모기업 과제를 복기한 토이프로젝트
- 사용스택: JavaScript, HTML, CSS
- 개발환경: Ubuntu
- 개발도구: Visual Studio Code
- 프로젝트기간: 21. 07 ~ 21. 07
- 프로젝트인원: 1명

## 주요기능


- 함수형 컴포넌트 개발
- form, input 태그 사용
- 전개연산자 사용

## 동작화면

<img src="image-filter.gif" width=1000  />


## 상세 설명


### 컴포넌트 구성

<img src="https://github.com/seounjin/VanillaJs/blob/main/image_filter/img/filter_conpoment.png" width=600  />

### 함수형 컴포넌트

- 모든 컴포넌트의 상위 컴포넌트인 App 에서 이벤트 및 상태 관리를 하였습니다.
- 클래스형컴포넌트로 상속받아 구현하게 되면 필요하지 않는 기능도 추가적으로 상속받기 때문에 함수형 컴포넌트로 개발하였습니다.

```jsx
export default function App(app){

    this.state = {
        category:[],
        cardlist:[],
    };

    this.target = document.createElement('form');
    this.target.className = 'filters';
    app.appendChild(this.target);
	 
		...
    const category = new Category({ app:this.target, state:this.state.category });
    const cardSection = new CardSection({ app, state:this.state.cardlist });

    const requestApi = async() => {
		
		...
    
		};
    
    requestApi();    

    this.setState = (newState) => {
        this.state = newState;
        category.setState(this.state.category);
        cardSection.setState(this.state.cardlist);
    };

    this.target.addEventListener('submit', async(e) => {
        e.preventDefault(); 
				...
    });
};
```

### form, input 태그

- form 태그에 이벤트리스너를 사용하여 checkbox, radio의 체크된 정보를 가져옵니다.
- input type= submit 를 사용하여 체크된 정보를 api로 전달합니다.

```jsx
this.target.addEventListener('submit', async(e) => {
        e.preventDefault(); 
        

        const titleValue = e.target.title.value;        
        const characterValue = e.target.character.value;    
        
        const jobList = [];
        Array.from(e.target.job).map(item => { if (item.checked) {jobList.push(item.value)}});
        const endValue = e.target.end.checked ? e.target.end.checked : '';     
        let query = '/card?';
		    
				...
        
			  try {
            const res = await api.requestCardList(query);
            this.setState({...this.state, cardlist:res});
        } catch (error) {
            throw new Error('submit',error);
        }

        
    });
```

### 전개연산자

- 객체를 수정하지 않고 전개연산자(spread)를 사용하여 새로운 객체를 만들기 때문에 불변성을 지킬 수 있습니다.

```jsx
		try {
          const data = await api.requestCategory();
          this.setState({...this.state, category:data});

        } catch (error) {
            throw new Error('requestApi',error);
		    }
```
