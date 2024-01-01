
export default {

    state: {
        products: [],
      },
      getters: {
        getProduct(state) {
          return state.products;
        },
        getFirstProduct(state){
          return state.products[0]
        }
      },
      mutations: {
        
        setProduct(state, products) {
          console.log("setProduct with Data",products)
          state.products=products
        }
      },
      actions: {
        async getProductApi(context) {
          await fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(data=>context.commit('setProduct',data.products));
        },
      },

}