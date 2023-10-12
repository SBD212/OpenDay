<template>
  <div class="filter">
    <h1>
      Filter Courses By
      <select v-model="selectedType" @change="filterByType">
        <option value="" disabled>Choose a course...</option>
        <option v-for="course in courses" :value="course">
          {{ course }}
        </option>
      </select>
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  courses: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["filter-courses"]);

const selectedType = ref("");

const filterByType = () => {
  // Emit the selectedType value when the select changes
  emit("filter-courses", selectedType.value);
};
</script>

<style scoped>
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Aleo;
}

.filter select {
  color: #333;
  border: 1px solid #ccc;
  font-family: Aleo;
  font-size: 1.5rem;
}
</style>
