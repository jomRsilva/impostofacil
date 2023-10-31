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
	<div class="dflex input_row">
		<InputTextBox
			sizeType="third_size"
			type="text"
			labelText="N° do recibo da última declaração (2022)"
			placeholderText="Insira o número aqui"
			:isrequired="false"
		/>
	</div>

	<!-- dados pessoais (hidden field) -->

	<div v-if="!question[0]" class="dflex hiddenfield_question">
		<span class="material-icons"> tips_and_updates </span>
		<div class="dflex question_body">
			<p> Gostaria de resgatar informações de um ano anterior? </p>
				<div class="dflex btn_group">
					<button @click="showHiddenField(0)" class="dflex btn btn_fill">
						<small> Sim </small>
					</button>

					<button @click="showHiddenField(0)" class="dflex btn">
						<small> Não, iniciar preenchimento do zero </small>
					</button>
				</div>
		</div>
	</div>

	<div v-if="question[0]" class="hidden_field">
		<hr class="blankspace small_blkspc">
		<h3 class="section_title"> Dados básicos </h3>

		<hr class="blankspace small_blkspc">

		<div class="dflex input_row">
			<InputTextBox
				sizeType="normal_size"
				type="text"
				labelText="Nome completo:"
				placeholderText="Insira seu nome aqui"
				:isrequired="true"
			/>
			<InputTextBox
				sizeType="normal_size"
				type="text"
				labelText="CPF:"
				placeholderText="Digite seu CPF sem pontos e traços"
				:isrequired="true"
			/>
		</div>

		<div class="dflex input_row">
			<InputTextBox
				sizeType="normal_size"
				type="date"
				labelText="Data de nascimento:"
				placeholderText="-- / -- / ----"
				:isrequired="true"
			/>
			<InputTextBox
				sizeType="normal_size"
				type="text"
				labelText="Título eleitoral:"
				placeholderText="---- ---- ----"
				:isrequired="true"
			/>
		</div>

		<hr class="blankspace small_blkspc">

		<h3 class="section_title"> Endereço </h3>

		<!-- hidden field 2: Endereço -->
		<div v-if="!question[1]" class="dflex hiddenfield_question">
		<span class="material-icons"> help_outline </span>
		<div class="dflex question_body">
			<p> Você mora atualmente no Brasil? </p>
				<div class="dflex btn_group">
					<button @click="showHiddenField(1)" class="dflex btn btn_fill">
						<small> Sim </small>
					</button>

					<button @click="showHiddenField(1)" class="dflex btn">
						<small> Não</small>
					</button>
				</div>
		</div>
	</div>

	<div v-if="question[1]" class="hidden_field">

		<RadioBox
			option1="Brasil"
			option2="Exterior"
			radioName="endereco"
		/>

		<hr class="blankspace small_blkspc">

		<div class="dflex input_row">
			<SelectBox
				sizeType="normal_size"
				labelText="Tipo:"
				disable="Clique para selecionar"
				:isrequired="true"
				:optionsList="['Aeroporto', 'Rua', 'Alameda', 'Área', 'Avenidan', 'Campon', 'Chácaran', 'Colônia', 'Condomínio']"
			/>
		</div>

		<div class="dflex input_row">
			<InputTextBox
				sizeType="normal_size"
				type="text"
				labelText="CEP:"
				placeholderText="Digite seu CEP com os traços"
				:isrequired="true"
			/>
		</div>

		<div class="dflex input_row">
			<InputTextBox
				sizeType="full_size"
				type="text"
				labelText="Logradouro:"
				placeholderText="Digite seu endereço"
				:isrequired="true"
			/>
		</div>

		<div class="dflex input_row">
			<InputTextBox
				sizeType="third_size"
				type="text"
				labelText="Número:"
				placeholderText="---"
				:isrequired="true"
			/>

			<InputTextBox
				sizeType="third_size"
				type="text"
				labelText="Complemento:"
				placeholderText="---"
				:isrequired="true"
			/>

			<InputTextBox
				sizeType="third_size"
				type="text"
				labelText="Bairro/distrito:"
				placeholderText="---"
				:isrequired="true"
			/>
		</div>

		<div class="dflex input_row">
			<SelectBox
				sizeType="third_size"
				labelText="UF:"
				disable="Clique para selecionar"
				:isrequired="true"
				:optionsList="[
					'AC',
					'AL',
					'AP',
					'AM',
					'BA',
					'CE',
					'DF',
					'ES',
					'GO',
					'MA',
					'MS',
					'MT',
					'MG',
					'PA',
					'PB',
					'PR',
					'PE',
					'PI',
					'RJ',
					'RN',
					'RS',
					'RO',
					'RR',
					'SC',
					'SP',
					'SE',
					'TO',
				]"
			/>

			<InputTextBox
				sizeType="third_size"
				type="text"
				labelText="Cidade:"
				placeholderText="Digite o nome da sua cidade"
				:isrequired="true"
			/>

		</div>

		<hr class="blankspace small_blkspc">

		<h3 class="section_title"> Contato </h3>

		<hr class="blankspace small_blkspc">

		<div class="dflex input_row">
			<InputTextBox
				sizeType="third_size"
				type="text"
				labelText="DDD 0xx"
				placeholderText="(--)"
				:isrequired="false"
			/>

			<InputTextBox
				sizeType="normal_size"
				type="text"
				labelText="Telefone:"
				placeholderText="Digite seu telefone sem usar traços"
				:isrequired="false"
			/>
		</div>

		<div class="dflex input_row">
			<InputTextBox
				sizeType="third_size"
				type="text"
				labelText="DDD 0xx (celular)"
				placeholderText="(--)"
				:isrequired="true"
			/>

			<InputTextBox
				sizeType="normal_size"
				type="text"
				labelText="Celular:"
				placeholderText="Digite seu telefone sem usar traços"
				:isrequired="true"
			/>
		</div>

		<div class="dflex input_row">
			<InputTextBox
				sizeType="full_size"
				type="text"
				labelText="E-mail:"
				placeholderText="Digite seu e-mail completo"
				:isrequired="true"
			/>
		</div>

		<hr class="blankspace small_blkspc">

		<h3 class="section_title"> Ocupação </h3>


		<!-- hidden field 3: Ocupação -->
		<div v-if="!question[2]" class="dflex hiddenfield_question">
		<span class="material-icons"> help_outline </span>
		<div class="dflex question_body">
			<p> Possui alguma ocupação profissional atualmente? </p>
				<div class="dflex btn_group">
					<button @click="showHiddenField(2)" class="dflex btn btn_fill">
						<small> Sim </small>
					</button>

					<button @click="showHiddenField(2)" class="dflex btn">
						<small> Não </small>
					</button>
				</div>
		</div>
	</div>

	<div v-if="question[2]" class="hidden_field">
		<RadioBox
			option1="Empregado/trabalhando"
			option2="Desempregado"
			radioName="ocupacao"
		/>

		<hr class="blankspace small_blkspc">

		<div class="dflex input_row">
			<SelectBox
				sizeType="full_size"
				labelText="Tipo:"
				disable="Clique para selecionar"
				:isrequired="true"
				:optionsList="[
					'Empregado de empresa do setor privado, exceto de instituições financeiras	01',
					'Empregado de instituições financeiras públicas e privadas	02',
					'Empregado ou contratado de organismo internacional ou de organização não-governamental	03',
					'Profissional liberal ou autônomo sem vínculo de emprego	11',
					'Proprietário de empresa ou de firma individual ou empregador-titular	12',
					'Capitalista, que auferiu rendimentos de capital, inclusive de aluguéis	13',
					'Membro ou servidor público da administração direta federal	21',
					'Servidor público de autarquia ou fundação federal	22',
					'Empregado de empresa pública ou de economia mista federal, exceto de instituições financeiras	23',
					'Membro ou servidor público da administração direta estadual e do Distrito Federal	31',
					'Servidor público de autarquia ou fundação estadual e do Distrito Federal	32',
					'Empregado de empresa pública ou de economia mista estadual e do Distrito Federal, exceto de instituições financeiras	33',
					'Membro ou servidor público da administração direta municipal	41',
					'Servidor público de autarquia ou fundação municipal	42',
					'Empregado de empresa pública ou de economia mista municipal	43',
					'Militar	51',
					'Aposentado, militar da reserva ou reformado e pensionista de previdência	61',
					'Beneficiário de pensão alimentícia judicial	71',
					'Bolsista	72',
					'Espólio	81',
					'Natureza da ocupação não especificada anteriormente	91'
				]"
			/>
		</div>

		<div class="dflex input_row iptrow_labeloutside">
			<label class="outside_label"> Ocupação principal: </label>
			<p>
				Digite o nome da profissão e clique na opção que melhor descreve sua ocupação.
				Caso tenha dúvidas, consulte a
				<a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/pagamento/carne-leao/manual/ocupacoes" target="_blank">
					lista completa
				</a>
				de ocupações reconhecidas pela receita federal.
				Se sua ocupação não constar na lista, selecione a opção ‘Outro’ e a descreva no campo que surgir abaixo.
			</p>
			<SelectBox
				sizeType="full_size"
				labelText=""
				disable="Clique para selecionar"
				:isrequired="true"
				:optionsList="[
					'Opção', 'Outro'
				]"
			/>
		</div>

		<hr class="blankspace small_blkspc">

		<h3 class="section_title"> Conjugue/Companheiro </h3>


		<!-- hidden field 4: Conjugue/Companheiro -->
		<div v-if="!question[3]" class="dflex hiddenfield_question">
		<span class="material-icons"> help_outline </span>
		<div class="dflex question_body">
			<p> Possui algum conjugue ou companheiro? </p>
				<div class="dflex btn_group">
					<button @click="showHiddenField(3)" class="dflex btn btn_fill">
						<small> Sim </small>
					</button>

					<button @click="showHiddenField(3)" class="dflex btn">
						<small> Não </small>
					</button>
				</div>
		</div>
	</div>

	<div v-if="question[3]" class="hidden_field">
		<RadioBox
			option1="Possuo conjugue ou companheiro"
			option2="Não possuo conjugue "
			radioName="conjugue"
		/>

		<hr class="blankspace small_blkspc">

		<div class="dflex input_row">
			<InputTextBox
				sizeType="normal_size"
				type="text"
				labelText="CPF do conjugue ou companheiro:"
				placeholderText="Digite seu CPF sem pontos e traços"
				:isrequired="true"
			/>
		</div>
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

	name: 'Step1Identificacao',

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