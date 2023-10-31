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
			<li @click="changeStep(1)" :class="{dflex: true, nav_selected: ($store.state.stepFocus === 1), nav_done: false, nav_alert: false}">
				<strong v-if="true"> 1 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Identificação </small>
			</li>

			<li @click="changeStep(2)" :class="{dflex: true, nav_selected: ($store.state.stepFocus === 2), nav_done: false, nav_alert: false}">
				<strong v-if="true"> 2 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Familiares </small>
			</li>

			<li @click="changeStep(3)" :class="{dflex: true, nav_selected: ($store.state.stepFocus === 3), nav_done: false, nav_alert: false}">
				<strong v-if="true"> 3 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Rendimentos </small>
			</li>

			<li @click="changeStep(4)" :class="{dflex: true, nav_selected: ($store.state.stepFocus === 4), nav_done: false, nav_alert: false}">
				<strong v-if="true"> 4 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Pagamentos </small>
			</li>

			<li @click="changeStep(5)" :class="{dflex: true, nav_selected: ($store.state.stepFocus === 5), nav_done: false, nav_alert: false}">
				<strong v-if="true"> 5 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Bens e dívidas </small>
			</li>

			<li @click="changeStep(6)" :class="{dflex: true, nav_selected: ($store.state.stepFocus === 6), nav_done: false, nav_alert: false}">
				<strong v-if="true"> 6 </strong>
				<strong v-if="false"> <span class="material-icons"> done </span> </strong>
				<strong v-if="false"> <span class="material-icons"> close </span> </strong>
				<small> Bens e rendimentos extras </small>
			</li>

			<li @click="changeStep(7)" :class="{dflex: true, nav_selected: ($store.state.stepFocus === 7), nav_done: false, nav_alert: false}">
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
				Você poderá escolher a Tributação por Deduções Legais ou por desconto simplificado em "Revisão e cálculo"
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
		},
		changeStep (step) {
			this.$store.state.stepFocus = step
			this.$store.state.mobNavReq = false
		}
	}

}
</script>

<style>

</style>