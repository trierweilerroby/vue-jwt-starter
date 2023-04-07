import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Articles from '../components/articles/articlesList.vue';
import Replys from '../components/reply/replysList.vue';
import CreateArticle from '../components/articles/createarticles.vue';
import CurrentUser from '../components/CurrentUser/CurrentUserDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/articles', component: Articles},
    { path: '/replys', component: Replys},
    { path: '/createarticles', component: CreateArticle},
    { path: '/currentuser', component: CurrentUser},
  ]
})

export default router
