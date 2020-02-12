<template>
  <main class="posts">
    <PostListHeader @update:tab="updateTab" />
    <PostListItem v-for="topic in topics" :key="topic.id" :topic="topic" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Topic, Tab } from "@/custom";
import { TopicsActions } from "../store/topics";
import PostListHeader from "@/components/PostListHeader.vue";
import PostListItem from "@/components/PostListItem.vue";

@Component({
  components: {
    PostListHeader,
    PostListItem
  }
})
export default class PostList extends Vue {
  @(namespace("topics").State) topics!: Topic[];
  @(namespace("topics").Action(TopicsActions.fetch)) fetchTopics!: (payload: {
    page: number;
    tab: Tab | "";
  }) => void;

  currentPage = 1;
  currentTab: Tab = "all";

  updateTab(tab: Tab) {
    this.currentTab = tab;
    this.currentPage = 1;
    this.fetchTopics({ page: this.currentPage, tab: this.currentTab });
  }

  mounted() {
    this.fetchTopics({ page: this.currentPage, tab: this.currentTab });
  }
}
</script>

<style lang="scss" scoped>
.posts {
  background: #fff;
  border-radius: 4px;
}
</style>
