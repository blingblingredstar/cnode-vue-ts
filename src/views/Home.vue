<template>
  <Layout>
    <PostList />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import PostList from "@/components/PostList.vue";

@Component({
  components: {
    Layout,
    PostList
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
