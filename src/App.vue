/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <el-button type="primary" @click="kk">主要按钮</el-button>
    <div class="aaa"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // eslint-disable-next-line prettier/prettier
      a: "light"
    };
  },
  methods: {
    kk() {
      console.dir(document);
      if (this.a === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        this.a = "dark";
      } else {
        this.a = "light";
        document.documentElement.removeAttribute("data-theme");
      }
      // eslint-disable-next-line prettier/prettier
    }
    // eslint-disable-next-line prettier/prettier
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.aaa {
  width: 100px;
  height: 100px;
  background-color: var(--color-bg);
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
