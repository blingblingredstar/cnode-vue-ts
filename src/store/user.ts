import { RootState } from "@/custom";
import { UserState, User } from "./../custom.d";
import { MutationTree, ActionTree, Module } from "vuex";
import Axios from "axios";

const state: UserState = {
  user: {
    avatar_url: "",
    create_at: "",
    githubUsername: "",
    loginname: "",
    recent_replies: [],
    recent_topics: [],
    score: 0
  }
};

export enum UserMutations {
  save = "SAVE_USER"
}

const mutations: MutationTree<UserState> = {
  [UserMutations.save](state, newUser: User) {
    state.user = newUser;
  }
};

export enum UserActions {
  fetch = "FETCH_USER"
}

const actions: ActionTree<UserState, RootState> = {
  [UserActions.fetch]: async ({ commit }, name: string) => {
    const response = await Axios.get(`https://cnodejs.org/api/v1/user/${name}`);

    commit(UserMutations.save, response.data.data);
  }
};

export const user: Module<UserState, RootState> = {
  state,
  mutations,
  actions,
  namespaced: true
};
