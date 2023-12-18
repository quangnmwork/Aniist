import { createApp, h, provide, render } from 'vue'
import { createPinia } from 'pinia'
import './assets/index.css'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import router from './router'
import apolloClient from './lib/graphql'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
