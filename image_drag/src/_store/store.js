


export function createStore(reducer) {

    let state;
    const listeners = [];
    //스토어에 상태 저장
    //여러가지 옵저버
    //리듀서 등록

    // 액션이 발생하였다는것을 리덕스에게 알려줌
    const dispatch = (action) => {
        
        state =  reducer(state, action);
        
        listeners.forEach(f => { f()});
    };

    const subscribe = f => {
        listeners.push(f)};

    const getState = () => state;

    return { dispatch, getState, subscribe };
};