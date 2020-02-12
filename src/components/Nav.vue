<template>
  <header>
    <nav class="nav">
      <router-link to="/" class="logo">
        <img src="../assets/cnodejs_light.svg" alt="logo" />
      </router-link>
      <ul class="nav-items">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="navItem.link">{{ navItem.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  navItems = [
    { name: "首页", link: "/" },
    { name: "新手入门", link: "/" },
    { name: "API", link: "/" },
    { name: "关于", link: "/" },
    { name: "注册", link: "/" },
    { name: "登录", link: "/" }
  ];
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/_variables.scss";

header {
  background: $color-dark;
}

.nav {
  max-width: 1000px;
  margin: 0 auto;
  color: #ccc;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  a {
    img {
      max-width: 120px;
      min-width: 120px;
    }
  }

  .nav-items {
    display: flex;

    li {
      padding-left: 1em;
    }
  }
}
</style>
