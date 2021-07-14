# Image_Collection


- 프로젝트 설명: 모기업 과제를 복기한 토이프로젝트입니다.
- 사용스택: JavaScript, HTML, CSS
- 개발환경: Ubuntu
- 개발도구: Visual Studio Code
- 프로젝트기간: 21. 07 ~ 21. 07
- 프로젝트인원: 1명

## 주요기능


- 함수형 컴포넌트 개발
- App에서 상태관리
- 이벤트 위임

## 동작화면

|:----------------------------------------:|
|<img src="https://github.com/seounjin/VanillaJs/blob/main/image_collection/img/image-collection.gif" width=1000  />|


## 상세 설명



### 컴포넌트 구성

|:----------------------------------------:|
|<img src="https://github.com/seounjin/VanillaJs/tree/main/image_collection/img/collection.png" width=1000  />|


### 함수형 컴포넌트

- 모든 컴포넌트의 상위 컴포넌트인 App 에서 상태 관리를 하였습니다.
- 클래스형컴포넌트로 상속받아 구현하게 되면 필요하지 않는 기능도 추가적으로 상속받기 때문에 함수형 컴포넌트로 개발하였습니다.
- 시작시 requestApi 를 통해 root의 정보를 가져옵니다.
- nodeClick, backClick,keywordClick 함수를 해당 컴포넌트에 넘겨 클릭시 데이터를 받아 옵니다.

```jsx
export default function App(app){

    this.state = {
        ...
    };

    const nodeClick = async(node) => {
        ...
    };

    const backClick = async() => {
				...
    };

    const keywordClick = async(index) => {
        ...
    };

    const breadcrumb = new Breadcrumb({ app, state: this.state.depth, keywordClick });  
    const nodes = new Nodes({ app, state:{root: this.state.root, nodes: this.state.nodes}, nodeClick, backClick });
    const modal = new Modal({ app, state:this.state.filePath }); 
    const modalLoading = new ModalLoading({app, state:this.state.loading });

    this.setState = (newState) => {
        this.state = newState;
				...
    };

    const requestApi = async() => {

        this.setState({...this.state, loading:true})
        
        try {
            const data = await api.rootRequest();
            this.setState({...this.state, root:false, nodes:data, loading:false });

        } catch (error) {
            throw new Error('requestApi',error);
        }
    };
    
    requestApi();

};
```

### App에서 상태관리

- root 상태를 통해 백버튼 유무를 설정하였습니다.
- 폴더클릭시 root=True,  백버튼 클릭시 root=false로 상태를 변환하였습니다.
- depth는 백버튼 클릭시 그다음 상태가 root인지 아닌지를 판별하는 배열입니다.
- 폴더클릭시 depth에 노드를 추가하였습니다.
- filePath는 디렉토리 클릭시 해당 파일 경로를 할당하였습니다.
- loading은 서버에서 데이터를 가져오는 시간에 로딩중이라는 이미지 컴포넌트를 화면에 띄우게하는 상태 변수입니다.
- 객체를 수정하지 않고 전개연산자(spread)를 사용하여 새로운 객체를 만들기 때문에 불변성을 지킬 수 있습니다.

```jsx
		
		this.state = {
        root:false,
        nodes:[],
        depth:[],
        filePath:null,
        loading:false
    };
	
		......

		try {
            if (node.type === 'DIRECTORY'){  
                
                const data = await api.nodeRequest(node.id);
                this.setState({...this.state, root:true, depth:[...this.state.depth, node], nodes:data, filePath:null, loading:false});

            }  else if (node.type === 'FILE'){
                this.setState({ ...this.state, filePath:node.filePath, loading:false});
            }
           
        } catch (error) {
            throw new Error('nodeClick',error);
        }
```

### 이벤트 위임

- target의 하위 요소 클릭시 이벤트 버블링으로 인하여 이벤트가 상위 요소로 전달되며 target까지 전달되게 됩니다.
- 각 노드들에게 이벤트를 걸필요 없이 한번만 이벤트리스너에 등록하면됩니다.
- closest을 사용하여 클릭한 주위의 요소를 가져옵니다.

```jsx
export default function Nodes({ app, state, nodeClick, backClick}){
		this.state = state;
    this.target = document.createElement('div');
    this.target.className = 'Nodes';
		...

    // 이벤트 버블링
    this.target.addEventListener('click', e => {

        const node = e.target.closest('.Node');
        

        if (node) {
            const nodeId = node.dataset.nodeid;
            
            if(!nodeId){
                backClick();
                return;
            }

            const selectNode = this.state.nodes.find(node => node.id === nodeId);

            if (selectNode){
                nodeClick(selectNode);
            }
            
        } 

    });
};
```

## 참고

[https://prgms.tistory.com/53](https://prgms.tistory.com/53)
