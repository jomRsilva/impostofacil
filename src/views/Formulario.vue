<template>
<main id="formPageContainer" class="dlfex page_container form_page_container">

	<!-- aside -->
	<Steps />

	<!-- Passos -->
	<Step1Identificacao v-if="$store.state.stepFocus === 1" />
	<Step2Familiares v-if="$store.state.stepFocus === 2" />
	<Step3Rendimentos v-if="$store.state.stepFocus === 3" />
	<Step4Pagamentos v-if="$store.state.stepFocus === 4" />
	<Step5BenseDividas v-if="$store.state.stepFocus === 5" />
	<Step6Extras v-if="$store.state.stepFocus === 6" />
	<Step7RevisaoCalculo v-if="$store.state.stepFocus === 7" />

	<!-- Next -->
	<div class="dflex form_next_step">
		<p>
			Para continuar clique em próxima etapa ou no próximo item da lista de etapas.
		</p>
		<button @click="nextStep" class="dflex btn btn_fill">
			<small> Próxima etapa </small>
			<span class="material-icons"> arrow_forward </span>
		</button>
	</div>

</main>
</template>

<script>
import Steps from '../components/Steps.vue'
import Step1Identificacao from '../components/steps/Step1Identificacao.vue'
import Step2Familiares from '../components/steps/Step2Familiares.vue'
import Step3Rendimentos from '../components/steps/Step3Rendimentos.vue'
import Step4Pagamentos from '../components/steps/Step4Pagamentos.vue'
import Step5BenseDividas from '../components/steps/Step5BenseDividas.vue'
import Step6Extras from '../components/steps/Step6Extras.vue'
import Step7RevisaoCalculo from '../components/steps/Step7RevisaoCalculo.vue'

export default {
  name: 'Formulario',
  components: {
		Steps,
		Step1Identificacao,
		Step2Familiares,
		Step3Rendimentos,
		Step4Pagamentos,
		Step5BenseDividas,
		Step6Extras,
		Step7RevisaoCalculo
  },

	methods: {
		nextStep () {
			this.$store.state.stepFocus++
			if (this.$store.state.stepFocus > 7) {
				this.$store.state.stepFocus = 1
			}
		}
	}
}
</script>
