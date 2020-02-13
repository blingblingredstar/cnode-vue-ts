<template>
  <div class="pagination-wrapper">
    <div class="pagination">
      <button @click="changePage('head')">首页</button>
      <button @click="changePage('previous')">上一页</button>
      <button v-if="isShow" class="pagebtn">...</button>
      <button
        v-for="page in pageBtns"
        :key="page"
        :class="[{ currentPage: page === currentPage }, 'pagebtn']"
        @click="changePage(page)"
      >{{ page }}</button>
      <button @click="changePage('next')">下一页</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Pagination extends Vue {
  pageBtns = [1, 2, 3, 4, 5, "..."];
  currentPage = 1;
  isShow = false;
  changePage(page: string | number) {
    if (page === "head") {
      this.pageBtns = [1, 2, 3, 4, 5, "..."];
      this.changePage(1);
      return undefined;
    }

    if (page === "previous") {
      this.changePage(this.currentPage - 1);
      return undefined;
    }

    if (page === "next") {
      this.changePage(this.currentPage + 1);
      return undefined;
    }

    if (page < 1) return undefined;
    this.currentPage = +page;
    page > 4 ? (this.isShow = true) : (this.isShow = false);
    if (page === 1) {
      this.$emit("update:page", this.currentPage);
      return undefined;
    }

    if (page === this.pageBtns[4]) {
      this.pageBtns.shift();
      this.pageBtns.splice(4, 0, parseInt(this.pageBtns[3] + "") + 1);
    }

    if (page === this.pageBtns[0]) {
      this.pageBtns.unshift(parseInt(this.pageBtns[0] + "") - 1);
      this.pageBtns.splice(5, 1);
    }

    this.$emit("update:page", this.currentPage);
  }
}
</script>

<style lang="scss" scoped>
.pagination-wrapper {
  border-top: 1px solid #f0f0f0;
  padding: 10px;
}

.pagination {
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  /* box-shadow: 0px 2px 9px #888888; */
  border: 1px solid #f0f0f0;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #3c3c3c;
}
</style>
