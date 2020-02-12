<template>
  <div class="layout">
    <Nav />
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Nav
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/_variables.scss";
.layout {
  background: $color-grey;
  .content-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px 0;
  }
}
</style>
