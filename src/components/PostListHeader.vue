<template>
  <div class="posts-header">
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: tab.isActive }"
        @click="changeTab(tab.tab)"
      >{{ tab.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PostListHeader extends Vue {
  tabs = [
    { name: "全部", isActive: true, tab: "all" },
    { name: "精华", isActive: false, tab: "good" },
    { name: "分享", isActive: false, tab: "share" },
    { name: "问答", isActive: false, tab: "ask" },
    { name: "招聘", isActive: false, tab: "job" }
  ];

  changeTab(currentTab: string) {
    this.tabs.map(tab => {
      tab.tab === currentTab ? (tab.isActive = true) : (tab.isActive = false);
      return tab;
    });
    this.$emit("update:tab", currentTab);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/_variables.scss";
.posts-header {
  background: #f5f5f5;
  ul {
    display: flex;
    align-items: center;
    border-radius: 4px 4px 0 0;
    color: $color-primary;
    font-size: 14px;
    padding: 10px;
    font-weight: 500;

    li {
      margin: 0 10px;
    }

    li.active {
      background: $color-primary;
      color: #fff;
      padding: 3px 4px;
      border-radius: 3px;
    }
  }
}
</style>
