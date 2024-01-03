<template>

  <div class="dirigent-header">
    <h1><b>Dirigent van het Hasselt's mannenkoor</b></h1>
    <h2><b>Erik de Leeuw</b></h2>
  </div>
  <div class="dirigent-text">
    <p>
      Sinds augustus 2023 is Erik de Leeuw onze dirigent. Erik de Leeuw (1966)
      woont in IJsselmuiden. Hij heeft de dirigentenopleiding in Utrecht
      gedaan. Erik is dirigent van enkele koren in de regio en is daarnaast
      invaldirigent voor collega's. Ook is hij kerkorganist en pianist in
      diverse kerken, en schrijft hij eigen koormuziek.
    </p>
    <img src="/img/erik.jpg" alt="Erik">
  </div>


</template>

<script>

</script>

<style scoped>
.dirigent-header {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 2.5rem;
  padding-top: 2rem;
  gap: 1rem;
}

.dirigent-text {
  display: flex;
  padding-left: 2.5rem;
  padding-bottom: 5rem;
  font-size: 19px;
  width: 68dvw;
}

.dirigent-text img{
  height: 25rem;
  aspect-ratio: 2/3;
  object-fit: contain;
  padding-left: 1.5rem;
}

@media (max-width: 900px) {

  .dirigent-text {
    display: flex;
    padding-left: 2.5rem;
    padding-bottom: 5rem;
    font-size: 19px;
    width: 90dvw;
  }
  .dirigent-text img{
    height: 25rem;
    aspect-ratio: 2/3;
    object-fit: contain;
    padding-left: 1.5rem;
  }
}

@media (max-width: 600px) {
  .dirigent-header {
    padding-left: .5rem;
  }

  .dirigent-text {
    display: flex;
    flex-direction: column;
    padding-left: .5rem;
    padding-bottom: 5rem;
    font-size: 19px;
    width: 90dvw;
  }

}


</style>