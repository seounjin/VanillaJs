import App from "./App.js";
import { createStore } from "./_store/store.js";
import modalReducer from "./_reducers/modal_reducer.js";

const store = createStore(modalReducer);
window.store = store;

new App(document.querySelector(".main"));


