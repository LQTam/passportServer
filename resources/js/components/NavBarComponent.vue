<template>
  <div class="flex-center position-ref full-height">
    <div class="top-right links">
      <router-link to='/'>Home</router-link>
      <router-link to='/app'>App</router-link>
      <router-link to='/about'>About</router-link>
      <router-link :to="{name:'login'}" v-if="!loggedIn">Login</router-link>
      <router-link v-if="!loggedIn" :to="{name:'register'}">Register</router-link>
      <router-link v-if="loggedIn" :to="{name:'logout'}">Logout</router-link>
    </div>

    <!-- <div class="content">
      <div class="title m-b-md">Laravel</div>

      <div class="links">
        <router-link to='/app'>App</router-link>
      </div>

    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      computed: {
        loggedIn(){
          return this.$store.getters.loggedIn
        }
      },
    };
</script>

<style>
html,
body {
  background-color: #fff;
  color: #636b6f;
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  height: 100vh;
  margin: 0;
}

.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.content {
  text-align: center;
}

.title {
  font-size: 84px;
}

.links > a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}

.m-b-md {
  margin-bottom: 30px;
}
</style>