<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <nav>
      <ul>
        <li>
          <div class="a"><router-link to="/">Home</router-link></div>
        </li>
        <li>
          <div class="a"><router-link to="/about">About</router-link></div>
        </li>
      </ul>
    </nav>
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style scoped>
@import "assets/css/destyle.css";
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  width: 500px;
  margin: 0 auto;
  font-family: sans-serif;
  background-color: white;
  padding: 30px;
}
nav {
  width: 100%;
  height: 40px;
  background-color: dimgray;
  padding-top: 10px;
  box-sizing: border-box;
}
ul {
  display: flex;
  padding-left: 145px;
}
li {
  list-style: none;
}
.a {
  display: block;
  text-decoration: none;
  color: white;
  margin-right: 50px;
}
.main {
  flex: 1;
  width: 100%;
}
</style>
