<template>
  <Layout class="user">
    <Pannel>
      <template v-slot:header>
        <router-link class="home" :to="{ name: 'Home' }">主页 /</router-link>
      </template>
      <template v-slot:content>
        <ul>
          <li class="avatar">
            <img :src="user.avatar_url" alt />
            {{ user.loginname }}
          </li>
          <li class="score">{{ user.score }} 积分</li>
          <li class="create-at">注册时间 {{ user.create_at | formatDate }}</li>
        </ul>
      </template>
    </Pannel>
    <Pannel>
      <template v-slot:header>
        <h3 class="title">最近创建的话题</h3>
      </template>
      <template v-slot:content>
        <ul>
          <li v-for="topic in user.recent_topics" :key="topic.id">
            <router-link
              :to="{
                name: 'Topic',
                params: {
                  id: topic.id,
                  name: topic.author.loginname
                }
              }"
            >{{ topic.title }}</router-link>
          </li>
        </ul>
      </template>
    </Pannel>
    <Pannel>
      <template v-slot:header>
        <h3 class="title">最近参与的话题</h3>
      </template>
      <template v-slot:content>
        <ul>
          <li v-for="reply in user.recent_replies" :key="reply.id">
            <router-link
              :to="{
                name: 'Topic',
                params: {
                  id: reply.id,
                  name: reply.author.loginname
                }
              }"
            >{{ reply.title }}</router-link>
          </li>
        </ul>
      </template>
    </Pannel>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Pannel from "../components/Pannel.vue";
import { namespace } from "vuex-class";
import { UserActions } from "../store/user";
import { formatDate } from "../lib/formatDate";

@Component({
  filters: { formatDate },
  components: {
    Layout,
    Pannel
  }
})
export default class User extends Vue {
  @(namespace("user").State) user!: User;
  @(namespace("user").Action(UserActions.fetch)) fetchUser!: (
    name: string
  ) => void;

  created() {
    this.fetchUser(this.$route.params.name);
  }
}
</script>

<style lang="scss" scoped>
.user {
  font-size: 14px;

  li {
    margin-bottom: 10px;
  }

  .home {
    color: #80bd01;
    word-break: break-word;
  }

  .avatar {
    width: 40px;
    height: 40px;
    color: #778087;
    font-size: 14px;
    display: flex;
    align-items: center;
    img {
      border-radius: 3px;
      margin-right: 1em;
    }
  }

  .score {
    color: #333;
  }
}
</style>
