import Component from "../core/Component.js";

// case 2
// 상위컴포넌트에 바인딩
export default class Items extends Component {
    setup () {
      this.$state = { items: ['item1', 'item2'] };
    }
    template () {
      const { items } = this.$state;
      return `
        <ul>
          ${items.map((item, index) => 
              `<li>
                  ${item}
                  <button class="deleteBtn" data-index=${index}>삭제</button>
              </li>`).join('')}
        </ul>
        <button class="addBtn">추가</button>
      `
    }
  
    setEvent () {
        // 모든 이벤트를 this.$target에 등록하여 사용하면 된다.
        this.$target.addEventListener('click', ({ target }) => {
          const items = [ ...this.$state.items ];
    
          if (target.classList.contains('addBtn')) {
            this.setState({ items: [ ...items, `item${items.length + 1}` ] });
          }
    
          if (target.classList.contains('deleteBtn')) {
            items.splice(target.dataset.index, 1);
            this.setState({ items });
          }
    
        });
      }
}


// case 1
// 가각의 버튼에 바인딩
// export default class Items extends Component {
//   setup () {
//     this.$state = { items: ['item1', 'item2'] };
//   }
//   template () {
//     const { items } = this.$state;
//     return `
//       <ul>
//         ${items.map((item, index) => 
//             `<li>
//                 ${item}
//                 <button class="deleteBtn" data-index=${index}>삭제</button>
//             </li>`).join('')}
//       </ul>
//       <button class="addBtn">추가</button>
//     `
//   }

//   setEvent () {
//     this.$target.querySelector('.addBtn').addEventListener('click', () => {
//       const { items } = this.$state;
//       this.setState({ items: [ ...items, `item${items.length + 1}` ] });
//     });

//     this.$target.querySelectorAll('.deleteBtn').forEach(deleteBtn =>
//       deleteBtn.addEventListener('click', ({ target }) => {
//         const items = [ ...this.$state.items ];
//         items.splice(target.dataset.index, 1);
//         this.setState({ items });
//       }))
//   }
// }