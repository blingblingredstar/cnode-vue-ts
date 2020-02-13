<template>
  <div class="replies">
    <header>{{ replies.length }} 回复</header>
    <main>
      <ul>
        <li v-for="(reply, index) in replies" :key="reply.id">
          <router-link
            class="avatar"
            :to="{ name: 'User', params: { name: reply.author.loginname } }"
          >
            <img :src="reply.author.avatar_url" alt="avatar" />
          </router-link>

          <span class="reply-content">
            <span>
              <router-link
                class="username"
                :to="{ name: 'User', params: { name: reply.author.loginname } }"
              >{{ reply.author.loginname }}</router-link>
              <a class="reply-time" href>{{ index + 1 }}楼 · {{ reply.create_at | formatDate }}</a>
            </span>
            <span v-html="reply.content"></span>
          </span>

          <span class="ups">👍{{ reply.ups.length }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Reply } from "../custom";
import { formatDate } from "../lib/formatDate";

@Component({
  filters: { formatDate }
})
export default class ReplyList extends Vue {
  @Prop({ required: true }) readonly replies!: Reply[];
}
</script>

<style lang="scss" scoped>
.replies {
  margin-top: 20px;
  header {
    font-size: 14px;
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #444;
  }
  li {
    padding: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;

    .avatar {
      margin-top: 8px;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      img {
        border-radius: 3px;
      }
    }

    .reply-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-width: 90%;

      .username {
        font-size: 12px;
        font-weight: 700;
        margin-right: 0.5em;
      }
      .reply-time {
        color: #08c;
        text-decoration: none;
        font-size: 11px;
      }
    }

    .ups {
      color: grey;
      font-size: 15px;
    }
  }
}
</style>
