<template>
  <div id="projects">
    <div class="grid grid-cols-4 gap-4 my-4 py-4">
      <div>
        <img
          :src="require(`@/assets/${projects.highway1}`)"
          alt="Highways"
          loading="lazy"
        />
      </div>
      <div class="col-span-2">
        <h2 class="text-lg font-bold">Surveillance and Safety for Highways</h2>
        <p class="my-2">
          A study by IIT Delhi points out that the national highways constitute
          only 2% of the length of roads in India, but they account for 30.3% of
          total road accidents and 36% of deaths
          <a href="https://en.wikipedia.org/wiki/Traffic_collisions_in_India"
            >[1]</a
          >.
        </p>
        <p>
          Our research leverages high-speed cameras to capture real-time data on
          anomalies such as over-speeding, wrong-lane driving, and traffic
          patterns. This enables the identification of road accidents and
          immediate alerts to the local authorities.
        </p>
      </div>
      <div>
        <img
          :src="require(`@/assets/${projects.highway2}`)"
          alt="Highways"
          loading="lazy"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 my-4 py-4">
      <div>
        <h2 class="text-lg font-bold">Orthodontics</h2>
        <p class="my-2">
          Orthodontics is a specialist branch of dentistry. The term
          "orthodontics" can be broken down into two Greek words - "orthos"
          meaning straight or correct and "dontics" meaning teeth.
          <a
            href="https://www.news-medical.net/health/What-is-Orthodontics.aspx#:~:text=Orthodontics%20is%20a%20specialist%20branch,straightening%20misaligned%20teeth%20or%20malocclusions."
            >[2]</a
          >
        </p>
        <p>
          Our research aims to predict the future appearance of a patient’s
          teeth during orthodontic treatment. By analyzing the functional
          characteristics of molars, premolars, canines, and incisors, we
          utilized generative AI to create a reconstruction model enhanced with
          exemplar data (visualized as blue points in the video).
        </p>
      </div>
      <div>
        <video controls autoplay>
          <source
            :src="require(`@/assets/${projects.orthodontics}`)"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 my-4 py-4">
      <div class="">
        <div>
          <img
            :src="require(`@/assets/${projects.sketches}`)"
            alt="sketches"
            loading="lazy"
            class="w-1/2"
          />
        </div>
      </div>
      <div>
        <h2 class="text-lg font-bold">Teaching AI to Sketch</h2>
        <p class="my-2">
          Deep learning models with the help of convolutional neural networks,
          learn to interpret and understand images by extracting and analyzing
          hierarchical features. This works well for images which resemble
          guassian distribution. However, unlike natural images, sketches are
          designed as vectors which poses a significant challenge.
        </p>
        <p>
          Our research addresses this challenge by developing a deep learning
          model capable of completing a sketch initiated by a person. It takes a
          target class name as input for example, wheel, wheel-barrow and wine
          glass.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 my-4 py-4">
      <div>
        <h2 class="text-lg font-bold">
          An Ethical Dataset for Non-Existing Living Beings
        </h2>
        <p class="my-2">
          One of the bottleneck for AI is the availability of ethically sourced
          data for training. Production houses have utilized green screens and
          sensors to generate such data since a long time now. Generative AI
          provides us a means to utilize existing videos and mask confidential
          information while retaining the semantics of a scene or an action.
        </p>
      </div>
      <div class="">
        <div>
          <img
            :src="require(`@/assets/${projects.i2i}`)"
            alt="i2i"
            loading="lazy"
            class=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '@/assets/skillsList'

export default {
  name: 'ResearchProjects',
  components: {},
  data() {
    return {
      imgurls: ['logo.png', 'react.png', 'python.png'],
      projects: projects,
    }
  },
}
</script>

<style>
</style>
