import SelectedOptions from './SelectedOptions.js';

export default function ProductDetail({ target, productState, productOptions }){

    this.state = {
        productInfo:productState,
        productOptions:productOptions,
        selectOptions:[]
    };

    this.target = document.createElement('div');
    this.target.className = 'ProductDetail';
    let selectedOptions = null;

    this.render = () => {
        target.appendChild(this.target);

        this.target.innerHTML = 
        `
            <img src=${this.state.productInfo.imageUrl}>
            <div class="ProductDetail__info">
                <h2>${this.state.productInfo.name}</h2>
                <div class="ProductDetail__price">${this.state.productInfo.price}원~</div>
                <select>
                <option value=0>선택하세요.</option>
                ${this.state.productOptions.reduce((html, data, index)=> {

                    const { id, name, stock, price } = data;

                    html += `
                        <option value=${id} ${stock ? '' : 'disabled'}>
                            ${ stock ? 
                                price ? this.state.productInfo.name + ' ' + name + '( +' + price +'원' + ')' : this.state.productInfo.name + ' ' + name 
                                
                                :

                                '(품절)'+ this.state.productInfo.name + ' ' + name
                            }
                        </option>
                    `

                    return html;
                },'')}

                </select>
        `

        
        selectedOptions = new SelectedOptions({
            target:this.target.querySelector('.ProductDetail__info'), 
            selectOptions:this.state.selectOptions,
            productPrice: this.state.productInfo.price,
            productId: this.state.productInfo.id
        });
    }

    this.target.addEventListener('click', (e) => {

        if (e.target.tagName === 'SELECT'){
            const optionId = parseInt(e.target.value);
            if (optionId === 0){
                return;
            }

            const { selectOptions, productOptions } = this.state;
            // selectOptions 있는지 확인
            const trace = selectOptions.find(data => data.id === optionId);
            if (trace){
                return;
            } else {
                // selectOptions 없으면 추가                
                const selectionOption = productOptions.find(data => data.id === optionId);
                this.state = {...this.state, selectOptions:[...selectOptions, selectionOption]};


                selectedOptions.setState({
                    ...selectionOption,
                    number:1
                });
            }
        }
        
        

    });

    this.render();


};