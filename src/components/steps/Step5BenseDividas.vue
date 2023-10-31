<template>

<div class="form_page_component">

	<h1 class="setp_title"> ETAPA 5: Bens e dívidas</h1>

</div>

</template>

<script>

import InputTextBox from '../form/InputTextBox.vue'
import RadioBox from '../form/RadioBox.vue'
import SelectBox from '../form/SelectBox.vue'

export default {

	name: 'Step5BenseDividas',

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