<template>
  <div class="pannel">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="content" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Pannel extends Vue {}
</script>

<style lang="scss" scoped>
.pannel {
  margin-bottom: 10px;
  header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  main {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
  }
}
</style>
