// 插件入口
import TMoney from './TMoney.vue';

TMoney.install = function (Vue) {
    Vue.component(TMoney.name, TMoney)
}

export default TMoney