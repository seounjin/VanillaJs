export default class Component {

    constructor ($target) {
      this.$target = $target;
      this.setup();
      this.render();
      this.setEvent(); // case 2  한번만 실행
    }
    setup () {};
    template () { return ''; }
    render () {
      this.$target.innerHTML = this.template();
    //   this.setEvent(); // case 1 랜더링 될때마다 실행
    }
    setEvent () {}
    setState (newState) {
      this.$state = { ...this.$state, ...newState };
      this.render();
    }
}