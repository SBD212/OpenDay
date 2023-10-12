<template>
  <section>
    <div class="introduction">
      <h1>Welcome to Cardiff Undergraduate Open Day!</h1>
      <p>
        To find out all the events happening, click on one of the categories to
        get started
      </p>
    </div>
  </section>
  <EventTypesList />
</template>

<script setup>
import EventTypesList from "../components/Event/EventTypesList.vue";
</script>

<style scoped>
.introduction {
  font-family: Aleo;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.introduction h1{
    font-size: 1.5rem;
}
</style>
