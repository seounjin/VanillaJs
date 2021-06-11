export default class Component {

    constructor ($target, $props) {
      this.$target = $target;
      this.$props = $props; // case 3

      this.setup();
      this.render();
      this.setEvent(); // case 2  한번만 실행
    }

    setup () {};

    mounted () {}; // case 3

    template () { return ''; }

    render () {
      this.$target.innerHTML = this.template();
    //   this.setEvent(); // case 1 랜더링 될때마다 실행
      this.mounted(); // render 후에 mounted가 실행 된다.
    }

    setEvent () {}
    
    setState (newState) {
      this.$state = { ...this.$state, ...newState };
      this.render();
    }

    addEvent (eventType, selector, callback) { //case3

      const children = [ ...this.$target.querySelectorAll(selector) ]; 

      const isTarget = (target) => children.includes(target)
                                   || target.closest(selector);

      this.$target.addEventListener(eventType, event => {
        if (!isTarget(event.target)) return false;
        callback(event);
      })
    }
  
  
}