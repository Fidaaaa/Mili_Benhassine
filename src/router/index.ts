import HomeView from '@/views/HomeView.vue'
import InvoiceView from '@/views/InvoiceView.vue'
import QuoteView from '@/views/QuoteView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    
    {
      path: '/invoice/:id',
      name: 'Invoice',
      component: InvoiceView
    },

    {
      path: '/quote/:id',
      name: 'Quote',
      component: QuoteView
    },
   

  ]
})

export default router
