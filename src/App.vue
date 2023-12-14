<template>
  <NavBarComponent />
  <RouterView />
  <FooterComponent />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  components: {
    RouterLink,
    RouterView,
    NavBarComponent,
    FooterComponent,
  }
}

</script>

<style scoped>


</style>
