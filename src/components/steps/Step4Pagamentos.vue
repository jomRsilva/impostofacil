<template>

<div class="form_page_component">

	<h1 class="setp_title"> ETAPA 4: Pagamentos</h1>

	<div class="dflex building_alert">
		<span class="material-icons"> construction </span>
		<small> Em construção </small>
	</div>

</div>

</template>

<script>

import InputTextBox from '../form/InputTextBox.vue'
import RadioBox from '../form/RadioBox.vue'
import SelectBox from '../form/SelectBox.vue'

export default {

	name: 'Step4Pagamentos',

	components: {
		InputTextBox, RadioBox, SelectBox
	},

	data() {
		return {
			question: [false, false, false, false]
		}
	},

	methods: {
		showHiddenField (index) {
			this.question[index] = !this.question[index]
		}
	}

}
</script>

<style>

</style>