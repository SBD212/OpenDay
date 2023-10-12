<template>
  <div class="event-types">
    <EventItem
      v-for="event in eventTypes"
      :key="event.id"
      :id="event.id"
      :title="event.name"
      :description="event.description"
      :image="event.cover_image"
    />
  </div>
</template>

<script setup>
import EventItem from "./EventItem.vue";
import { inject } from "vue";

const eventTypes = inject("eventTypes");
</script>

<style scoped>
.event-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}

@media (max-width: 1368px) {
  .event-types {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .event-types {
    grid-template-columns: 1fr;
  }
}
</style>
