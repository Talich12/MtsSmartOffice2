<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  background-color: var(--background-color);
  font-family: "MTSCompact-Bold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.vs-button {
  font-family: "MTSWide-Medium";
}

.vs-input {
  font-family: "MTSWide-Medium";
}

h1 {
  font-family: "MTSExtended-Bold";
  color: var(--main-color);
  font-size: 3rem;
}

h2 {
  font-family: "MTSWide-Bold";
  color: var(--main-color);
  font-size: 2rem;
}
</style>