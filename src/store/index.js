import { createStore } from "vuex";
import ProductModule from "@/store/Products/products";
import UserModule from "@/store/User/user";
export default createStore({
  strict:true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ProductModule,
    UserModule
  },
});
