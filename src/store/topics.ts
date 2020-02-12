import { MutationTree, ActionTree, Module, GetterTree } from "vuex";

import Axios from "axios";
import { TopicsState, RootState } from "@/custom";

const state: TopicsState = {
  topics: []
};

export enum TopicsGetters {
  getTopicById = "GET_TOPIC_BY_ID"
}

const getters: GetterTree<TopicsState, RootState> = {
  [TopicsGetters.getTopicById](state) {
    return (id: string) => {
      return state.topics.find(topic => topic.id === id);
    };
  }
};

export enum TopicsMutations {
  save = "SAVE_TOPICS_MUTATION"
}

const mutations: MutationTree<TopicsState> = {
  [TopicsMutations.save](state, topics) {
    state.topics = topics;
  }
};

export enum TopicsActions {
  fetch = "FETCH_TOPICS_ACTION"
}

const actions: ActionTree<TopicsState, RootState> = {
  [TopicsActions.fetch]: async (
    { commit },
    { page = 1, tab = "all", limit = 20 }
  ) => {
    const response = await Axios.get("https://cnodejs.org/api/v1/topics", {
      params: {
        page,
        tab,
        limit
      }
    });
    const topics = response.data.data;
    commit(TopicsMutations.save, topics);
  }
};

export const topics: Module<TopicsState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
