<template>
  <div class="group-photo-container">
    <img src="/img/groepfoto-nOsYugKv4-transformed1.jpeg" class="group-photo">
    <img src="/img/groepfoto-nOsYugKv4-transformed.jpeg" class="group-photo1" style="display: none">
    <div class="group-photo-text">
      <p >Het Hasselt's Mannenkoor</p>
    </div>
  </div>

  <div class="info-text">
    <p>
      Mannen heb je plezier in zingen maar ben je nog steeds huiverig om de stap
      naar het “Hasselt’s Mannenkoor” te maken
    </p>
    <p>
      <b>
        Schroom niet langer wordt lid van het “Hasselt’s Mannenkoor”.
      </b>
    </p>

    <button type="button">
      <router-link style="color: white" to="/lidmaatschap">
        Wordt lid
      </router-link>
    </button>
  </div>

</template>

<script>


export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .group-photo {
    width: 100%;
    object-fit: contain;
    z-index: 0;
    top: 1.5rem;
    position: absolute;
  }

  .group-photo-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 90dvh;
  }

  .group-photo-text {
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
    padding-left: .75rem;
    padding-right: .75rem;
    z-index: 1;
    position: relative;
    top: 80%;
    width: auto;
    background-color: white;
  }

  .info-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    gap: 1rem;
    flex-direction: column;
    margin-top:2.5rem;

    p {
      width: 30%;
      text-align: center;
    }

    button {
      border-radius: 4px;
      background: #1E90FF;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border: none;
      color: white;
      padding: 1.5rem 2.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      cursor: pointer;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 1500px) {
    .group-photo-text {
      top: 70%;
    }

    .group-photo-container {
      height: 80dvh;
    }

    .info-text {
      margin-top: 0;
    }

  }

  @media (max-width: 1300px) {

    .group-photo {
      top: 3.5rem;
    }

    .group-photo-container {
      height: 70dvh;
    }

    .info-text {
      margin-top: 0;
    }

    .group-photo-text {
      top: 60%;
    }

    .info-text {
      p {
        width: 50%;
      }
    }

    .group-photo {
      top: 4rem;
    }
  }
  
  @media (max-height: 900px) {
    .group-photo-container {
      height: 85dvh;
    }

    .group-photo-text {
      top: 70%!important;
    }

    .info-text {
      p {
        width: 50%;
      }
    }

    .group-photo {
      top: 4rem;
    }
  }

  @media (max-width: 1100px) {
    .group-photo-text {
      top: 70%!important;
      font-size: 1.25rem;
    }

    .info-text {
      p {
        width: 75%;
        font-size: 1.25rem;
      }

      button {
        padding: 1rem 1.5rem;
      }
    }

    .group-photo {
      top: 5rem;
    }

  }


  @media (max-width: 799px) {
    .group-photo-text {
      top: 18rem;
      font-size: 1rem;
      width: 15rem;
      font-weight: 550;
    }

    .info-text {
      p {
        width: 75%;
      }
    }

    .group-photo {
      top: 5rem;
    }

    .group-photo-container {
      height: 45dvh;
    }

  }

  @media (max-width: 640px) {
    .group-photo-text {
      top: 20rem;
      font-size: 1rem;
      width: 15rem;
      font-weight: 550;
    }

    .info-text {
      p {
        width: 75%;
      }
    }

    .group-photo {
      top: 5rem;
      display: none;
    }

    .group-photo1 {
      top: 3rem;
      display: block!important;
      width: 100%;
      object-fit: contain;
      z-index: 0;
      position: absolute;
    }

    .group-photo-container {
      height:50dvh;
    }

  }

  @media (max-width: 540px) {
    .group-photo-text {
      top: 16rem;
      font-size: 1rem;
      width: 15rem;
      font-weight: 550;
    }

    .info-text {
      p {
        width: 75%;
      }
    }

    .group-photo {
      top: 5rem;
      display: none;
    }

    .group-photo1 {
      top: 3rem;
      display: block!important;
      width: 100%;
      object-fit: contain;
      z-index: 0;
      position: absolute;
    }

    .group-photo-container {
      height: 40dvh;
    }

  }

  @media (max-width: 460px) {
    .group-photo-text {
      top: 13rem;
      font-size: 1rem;
      width: 15rem;
      font-weight: 550;
    }

    .info-text {
      p {
        width: 75%;
      }
    }

    .group-photo {
      top: 5rem;
      display: none;
    }

    .group-photo1 {
      top: 4rem;
      display: block!important;
      width: 100%;
      object-fit: contain;
      z-index: 0;
      position: absolute;
    }

    .group-photo-container {
      height: 35dvh;
    }

  }

  @media (max-width: 440px) {
    .group-photo-text {
      top: 10rem;
      font-size: 1rem;
      width: 15rem;
      font-weight: 550;
    }

    .info-text {
      p {
        width: 75%;
      }
    }

    .group-photo {
      top: 5rem;
      display: none;
    }

    .group-photo1 {
      top: 4rem;
      display: block!important;
      width: 100%;
      object-fit: contain;
      z-index: 0;
      position: absolute;
    }

    .group-photo-container {
      height: 35dvh;
    }

  }

  @media (max-width: 400px) {
    .group-photo-text {
      top: 50%!important;
      font-size: 1rem;
      width: 15rem;
      font-weight: 550;
    }

    .info-text {
      p {
        width: 75%;
      }
    }

    .group-photo {
      top: 5rem;
      display: none;
    }

    .group-photo1 {
      top: 4rem;
      display: block!important;
      width: 100%;
      object-fit: contain;
      z-index: 0;
      position: absolute;
    }

    .group-photo-container {
      height: 35dvh;
    }

  }




</style>