<template>

<div class="form_page_component">

	<h1 class="setp_title"> ETAPA 1: Identificação </h1>

	<p class="setp_par">
		Primeiramente você precisará informar todos os seus dados:
	</p>

	<hr class="setp_hr">

	<h3 class="section_title"> Declaração Anterior: </h3>

	<p class="setp_par stepPar_margin">
		Primeiramente você precisará informar todos os seus dados:
	</p>

	<!-- ano anterior -->
	<InputTextBox
		sizeType="third_size"
		labelText="N° do recibo da última declaração (2022)"
		placeholderText="Insira o número aqui"
		:isrequired="false"
	/>

	<hr class="blankspace">

	<!-- dados pessoais (hidden field) -->

	<div v-if="!question1" class="dflex hiddenfield_question">
		<span class="material-icons"> tips_and_updates </span>
		<div class="dflex question_body">
			<p> Gostaria de resgatar informações de um ano anterior? </p>
				<div class="dflex btn_group">
					<button class="dflex btn btn_fill">
						<small> Sim </small>
					</button>

					<button class="dflex btn">
						<small> Não, iniciar preenchimento do zero </small>
					</button>
				</div>
		</div>
	</div>

	<div v-if="question1" class="hidden_field">
		<h3 class="section_title"> Dados básicos </h3>

		<hr class="blankspace small_blkspc">

		<InputTextBox
			sizeType="third_size"
			labelText="Nome completo:"
			placeholderText="Insira seu nome aqui"
			:isrequired="true"
		/>
	</div>


</div>

</template>

<script>

import InputTextBox from '../components/form/InputTextBox.vue'

export default {

	name: 'Step1Identificacao',

	components: {
		InputTextBox
	},

	data() {
		return {
			question1: true
		}
	}

}
</script>

<style>

</style>