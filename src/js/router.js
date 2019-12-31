//导入并使用vue-router
import VueRouter from "vue-router";

import account from '../components/Account.vue'
import goodList from '../components/GoodList.vue'

import login from '../components/Login.vue'
import register from '../components/Register.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                {
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                }
            ]
        },
        {
            path: '/goodList',
            component: goodList
        }
    ]
});

export default router;