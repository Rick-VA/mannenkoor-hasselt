<template>
  <footer>

    <div class="footer-container">
      <div class="footer-img">
        <router-link to="/">
          <img src="/img/hasselts_mannenkoor_logo-wit.png" alt="logo">
        </router-link>
      </div>
      <div class="footer-contact-info">
        <h2>Contact:</h2>
        <a href="mailto:hethasseltsmannenkoor@gmail.com">hethasseltsmannenkoor@gmail.com</a>
      </div>
    </div>
    <div class="footer-text">
    <p>Made with <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg> by <a target="_blank" href="https://rickva.dev/">Rick van Assen</a></p>
  </div>
  </footer>
</template>

<script>

</script>

<style lang="scss" scoped>

  footer {
    width: 100%;
    height: 20rem;
    background: #363636;
    display: flex;
    flex-direction: column;
    //align-items: center;
    color: white;
    font-weight: 600;
    position: relative;
    bottom: 0;

    a {
      color: white;
    }
  }
  .footer-container {
    width: 80%;
    height: 20rem;
    background: #363636;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    margin-left: 5rem;

    a {
      color: white;
    }
  }

  .footer-text {
    width: 100%;
    background: #363636;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    padding-top: 4rem;

    a {
      color: white;
    }
  }

  .footer-img {
    img {
      width: 25dvw;
      aspect-ratio: 3/2;
      object-fit: contain;
      margin-top: 3rem;
    }
  }

  .footer-contact-info {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 640px) {
    .footer-container {
      flex-direction: column;
      margin-left: 0;
    }

    .footer-img {
      img {
        width: 50dvw;
        aspect-ratio: 3/2;
        object-fit: contain;
      }
    }


  }


</style>