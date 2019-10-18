import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import main from './components/main.vue';
import other from './components/other.vue';
import home from './components/home.vue';
import recovery from './components/recovery.vue';
import recoveryApply from './components/recoveryApply.vue';
import recoveryHome from './components/recoveryHome.vue';
import myOrder from './components/myOrder.vue'


let router =new Router({
    routes:[
        { path: '/', component: main,children:[
            { path: '', component: home },
            { path: 'recovery', component: recovery,children:[
                { path: '', component: recoveryHome },
                { path: 'recoveryApply', component: recoveryApply }
            ] },
            { path: 'myOrder', component: myOrder }
        ] },
        { path: '/other', component: other }
    ]
})

export default router