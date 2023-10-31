<template>

	<aside :class="{'dflex': true, 'aside_nav': true, 'isMobNavReq': $store.state.mobNavReq}">

		<h4> Etapas </h4>

		<button @click="toggleNavInMob" class="dflex nav_close_mob">
			<span class="material-icons"> close </span>
		</button>

		<p>
			Você pode navegar livremente entre as etapas, caso precise revisar informações.
			Basta clicar sobre elas:
		</p>

		<hr>

		<!-- list -->
		<ul class="dflex nav_list">
			<li :class="{dflex: true, nav_selected: true, nav_done: false, nav_alert: false}">
				<strong v-if="true"> 1 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Identificação </small>
			</li>

			<li :class="{dflex: true, nav_selected: false, nav_done: false, nav_alert: false}">
				<strong v-if="true"> 2 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Familiares </small>
			</li>

			<li :class="{dflex: true, nav_selected: false, nav_done: false, nav_alert: false}">
				<strong v-if="true"> 3 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Rendimentos </small>
			</li>

			<li :class="{dflex: true, nav_selected: false, nav_done: false, nav_alert: false}">
				<strong v-if="true"> 4 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Pagamentos </small>
			</li>

			<li :class="{dflex: true, nav_selected: false, nav_done: false, nav_alert: false}">
				<strong v-if="true"> 5 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Bens e dívidas </small>
			</li>

			<li :class="{dflex: true, nav_selected: false, nav_done: false, nav_alert: false}">
				<strong v-if="true"> 6 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Bens e rendimentos extras </small>
			</li>

			<li :class="{dflex: true, nav_selected: false, nav_done: false, nav_alert: false}">
				<strong v-if="true"> 7 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Revisão e cálculo </small>
			</li>
		</ul>

		<!-- payment -->

		<h3 class="section_title section_title_redux"> Cálculo preliminar: </h3>

		<div id="payBadge" class="dflex bill_badge">
			<strong> VALOR A PAGAR: </strong>
			<small> <b> R$ </b> 354,00 </small>
		</div>
		<div class="dflex bill_badge">
			<strong> VALOR A RECEBER: </strong>
			<small> <b> R$ </b> 0,00 </small>
		</div>

		<div id="asideHint" class="dflex hint_par">
			<span class="material-icons"> info </span>
			<p>
				Aviso: os valores acima são referentes à um cálculo preliminar simples e podem não refletir os valores finais. Preencha todas as etapas e caso queira alterar o tipo de cálculo, você poderá fazê-lo na última etapa do processo em “Revisão e cálculo”.
			</p>
		</div>

	</aside>

</template>

<script>
export default {

	name: 'Steps',

	methods: {
		toggleNavInMob () {
			this.$store.state.mobNavReq = !this.$store.state.mobNavReq
		}
	}

}
</script>

<style>

</style>