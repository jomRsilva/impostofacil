<template>

<div class="dflex modal_back">
	<div class="dflex form_page_container modal_area_ajust">
		<div class="dlfex modal_box">
			<div class="dflex modal_head">
				<h4> Adicionar fonte </h4>
				<button @click="modalToggle"> <span class="material-icons"> close </span> </button>
			</div>

			<div class="dflex modal_body">

				<div class="dflex input_row">
					<InputTextBox
						sizeType="normal_size"
						type="text"
						labelText="Nome da fonte:"
						placeholderText="Digite o nome da fonte pagadora"
						:isrequired="true"
					/>
					<InputTextBox
						sizeType="normal_size"
						type="text"
						labelText="CNPJ/CPF da fonte:"
						placeholderText="XX. XXX. XXX/0001-XX"
						:isrequired="true"
					/>
				</div>

				<div class="dflex input_row">
					<InputTextBox
						sizeType="normal_size"
						type="text"
						labelText="Rendimentos recebidos (R$):"
						placeholderText="R$"
						:isrequired="true"
					/>
				</div>

				<div class="dflex input_row">
					<InputTextBox
						sizeType="normal_size"
						type="text"
						labelText="Previdência (R$):"
						placeholderText="R$"
						:isrequired="true"
					/>
					<InputTextBox
						sizeType="normal_size"
						type="text"
						labelText="Imposto retido na fonte (R$):"
						placeholderText="R$"
						:isrequired="true"
					/>
				</div>

				<div class="dflex input_row">
					<InputTextBox
						sizeType="normal_size"
						type="text"
						labelText="13° Salário (R$):"
						placeholderText="R$"
						:isrequired="true"
					/>
					<InputTextBox
						sizeType="normal_size"
						type="text"
						labelText="IRRF sobre 13° (R$):"
						placeholderText="R$"
						:isrequired="true"
					/>
				</div>

			</div>

			<div class="dflex modal_footer">
				<div class="dflex btn_group">
					<button @click="modalToggle" class="dflex btn">
						<small> Cancelar </small>
					</button>

					<button @click="showHiddenField(0)" class="dflex btn btn_fill">
						<small> Adicionar </small>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>

import { mapActions } from 'vuex'
import InputTextBox from '../form/InputTextBox.vue'

export default {

	name: 'ModalRendJuridica',

	methods: {
		...mapActions([
			'modalToggle'
		]),
	},

	components: {
		InputTextBox
	}

}
</script>

<style>

</style>