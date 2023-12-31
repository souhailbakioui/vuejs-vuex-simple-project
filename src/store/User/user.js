export default {
  state: {
    name: "SHB",
    title: "FullStack Developer",
    age: "+99",
  },
  getters: {
    nameWithTitle(state) {
      return `${state.name} is ${state.title}`;
    },
  },
  mutations: {
    changeTitle(state) {
      state.title = "Web developer";
    },
  },
  actions: {},
  modules: {},
};
