<template>
  <aside>
    <div class="author">
      <p class="title">作者</p>
      <div class="content">
        <router-link
          :to="{
            name: 'User',
            params: {
              name: user.loginname
            }
          }"
          class="avatar"
        >
          <img :src="user.avatar_url" alt="avatar" />
          {{ user.loginname }}
        </router-link>
        <p class="score">积分: {{ user.score }}</p>
      </div>
    </div>

    <div class="recent-topic">
      <span class="title">作者其他话题</span>
      <div class="content">
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
      </div>
      <span></span>
    </div>

    <div class="recent-reply">
      <span class="title">作者其他回复</span>
      <div class="content">
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
      </div>
      <span></span>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { User } from "../custom";

@Component
export default class Aside extends Vue {
  @Prop({ required: true }) readonly user!: User;
}
</script>

<style lang="scss" scoped>
aside {
  margin-left: 20px;
  flex-basis: 280px;
  font-size: 14px;
}

.content {
  margin-bottom: 1em;
  background: #fff;
  padding: 10px;
  border-radius: 0 0 3px 3px;
}

.avatar {
  display: flex;
  align-items: center;
  background: #fff;
  img {
    width: 48px;
    height: 48px;
    border-radius: 3px;
    margin-right: 1em;
  }
}

.score {
  margin-top: 1em;
}

.title {
  color: #444;
  border-radius: 3px 3px 0 0;
  background-color: #f6f6f6;
  display: block;
  font-size: 13px;
  padding: 10px;
}

ul {
  list-style: none;

  li {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: auto;
    max-width: 270px;
    font-size: 14px;
    color: #778087;
  }
}
</style>
