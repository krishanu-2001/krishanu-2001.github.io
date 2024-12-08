<template>
  <div class="contact-page">
    <h1>Contact Me</h1>
    <photo :url="profileImage" :height="'100%'" :width="'100%'" />
    <p class="section-body">
      Hi, I'm Krishanu Saini. I'm currently working at Goldman Sachs and formerly, I was a undergraduate student at Indian Institute of technology
      Indore. <br />
      Connect with me on
      <a href="https://www.linkedin.com/in/krishanu-saini/">linkedIn</a> or
      message me at krishanu21saini@gmail.com.
    </p>
  </div>
</template>

<script>
import Photo from '../components/Photo.vue'
import { profileImage } from '@/assets/skillsList'

export default {
  name: 'Contact',
  components: {
    Photo,
  },
  data() {
    return {
      profileImage: profileImage,
    }
  },
}
</script>

<style scoped>
.contact-page {
  text-align: center;
  padding: 20px;
}

.section-body {
  padding: 20px;
}

.profile-pic {
  width: auto;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>