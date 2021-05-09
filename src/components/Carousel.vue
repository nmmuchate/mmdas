<template>
  <q-page>
    <div class="q-pa-md">
      <q-carousel
        autoplay="3500"
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        class="carousel"
        >
        <q-carousel-slide :name="1" img-src="majorallachatado.jpg" />
        <q-carousel-slide :name="2" img-src="ku9a1090.jpg" />
      </q-carousel>
  </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 1
    }
  }
}
</script>

<style>
  /* .carousel {
    height: auto;
    width: auto;
  } */
</style>
