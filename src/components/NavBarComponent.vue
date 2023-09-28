<template>
  <div class="navbar">
    <div class="navbar__wrapper">
      <img src="/img/hasselts_mannenkoor_logo.png" alt="logo" class="navbar__logo">
      <div class="navbar__items">
        <router-link :to="item.route" v-for="item in items" :key="item.name" class="navbar__items__item">
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          route: "/",
          name: "Home",
        },
        {
          route: "/about",
          name: "About",
        },
        {
          route: "/contact",
          name: "Contact",
        },
        {
          route: "/login",
          name: "Login",
        },
        {
          route: "/register",
          name: "Register",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  width: 100%;
  border: 0.5px solid grey;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 99;

  &__wrapper {
    width: 90%;
    max-width: 93.75rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  &__logo {
    height: 2rem;
  }

  &__items {
    display: flex;
    margin: 0 2rem;

    &__item {
      font-size: 1rem;
      padding: 1.5rem 1rem;
      text-transform: capitalize;
      box-sizing: border-box;
      border-bottom: .625rem solid #FFFFFF00;

      &:hover {
        border-bottom: solid blue;
        color: blue;
      }
    }


  }

}

</style>