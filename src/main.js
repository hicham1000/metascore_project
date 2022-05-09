import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(store).mount('#app')


// function name(params) {
//     return 0
// }


// ( ) => {
//     return
// }


// la valeur de return 0
// () => 0


// const t = {
//     "foo": 10,
//     get total(){
//         return this.foo;
//     },
//     set total(v) {
//         this.foo = v;
//     }
// }
