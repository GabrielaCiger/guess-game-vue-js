<script>
export default {
  data() {
    return{
      menuVisible: true,
    }
  }
}
</script>

<template>
  <nav v-if="menuVisible">
    <router-link class="button-link"
                 @click="menuVisible=false" to="/getplayers">Start a new game</router-link>
    <router-link class="button-link"
                 @click="menuVisible=false" to="/about">About the author</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');

.silkscreen-regular {
  font-family: "Silkscreen", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.silkscreen-bold {
  font-family: "Silkscreen", sans-serif;
  font-weight: 700;
  font-style: normal;
}

body {
  background-color: #E5C3A6;
  font-family: Roboto, sans-serif;
}

.button-link {
  font-family: "Silkscreen", sans-serif;
  background-color: #2E4374;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin: 5px;
}

.button-link:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>

