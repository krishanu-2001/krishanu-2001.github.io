<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="links">
      <router-link to="/about">History</router-link>
      <router-link to="/about/contact">Contact</router-link>
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
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.links a {
  padding-top: .5rem;
  padding-bottom: .5rem;
  width: 150px;
  text-decoration: none;
  background-color: #e7e7e7;
  color: #000000;
  margin-right: 1rem;
}

.links .router-link-exact-active {
  background-color: #cc0000;
  color: #FFFFFF;
}

.content {
  width: 1200px;
  background-color: #e7e7e7;
  margin-top: 1rem;
  height: 800px;
}
</style>