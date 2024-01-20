<template>

  <div class="fotoalbum-header">
    <h1><b>Fotoalbum</b></h1>
  </div>
  <div class="fotoalbum-text">
    <p>
      15 april 2023 ter gelegenheid van de opening van het
      Hanzejaar in Hasselt. Zoals je ziet zijn we verkleed in de kledij van toen.
    </p>
    <div class="fotos">
      <img src="/img/3a6bf5d1-dd63-4a2d-bd48-d3958e11fe14_thumb1440.webp">
      <img src="/img/6377a866-33d0-481d-a03b-e2266d647099_thumb1440.webp">
      <img src="/img/26231591-9522-439e-b46f-73bd4a578d0e_thumb1440.webp">
      <img src="/img/e2a93863-7ee8-4335-b30a-df3574f7a108_thumb1440.webp">
    </div>

    <p style="margin-top: 5rem">
      Deelname van het
      koor aan de Euifeest optocht in 2019 ter gelegenheid van het 50 jarig
      bestaan van het koor.
    </p>
    <div class="fotos">
      <img src="/img/20190831_094234.jpg">
      <img src="/img/DSC03079.jpg">
      <img style="aspect-ratio: 2/3" src="/img/IMG_3977.jpg">
    </div>

    <p style="margin-top: 5rem">
      Sfeerfoto's van hoe het er toegaat bij
      een gewone repetitie.
    </p>
    <div class="fotos">
      <img src="/img/IMG_9265.jpg">
      <img src="/img/IMG_9268.jpg">
      <img src="/img/IMG_9269.jpg">
      <img src="/img/IMG_9271.jpg">
      <img src="/img/IMG_9280.jpg">
      <img src="/img/IMG_9281.jpg">
      <img src="/img/IMG_9282.jpg">
      <img src="/img/IMG_9283.jpg">
    </div>

  </div>


</template>

<script>

</script>

<style scoped>
.fotoalbum-header {
  display: flex;
  justify-content: flex-start;
  padding-left: 2.5rem;
  padding-top: 2rem;
}

.fotoalbum-text {
  padding-left: 2.5rem;
  padding-bottom: 15rem;
  font-size: 19px;
}

.fotos {
  gap: 1.5rem;
  display: grid;
  grid-template-columns: 25rem 25rem;
  grid-row-gap: 1rem;
  justify-items: stretch;
  justify-content: flex-start;
  align-items: stretch;



  @media (max-width: 800px) {
    grid-template-columns: 21rem;
  }
}

img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: contain;
}
</style>