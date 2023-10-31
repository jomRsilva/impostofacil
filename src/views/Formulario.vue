<template>
<main id="formPageContainer" class="dlfex page_container form_page_container">

	<!-- aside -->
	<Steps />

	<!-- Passos -->
	<Step1Identificacao v-if="$store.state.step1Focus" />

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
import Step1Identificacao from '../components/Step1Identificacao.vue'

export default {
  name: 'Formulario',
  components: {
		Steps, Step1Identificacao
  }
}
</script>
