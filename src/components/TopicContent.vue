<template>
  <div class="topic-content">
    <header>
      <span class="title-wrapper">
        <span class="tab" :class="{ good: topic.good || topic.top }">{{ topic.tab | formatTab }}</span>
        <span class="title">{{ topic.title }}</span>
      </span>
      <span class="changes">
        <span>发布于{{ topic.create_at | formatDate }}</span>
        <span>作者 {{ topic.author.loginname }}</span>
        <span>{{ topic.visit_count }}次浏览</span>
        <span>来自 {{ tabName }}</span>
      </span>
    </header>
    <main class="content" v-html="topic.content"></main>
    <ReplyList v-if="topic.replies" :replies="topic.replies" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Topic } from "../custom";
import { formatTab } from "@/lib/formatTab";
import { formatDate } from "@/lib/formatDate";
import ReplyList from "@/components/ReplyList.vue";

@Component({ filters: { formatTab, formatDate }, components: { ReplyList } })
export default class TopicContent extends Vue {
  @Prop() readonly topic!: Topic;

  get tabName() {
    if (this.topic.tab === "ask") return "问答";
    if (this.topic.tab === "share") return "分享";
    if (this.topic.tab === "good") return "精华";
    if (this.topic.tab === "job") return "招聘";
    return "其他";
  }
}
</script>

<style lang="scss">
.content {
  p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
  }

  ul {
    list-style: disc;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
    border: 0;
  }

  pre {
    max-width: 100%;
  }
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/markdown-github.css";
.topic-content {
  width: 700px;

  header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;

    display: flex;
    flex-direction: column;

    .title-wrapper {
      display: flex;
      align-items: center;
      .title {
        font-size: 22px;
        font-weight: 700;
        margin: 8px 0;
        display: inline-block;
        vertical-align: bottom;
        width: 75%;
        line-height: 130%;
      }
    }
    .changes {
      font-size: 12px;
      color: #838383;
      span {
        padding-right: 0.5em;
        &::before {
          padding-right: 0.2em;
          content: "•";
        }
      }
    }
  }

  .content {
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    padding: 10px 20px;
    border-radius: 0 0 3px 3px;
  }
}

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
</style>
