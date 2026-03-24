import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Collection from '../views/Collection.vue'
import ProductDetail from '../views/ProductDetail.vue'
import CartView from '../views/CartView.vue'
import Checkout from '../views/Checkout.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/collections/:category?', component: Collection },
    { path: '/product/:id', component: ProductDetail },
    { path: '/cart', component: CartView },
    { path: '/checkout', component: Checkout },
  ]
})
