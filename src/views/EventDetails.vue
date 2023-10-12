<template>
  <Basecard>
    <WelcomeMsg :image="eventType.cover_image" :title="eventType.name" />
    <CourseFilter
      v-if="courses.length > 0"
      :courses="courses"
      @filter-courses="filterCourses"
    />
    <EventFilter
      v-if="programs.length > 0"
      :list="uniqueTypes"
      @filter-events="filterEvents"
    />
  </Basecard>

  <ul>
    <li v-for="program in programs" :key="program.id">
      <Basecard class="event-details">
        <div class="description">
          <div class="category">
            <div
              class="tag-color"
              :style="{ backgroundColor: program.programType.type_colour }"
            ></div>
            <span> {{ program.programType.type }} </span>
          </div>
          <h2>{{ program.title }}</h2>
          <span> {{ program.description_short }} </span>
          <p>
            <span> Venue: {{ program.room }} </span>
          </p>
          <div>
            <span>
              Address: {{ program.location.title }},
              {{ program.location.address }}
            </span>
            <p>
              <span> Postcode: {{ program.location.postcode }} </span>
            </p>
          </div>
          <div class="event-details-time">
            <span> Timings: </span>
            <p v-for="timing in program.timings" :key="timing.id">
              <span> {{ timing.start_time }} - {{ timing.end_time }} </span>
            </p>
          </div>
        </div>
      </Basecard>
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from "vue-router";
import { inject, ref } from "vue";
import WelcomeMsg from "../components/Event/WelcomeMsg.vue";
import Basecard from "../components/UI/BaseCard.vue";
import EventFilter from "../components/Event/EventFilter.vue";
import CourseFilter from "../components/Event/CourseFilter.vue";

const events = inject("eventTypes");

const programs = ref([]);
const courses = ref([]);
const mergedPrograms = {};
const uniqueTypes = ref([]);
let eventType = {};

const mergePrograms = () => {
  programs.value.forEach((program) => {
    const title = program.title;
    if (!mergedPrograms[title]) {
      mergedPrograms[title] = { ...program };
      mergedPrograms[title].timings = [
        { start_time: program.start_time, end_time: program.end_time },
      ];
    } else {
      mergedPrograms[title].timings.push({
        start_time: program.start_time,
        end_time: program.end_time,
      });
    }
  });

  const mergedProgramsArray = Object.values(mergedPrograms);
  programs.value = mergedProgramsArray;
  eventType.programs = mergedProgramsArray;
};

const findUniqueEvents = () => {
  const types = programs.value.map((program) => program.programType.type);
  uniqueTypes.value = [...new Set(types)];
};

//find the eventtype with the id that matches the route parameter in events
const route = useRoute();
if (parseInt(route.params.id) === 5) {
  courses.value = events[4].topics.map((topic) => topic.name);
  eventType = events[4];
} else {
  eventType = events.find((event) => event.id === parseInt(route.params.id));
  programs.value = eventType.programs;
  mergePrograms();
  findUniqueEvents();
}

const filterCourses = (selectedType) => {
  console.log(selectedType);
  programs.value = eventType.topics.find(
    (topic) => topic.name === selectedType
  ).programs;
  findUniqueEvents();
  mergePrograms();
};

const filterEvents = (selectedType) => {
  if (selectedType === "All") {
    programs.value = eventType.programs;
  } else {
    programs.value = eventType.programs.filter(
      (program) => program.programType.type === selectedType
    );
  }
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5rem;
  column-gap: 3rem;
  list-style: none;
  padding: 0;
}

@media (max-width: 1368px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  ul {
    grid-template-columns: 1fr;
  }
}

.description {
  display: flex;
  flex-direction: column;
  /* height: 25rem; */
}

.description .content {
  flex: 1;
}

.category {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.tag-color {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.description h2 {
  color: #0254a7;
}
</style>
