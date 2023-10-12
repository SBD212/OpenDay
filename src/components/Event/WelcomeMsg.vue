<template>
  <figure>
    <img :src="props.image" alt="Cardiff University" />
  </figure>
  <div class="welcome-banner-description">
    <h1 v-if="props.title === 'Disciplines'">
      Cardiff University offers a wide range of undergraduate degree programmes.
      Choose one from the filter below
    </h1>
    <h1 v-else>
      Cardiff University has the following events planned
    </h1>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.welcome-banner {
  width: 100%;
  padding: 0;
}

.welcome-banner-description {
  text-align: center;
  padding: 1rem;
}

.welcome-banner-description h1 {
  font-family: Aleo;
  letter-spacing: 0.1rem;
  margin: 0;

}

figure {
  margin: 0;
  overflow: hidden;
}

@media (min-width: 769px) {
  figure img {
    width: 100%;
    height: 375px;
  }
}

@media (min-width:480px) and (max-width: 768px) {
  figure img {
    height: 320px;
  }
}

@media (max-width: 479px) {
  figure img {
    width: 100%;
    height: 150px;
  }
}

</style>
