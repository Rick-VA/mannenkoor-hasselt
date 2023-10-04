<template>
  <header>
  <nav class="navbar">
      <RouterLink to="/">
        <img  src="/img/hasselts_mannenkoor_logo.png" alt="logo" class="nav-logo">
      </RouterLink>
      <ul class="nav-menu">
          <router-link :to="item.route" v-for="item in items" :key="item.name" class="nav-link" active-class="activeLink">
            <li class="nav-item">{{ item.name }}</li>
          </router-link>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  hamburger: '',
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
  },
}
</script>

<style lang="scss" scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  header {
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }

  li {
    list-style: none;
  }

  .navbar {
    min-height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }

  span {
    padding: 0 .5rem;
  }

  .nav-link.activeLink {
    border-bottom: solid 0.25rem dodgerblue;
    color: dodgerblue;
  }

  .nav-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-logo {
    width: 8rem;
    aspect-ratio: 3/2;
    object-fit: contain;
  }

  .nav-link {
    padding-bottom: 3px;
  }

  .nav-link:hover {
    border-bottom: solid 0.25rem dodgerblue;
    color: dodgerblue;
  }

  .hamburger {
    display: none;
    cursor: pointer;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: black;
  }
  
  @media (max-width: 900px) {
    .hamburger {
      display: block;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .nav-menu {
      position: fixed;
      left: -100%;
      top: 80px;
      gap: 0;
      display: flex;
      flex-direction: column;
      background: white;
      width: 100%;
      text-align: center;
      transition: 0.3s;
    }

    .nav-item {
      margin: 0.75rem 0;
    }

    .nav-menu.active {
      left: 0;
    }
  }
</style>