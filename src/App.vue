<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",
  mounted: function () {
    //挂载完成
    console.log("mounted");
  },
  components: {
    Layout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app button {
  font-size: 14px;
  padding: 8px 12px;
  margin-right: 10px;
}

#app button:first-child {
  margin-left: 10px;
}

#app p {
  text-align: left;
}
</style>
