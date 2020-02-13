<template>
  <Layout>
    <div class="topic-wrapper" v-if="topic">
      <TopicContent :topic="topic" />
      <Aside :user="user" />
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import TopicContent from "@/components/TopicContent.vue";
import { namespace } from "vuex-class";
import { TopicActions } from "../store/topic";
import Aside from "@/components/Aside.vue";
import { User } from "../custom";
import { UserActions } from "../store/user";

@Component({
  components: {
    Layout,
    TopicContent,
    Aside
  }
})
export default class Topic extends Vue {
  @(namespace("topic").State) topic!: Topic;
  @(namespace("topic").Action(TopicActions.fetch)) fetchTopic!: (
    id: string
  ) => void;

  @(namespace("user").State) user!: User;
  @(namespace("user").Action(UserActions.fetch)) fetchUser!: (
    loginname: string
  ) => void;

  @Watch("$route")
  fetchData() {
    this.fetchTopic(this.$route.params.id);
    this.fetchUser(this.$route.params.name);
  }

  created() {
    this.fetchData();
  }
}
</script>

<style lang="scss" scoped>
.topic-wrapper {
  display: flex;
  flex-flow: row nowrap;
}
</style>
