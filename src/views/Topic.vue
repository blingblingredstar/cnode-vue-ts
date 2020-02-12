<template>
  <Layout>
    <TopicContent v-if="topic" :topic="topic" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import TopicContent from "@/components/TopicContent.vue";
import { namespace } from "vuex-class";
import { TopicActions } from "../store/topic";

@Component({
  components: {
    Layout,
    TopicContent
  }
})
export default class Topic extends Vue {
  @(namespace("topic").State) topic!: Topic;
  @(namespace("topic").Action(TopicActions.fetch)) fetchTopic!: (
    id: string
  ) => void;

  created() {
    this.fetchTopic(this.$route.params.id);
  }
}
</script>

<style lang="scss" scoped></style>
