import { createStore } from "vuex";

export default createStore({
  state: {
    name: "SHB",
    title: "FullStack Developer",
    age: "+99",
    products: [],
  },
  getters: {
    nameWithTitle(state) {
      return `${state.name} is ${state.title}`;
    },
    getProduct(state) {
      return state.products;
    },
  },
  mutations: {
    changeTitle(state) {
      state.title = "Web developer";
    },
    getProduct(state, products) {
      state.products=products
    }
  },
  actions: {
    async getProductApi(context) {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(data=>context.commit('getProduct',data.products));
    },
  },
});
