<template>
  <div class="tab">
    <section class="service">
      <p class="service-item-text">
        Artificial Intelligence and Machine Learning have emerged as
        indispensable tools, driving innovation across a wide spectrum of
        multidisciplinary applications. The projects we have undertaken are just
        the tip of the iceberg, showcasing the vast potential of AI to solve
        some of the biggest problems in our world. We have a simple dream, to be
        a part of this legacy.
      </p>

      <ResearchProjects />
    </section>
  </div>
</template>

<script>
import ResearchProjects from '../components/Projects.vue'
import { projects } from '@/assets/skillsList'

export default {
  name: 'Objective',
  props: {},
  components: {
    ResearchProjects,
  },
  data() {
    return {
      projects: projects,
    }
  },
}
</script>

<style scoped>
.tab {
  width: 100%;
}

.service {
  width: 100%;
  padding: 20px 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.section-title {
  /* Section titles */
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subsection-title {
  /* Subsection titles */
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.research-title {
  padding: 10px;
  border-bottom: 2px solid #ccc; /* Adjust color and thickness as needed */
}

@media only screen and (max-device-width: 480px) {
  /* STYLES HERE */
  .service {
    padding: 20px 20px;
  }
}
</style>