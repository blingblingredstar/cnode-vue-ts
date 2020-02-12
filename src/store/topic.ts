import { RootState } from "@/custom";
import { TopicState } from "./../custom.d";
import { MutationTree, ActionTree, Module } from "vuex";
import Axios from "axios";

const state: TopicState = {
  topic: {
    author: {
      avatar_url: "",
      loginname: ""
    },
    author_id: "",
    content: "",
    create_at: "",
    good: false,
    id: "",
    last_reply_at: "",
    reply_count: 0,
    tab: "",
    title: "",
    top: false,
    visit_count: 0,
    is_collect: false,
    replies: []
  }
};

export enum TopicMutations {
  save = "SAVE_TOPIC"
}

const mutations: MutationTree<TopicState> = {
  [TopicMutations.save](state, newTopic) {
    state.topic = newTopic;
  }
};

export enum TopicActions {
  fetch = "FETCH_TOPIC"
}

const actions: ActionTree<TopicState, RootState> = {
  [TopicActions.fetch]: async ({ commit }, id: string) => {
    const response = await Axios.get(`https://cnodejs.org/api/v1/topic/${id}`);
    commit(TopicMutations.save, response.data.data);
  }
};

export const topic: Module<TopicState, RootState> = {
  state,
  mutations,
  actions,
  namespaced: true
};
