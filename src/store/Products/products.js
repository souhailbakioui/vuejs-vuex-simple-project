
export default {

    state: {
        products: [],
      },
      getters: {
        getProduct(state) {
          return state.products;
        },
      },
      mutations: {
        
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

}