<template>
  <div>
    <h1 class="text-2xl border-b-2 border-gray-400 py-2 mx-2">Research</h1>
    <div class="px-4 py-10">
      <h4 class="text-xl">Anomaly Detection using Generative Adversarial Network</h4>
      <p class="research-date"><strong>Jan 2022 - Feb 2024</strong></p>
      <p>Computational Intelligence and Machine Learning Lab</p>
      <div class="text-left">
        <p><strong>Supervisors:</strong></p>
        <ul>
          <li>
            <a
              class="text-blue-400"
              href="https://www.iiti.ac.in/people/~artiwari/contact%20details.html"
              target="_blank"
              >Prof. Aruna Tiwari, Professor
            </a>
            at Indian Institute of Technology Indore
          </li>
          <li>
            <a
              class="text-blue-400"
              href="https://sites.google.com/site/sanjaycsirceeri/home?authuser=0"
              target="_blank"
              >Dr. Sanjay Singh, Principal Scientist
            </a>
            at Council of Scientific and Industrial Research (CSIR-CEERI),
            Pilani
          </li>
        </ul>

        <p class="py-2">
          Automatic detection and interpretation of abnormal events have become
          crucial tasks in large-scale video surveillance systems. The
          challenges arise from the lack of a clear definition of abnormality,
          which restricts the usage of supervised methods.
        </p>

        <p class="py-2">
          <strong>In this work, the main objectives are:</strong>
        </p>
        <ul class="list-disc px-4 py-2">
          <li>
            Improved detection accuracy: Accurately identifies anomalies in
            video data. [C.1]-[C.2]
          </li>
          <li>
            Real-time anomaly detection: Real-time inference of video frames.
            [J.3]
          </li>
          <li>
            Model Scalability: Ability to handle large volumes of video data.
            [J.4]
          </li>
          <li>
            Robustness to the Variability: Robustness to variations in data and
            transmission noise [J.1]
          </li>
          <li>
            Reduced False positives: Reduce the occurrence of unnecessary alerts
            and alarms. [J.2]
          </li>
        </ul>

        <p class="">
          Apart from training and testing the model on benchmark video anomaly
          detection datasets, we worked toward its deployment to detect
          anomalies in real time. We are also collaborating with the local
          industry to provide solutions for detecting anomalies on highways and
          expressways in India.
        </p>
      </div>
    </div>

    <!-- Research 2 -->
    <div class="px-4 py-10">
      <h4 class="text-xl">Image-to-Image Translation using Generative Adversarial Network</h4>
      <p class="research-date"><strong>Jun 2023 - Feb 2024</strong></p>
      <p>Computational Intelligence and Machine Learning Lab</p>
      <div class="text-left">
        <p><strong>Supervisors:</strong></p>
        <ul>
          <li>
            <a
              class="text-blue-400"
              href="https://www.iiti.ac.in/people/~artiwari/contact%20details.html"
              target="_blank"
              >Prof. Aruna Tiwari, Professor
            </a>
            at Indian Institute of Technology Indore
          </li>
          <li>
            <a
              class="text-blue-400"
              href="https://sites.google.com/site/sanjaycsirceeri/home?authuser=0"
              target="_blank"
              >Dr. Sanjay Singh, Principal Scientist
            </a>
            at Council of Scientific and Industrial Research (CSIR-CEERI),
            Pilani
          </li>
        </ul>

        <p class="py-2">
          Image-to-image style translation is a technique that transforms the
          style of an image while preserving its content. It has various
          applications in fields like computer graphics, image cryptography, and
          dataset creation.
        </p>

        <p class="py-2">
          <strong>In this work, the main objectives are:</strong>
        </p>
        <ul class="list-disc px-4 py-2">
          <li>
            Conditional Generation: Generated images conditioned on specific
            references or domain labels. [S.1]
          </li>
          <li>
            Multidomain Style Transfer: Simultaneously blended multiple styles
            while preserving the original content.
          </li>
        </ul>

        <p class="research-conclusion">
          This research was started to find answers to questions like – Can
          image of a vehicle be translated to an completely unrelated domain
          such as a soccer ball? What is exactly the difference between style
          and content in an image?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Research',
}
</script>

<style scoped>
.research-section {
  margin-bottom: 40px;
  padding-bottom: 40px;
}

.research-body {
  text-align: left;
}

.research-date,
.research-supervisors,
.research-description,
.research-objectives,
.research-conclusion {
  margin-bottom: 10px;
}

.research-supervisors ul {
  margin-left: 20px;
}
</style>