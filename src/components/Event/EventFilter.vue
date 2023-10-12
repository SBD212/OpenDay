<template>
  <div class="filter">
    <h1>
      Filter Events By
      <select v-model="selectedType" @change="filterByType">
        <option value="All">All</option>
        <option v-for="item in list" :value="item">
          {{ item }}
        </option>
      </select>
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});


const emit = defineEmits(["filter-events"]);

const selectedType = ref("All");

const filterByType = () => {
  // Emit the selectedType value when the select changes
  emit("filter-events", selectedType.value);
};


</script>

<style scoped>
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Aleo;
}

.filter select{
  color: #333;
  border: 1px solid #ccc;
  font-family: Aleo;
  font-size: 1.5rem;
}
</style>
