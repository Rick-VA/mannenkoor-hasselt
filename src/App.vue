<template>
  <NavBarComponent />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'


export default {
  components: {
    RouterLink,
    RouterView,
    NavBarComponent,
  }
}

</script>

<style scoped>


</style>
