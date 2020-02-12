<template>
  <div class="post">
    <a href class="logo">
      <img :src="topic.author.avatar_url" alt="logo" />
    </a>

    <span class="reply-count">
      <span class="reply">{{ topic.reply_count }}</span>
      <span class="seperator">/</span>
      <span class="visit">{{ topic.visit_count }}</span>
    </span>

    <span class="title-wrapper">
      <span class="tab" :class="{ good: topic.good || topic.top }">{{ topic | formatTab }}</span>
      <router-link
        :to="{
          name: 'Topic',
          params: {
            id: topic.id
          }
        }"
        class="title"
      >{{ topic.title }}</router-link>
    </span>

    <span class="last-time">{{ topic.last_reply_at | formatDate }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Topic } from "../custom";
import { formatTab } from "@/lib/formatTab.ts";
import { formatDate } from "@/lib/formatDate";
@Component({
  filters: {
    formatTab,
    formatDate
  }
})
export default class PostListItem extends Vue {
  @Prop({ type: Object, required: true }) readonly topic!: Topic;
}
</script>

<style lang="scss" scoped>
.post {
  padding: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    img {
      width: 30px;
      height: 30px;
      border-radius: 3px;
    }
  }

  .reply-count {
    width: 70px;
    text-align: center;
    vertical-align: bottom;

    > .reply {
      color: #9e78c0;
      font-size: 14px;
    }

    > .seperator {
      font-size: 10px;
    }

    > .visit {
      font-size: 10px;
      color: #b4b4b4;
    }
  }

  .title-wrapper {
    flex: 1;
    .tab {
      background-color: #e5e5e5;
      color: #999;
      padding: 2px 4px;
      border-radius: 3px;
      font-size: 12px;
      margin-right: 1em;
      &.good {
        background: #80bd01;
        color: #fff;
      }
    }
    .title {
      max-width: 200px;
      text-overflow: ellipsis;
    }
  }

  .last-time {
    font-size: 11px;
    color: #778087;
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
  }
}
</style>
