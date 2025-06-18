import { createRouter, createWebHistory } from 'vue-router'
import HomeView        from '../View/HomeView.vue'
import ServicesView    from '../View/ServicesView.vue'
import MarketplaceView from '../View/MarketplaceView.vue'
import ContactView     from '../View/ContactView.vue'

const routes = [
  { path: '/',           component: HomeView },
  { path: '/services',   component: ServicesView },
  { path: '/marketplace',component: MarketplaceView },
  { path: '/contact',    component: ContactView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
