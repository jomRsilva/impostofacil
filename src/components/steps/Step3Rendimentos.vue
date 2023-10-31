<template>

<div class="form_page_component">

	<h1 class="setp_title"> ETAPA 3: Rendimentos</h1>

	<p class="setp_par">
		Nesta etapa você deverá informar todos os seus tipos de rendimentos, sejam eles advindos de pessoas jurídicas, físicas, redimentos tributáveis e não tributáveis
	</p>

	<hr class="setp_hr">

	<h3 class="section_title"> Rend. Tributáveis recebidos de Pessoa Jurídica </h3>

	<!-- Rend. Pessoa Juridica (hidden field) -->

	<div v-if="!question[0]" class="dflex hiddenfield_question">
		<span class="material-icons"> help_outline </span>
		<div class="dflex question_body">
			<p>
				Você possuí rendimentos advindos de pessoa jurídica (empresas ou sociedades)?
				Caso esteja empregado como MEI ou possua salários superiores à R$ 2.000,00 por mês, assinale <strong> sim </strong>.
			</p>
			<small class="addendum">
				Em caso de dúvidas, procure saber se a empresa que o contrata se responsabiliza por realizar a entrega do imposto de renda de todos os seus funcionários.
			</small>
				<div class="dflex btn_group">
					<button @click="showHiddenField(0)" class="dflex btn btn_fill">
						<small> Sim </small>
					</button>

					<button @click="showHiddenField(0)" class="dflex btn">
						<small> Não </small>
					</button>
				</div>
		</div>
	</div>

	<div v-if="question[0]" class="hidden_field">
		<RadioBox
			option1="Possuo renda advinda de Pessoas Jurídicas"
			option2="Não possuo renda advinda de Pessoas Jurídicas"
			radioName="rendaPessoaJuridica"
		/>

		<hr class="blankspace small_blkspc">

		<p class="setp_par">
			Nesta etapa você deverá apresentar todas as fontes pagadoras com seus respectivos ganhos ao longo do último ano (desde a última declaração)
			Para obter todos os dados necessários você poderá usar a soma de todas suas notas fiscais emitidas ou requisitar um documento que informe todos os rendimentos ao longo deste último ano, como neste exemplo, caso você não emita notas fiscais.
		</p>

		<!-- Tabela: Rend. Pessoa Juridica -->
		<div class="dflex table_area">
			<!-- head -->
			<div class="dflex table_row table_head">
				<div class="dflex table_cell tbId1_number"> <strong> # </strong> </div>
				<div class="dflex table_cell tbId1_fonteNome"> <strong> Nome da fonte </strong> </div>
				<div class="dflex table_cell tbId1_fonteCnpj"> <strong> CNPJ/CPF da fonte </strong> </div>
				<div class="dflex table_cell tbId1_rendimentos"> <strong> Rendimentos recebidos </strong> </div>
				<div class="dflex table_cell tbId1_previdencia"> <strong> Previdência </strong> </div>
				<div class="dflex table_cell tbId1_impostoRetido"> <strong> Imposto retido </strong> </div>
				<div class="dflex table_cell tbId1_13"> <strong> 13° Salário </strong> </div>
				<div class="dflex table_cell tbId1_13irrpf"> <strong> IRRF sobre 13° </strong> </div>
				<div class="dflex table_cell tbId1_acoes"> <strong> Ações </strong> </div>
			</div>
			<!-- body -->
			<div class="dflex table_row table_body" v-for="(i, index) in 7" :key="index">
				<div class="dflex table_cell tbId1_number"> <small> 1 </small> </div>
				<div class="dflex table_cell tbId1_fonteNome"> <small> Guilherme e Carlos Telas ME </small> </div>
				<div class="dflex table_cell tbId1_fonteCnpj"> <small> 28.966.014/0001-83 </small> </div>
				<div class="dflex table_cell tbId1_rendimentos"> <small> R$ 30.210,00 </small> </div>
				<div class="dflex table_cell tbId1_previdencia"> <small> R$ 1.830,00 </small> </div>
				<div class="dflex table_cell tbId1_impostoRetido"> <small> R$ 2.550,00 </small> </div>
				<div class="dflex table_cell tbId1_13"> <small> R$ 4.250,00 </small> </div>
				<div class="dflex table_cell tbId1_13irrpf"> <small> R$ 1.210,00 </small> </div>
				<!-- option -->
				<div class="dflex table_cell tbId1_acoes">
					<button class="dflex table_option"> <span class="material-icons"> edit </span> <small> Editar </small> </button>
				</div>
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

	name: 'Step3Rendimentos',

	components: {
		InputTextBox, RadioBox, SelectBox
	},

	data() {
		return {
			question: [true, true]
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

.tbId1_number {width: 3.6%;}
.tbId1_fonteNome {width: 19%;}
.tbId1_fonteCnpj {width: 14%;}
.tbId1_rendimentos {width: 16%;}
.tbId1_previdencia {width: 11%;}
.tbId1_impostoRetido {width: 11%;}
.tbId1_13 {width: 8%;}
.tbId1_13irrpf {width: 10%;}
.tbId1_acoes {width: 8%;}

.tbId1_number, .tbId1_acoes {
	justify-content: center;
}

	.table_head .tbId1_number {
		border-radius: 8px 0 0 0;
	}

	.table_head .tbId1_acoes {
		border-radius: 0 8px 0 0;
	}

	.tbId1_number strong, .tbId1_number small {
		font-weight: 600;
	}

</style>