import Vue from "vue";
import Vuex from "vuex";
import UserStoreModule from "./user.store";
import MessagesStoreModule from "./messages.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { UserStoreModule, MessagesStoreModule },
});
