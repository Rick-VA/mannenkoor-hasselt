<template>
  <div class="navbar">
    <div class="navbar__wrapper">
      <RouterLink to="/">
        <img src="/img/hasselts_mannenkoor_logo.png" alt="logo" class="navbar__logo">
      </RouterLink>
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
          route: "/bestuur",
          name: "Bestuur",
        },
        {
          route: "/dirigent",
          name: "Dirigent",
        },
        {
          route: "/geschiedenis",
          name: "Geschiedenis",
        },
        {
          route: "/activiteiten",
          name: "Activiteiten",
        },
        {
          route: "/repetities",
          name: "Repetities",
        },
        {
          route: "/repertoire",
          name: "Repertoire",
        },
        {
          route: "/lidmaatschap",
          name: "Lidmaatschap",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
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
    height: 8.5rem;
    aspect-ratio: 3/2;
    margin: 0 2rem;
  }

  &__items {
    display: flex;
    margin: 0 2rem;

    &__item {
      font-size: 20px;
      padding: 1.5rem 1rem;
      text-transform: capitalize;
      box-sizing: border-box;
      border-bottom: .625rem solid #FFFFFF00;
      height: 3rem;

      &:hover {
        border-bottom: solid blue;
        color: blue;
      }

    }
  }
}

@media (max-width: 1330px) {
  .navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__wrapper {
      width: 100%;
      max-width: none;
      margin: 0;
    }

    &__logo {
      height: 5rem;
    }

    &__items {
      margin: 0;

      &__item {
        font-size: 1rem;
        padding: 1rem;
        border-bottom: none;
        height: 3rem;
      }
    }

    &__mobile-toggle {
      display: block;
    }


  }

}
</style>