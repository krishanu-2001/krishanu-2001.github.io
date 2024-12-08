<template>
  <div class="about">
    <div class="links">
      <router-link to="/">Objective</router-link>
      <router-link to="/research">Research</router-link>
      <router-link to="/publications">Publications</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.links {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.links a {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  text-decoration: none;
  background-color: #e7e7e7;
  color: #000000;
  margin-right: 1rem;
}

.links .router-link-exact-active {
  background-color: #cc0000;
  color: #ffffff;
}

.content {
  width: auto;
  background-color: #e7e7e7;
  margin-top: 1rem;
  height: auto;
}
</style>