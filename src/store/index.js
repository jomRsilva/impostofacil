import { createStore } from 'vuex'

export default createStore({
  state: {
		// side nav
		mobNavReq: false,

		// setp focus
		step1Focus: true,
		step2Focus: false,
		step3Focus: false,
		step4Focus: false,
		step5Focus: false,
		step6Focus: false,
		step7Focus: false,

		// Value Storage
		declaracaoAnteriorNumero: '',

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
