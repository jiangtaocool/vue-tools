// 插件入口
import Components from './components/Money.vue';

Object.keys(Components).forEach(c=>{
    c.install = function (Vue) {
        Vue.component('T' +c.name, c)
    }
})



export default Components