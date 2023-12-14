<template>
  <div class="group-photo-container">
    <img src="/img/groepfoto-nOsYugKv4-transformed1.jpeg" class="group-photo">
    <div class="group-photo-text">
      <p >Welkom op de website van het Hasselt's Mannenkoor</p>
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
      Wordt lid
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
    width: 95%;
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
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
    padding: .5rem;
    z-index: 1;
    position: relative;
    top: 35rem;
    width: 28rem;
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


</style>