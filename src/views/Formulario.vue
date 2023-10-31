<template>
<main id="formPageContainer" class="dlfex page_container form_page_container">

	<!-- aside -->
	<Steps />

	<!-- Passos -->
	<Step1Identificacao v-if="$store.state.step1Focus" />

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
