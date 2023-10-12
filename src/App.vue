<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import OpenDay from "./data/OpenDay.json";
import { provide, ref, onMounted } from "vue";

const eventTypes = ref([]);

onMounted(() => {
  eventTypes.value = OpenDay.topics.slice(0, 4);

  const disciplinesObject = {
    id: 5,
    name: "Disciplines",
    cover_image: OpenDay.topics[4].cover_image,
    description: "All the coursess that are available at Cardiff University",
    topics: OpenDay.topics.slice(4, 28),
  };

  eventTypes.value.push(disciplinesObject);

  provide("eventTypes", eventTypes.value);
  
});


</script>

<style scoped>
main {
  max-width: 80vw;
  padding: 0 1rem;
  margin: 3rem auto;
  background-color: #f5f6f8;
}
</style>
