<template>
  <div id="app">
    <Topnav></Topnav>
    <FloatMenu></FloatMenu>
    <!-- <Footer></Footer> -->
    <router-view />
  </div>
</template>
<script>
// import Footer from "@/components/Footer.vue";
import Topnav from "@/components/Topnav.vue";
import FloatMenu from "@/components/FloatMenu.vue";
export default {
  components: {
    // Footer,
    Topnav,
    FloatMenu,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
body {
  min-width: 1200px;
}
a {
  text-decoration: none;
}
</style>
