<template>

<div class="form_page_component">

	<h1 class="setp_title"> ETAPA 7: Revisão e cálculo</h1>

	<p class="setp_par">
		Nesta etapa você deverá se atentar para todas informações pendentes ou erroneamente cadastradas listadas abaixo, clique sobre elas para ser redirecionado para o campo exato que deve ser corrigido ou preenchido.
	</p>

	<hr class="setp_hr">

	<div class="dflex table_legend">
		<strong> Legenda dos status: </strong>
		<div class="dflex legend_item lgnd_alert"> <b> o </b> <small> campo não obrigatório </small> </div>
		<div class="dflex legend_item lgnd_required"> <b> o </b> <small> campo obrigatório </small> </div>
	</div>

		<!-- Tabela: revisao -->
		<div class="dflex table_area">
			<!-- head -->
			<div class="dflex table_row table_head">
				<div class="dflex table_cell tbId2_campo"> <strong> Nome do campo </strong> </div>
				<div class="dflex table_cell tbId1_origem"> <strong> Origem </strong> </div>
				<div class="dflex table_cell tbId1_status"> <strong> Status </strong> </div>
			</div>
			<!-- body -->
			<div class="dflex table_row table_body">
				<div class="dflex table_cell tbId2_campo"> <small> Titular dependente </small> </div>
				<div class="dflex table_cell tbId1_origem"> <small> Familiares </small> </div>
				<div class="dflex table_cell tbId1_status">
					<div class="dflex legend_item lgnd_alert"> <b> o </b> <small> Não foi informado </small> </div>
				</div>
			</div>
			<!-- repeat -->
			<div class="dflex table_row table_body">
				<div class="dflex table_cell tbId2_campo"> <small> Agência </small> </div>
				<div class="dflex table_cell tbId1_origem"> <small> Rendimentos </small> </div>
				<div class="dflex table_cell tbId1_status">
					<div class="dflex legend_item lgnd_alert"> <b> o </b> <small> Não foi informado </small> </div>
				</div>
			</div>
			<div class="dflex table_row table_body">
				<div class="dflex table_cell tbId2_campo"> <small> CNPJ do fundo </small> </div>
				<div class="dflex table_cell tbId1_origem"> <small> Rendimentos </small> </div>
				<div class="dflex table_cell tbId1_status">
					<div class="dflex legend_item lgnd_required"> <b> o </b> <small> obrigatório </small> </div>
				</div>
			</div>
			<div class="dflex table_row table_body">
				<div class="dflex table_cell tbId2_campo"> <small> Valor do bem </small> </div>
				<div class="dflex table_cell tbId1_origem"> <small> Bens e rendimentos extras </small> </div>
				<div class="dflex table_cell tbId1_status">
					<div class="dflex legend_item lgnd_required"> <b> o </b> <small> obrigatório </small> </div>
				</div>
			</div>
		</div>

	<hr class="blankspace small_blkspc">

	<h3 class="section_title"> Opção pela tributação </h3>

	<hr class="blankspace small_blkspc">

	<p class="setp_par">
		Aqui você poderá escolher que tipo de cálculo o sistema irá realizar para aplicar sua tributação.
		Sinta-se livre para escolher qual lhe for mais conveniente.
	</p>

	<div class="dflex payment_choice">

		<div class="dflex payment_card">
			<div class="dflex payment_head">
				<label class="radio_container"> Tributação por <br> Deduções Legais
					<input type="radio" checked="checked" name="paymentChoice">
					<span class="checkmark_container"></span>
				</label>
				<span class="aqt_eft"> <strong> Alíquota efetiva: </strong> 5,34% </span>
			</div>
			<div class="dflex payment_info">
				<p> <strong> Imposto a pagar: <br> </strong> R$ 354,00 </p>
				<span v-if="true" class="recommended_pay"> recomendado </span>
			</div>
		</div>

		<div class="dflex payment_card">
			<div class="dflex payment_head">
				<label class="radio_container"> Tributação por <br> desconto simplificado
					<input type="radio" checked="checked" name="paymentChoice">
					<span class="checkmark_container"></span>
				</label>
				<span class="aqt_eft"> <strong> Alíquota efetiva: </strong> 5,34% </span>
			</div>
			<div class="dflex payment_info">
				<p> <strong> Imposto a pagar: <br> </strong> R$ 497,00 </p>
				<span v-if="false" class="recommended_pay"> recomendado </span>
			</div>
		</div>

	</div>

</div>

</template>

<script>

import InputTextBox from '../form/InputTextBox.vue'
import RadioBox from '../form/RadioBox.vue'
import SelectBox from '../form/SelectBox.vue'

export default {

	name: 'Step7RevisaoCalculo',

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

<style scoped>

.tbId2_campo {width: 60%; padding-left: 13px;}
.tbId1_origem {width: 20%;}
.tbId1_status {width: 20%;}

	.table_head .tbId2_campo {
		border-radius: 8px 0 0 0
	}

	.table_head .tbId1_status {
		border-radius: 0 8px 0 0;
	}

	.table_body .table_cell small {
		font-size: .75em;
	}

	.table_body .tbId1_status .lgnd_required small {
		font-weight: 600;
	}

	.table_body {
		cursor: pointer;
	}
		.table_body:hover .tbId2_campo small {
			font-weight: 700;
			text-decoration: underline;
		}

	@media (max-width: 576px) {
		.tbId2_campo {width: 250px;}
		.tbId1_origem {width: 150px;}
		.tbId1_status {width: 200px;}
	}

</style>