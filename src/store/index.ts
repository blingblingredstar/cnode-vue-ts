import { user } from "./user";
import { topics } from "./topics";
import { topic } from "./topic";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topics,
    topic,
    user
  }
});
