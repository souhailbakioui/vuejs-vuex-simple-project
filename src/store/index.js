import { createStore } from "vuex";
import ProductModule from "@/store/Products/products";
import UserModule from "@/store/User/user";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ProductModule,
    UserModule
  },
});
