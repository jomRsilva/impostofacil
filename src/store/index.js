import { createStore } from 'vuex'

export default createStore({
  state: {
		// side nav
		mobNavReq: false,

		// setp focus
		stepFocus: 1,

		// modal
		getModal: false,

		// Value Storage
		declaracaoAnteriorNumero: '',

  },
  getters: {
  },
  mutations: {
  },
  actions: {
		modalToggle () {
			this.state.getModal = !this.state.getModal
			console.log('aqui')
		}
  },
  modules: {
  }
})
