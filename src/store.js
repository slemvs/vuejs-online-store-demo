import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Item1', image: '//placehold.it/200', price: 399 },
      { invId: 2, name: 'Item2', image: '//placehold.it/200', price: 1999 },
      { invId: 3, name: 'Item3', image: '//placehold.it/200', price: 499 },
      { invId: 4, name: 'Item4', image: '//placehold.it/200', price: 299 }
    ],
    inCart: []
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart
  },
  mutations: {
    ADD_TO_CART(state, invId) {state.inCart.push(invId)},
    REMOVE_FROM_CART(state, index) {state.inCart.splice(index, 1)}
  },
  actions: {
    addToCart(context, invId) {context.commit('ADD_TO_CART', invId)},
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); }
  },
});
