<template>

<header class="dflex cabecalho">

	<!-- logo -->
	<div class="dflex logo_side">
		<img src="../assets/img/irpflogo.svg" class="irpf_logo" alt="IRPF Logo">
		<span> Imposto Fácil </span>
	</div>

	<!-- profile -->
	<div class="dflex profile_side">
		<a class="profile_button"> profilebutton </a>
		<button @click="toggleNavInMob" class="dflex mob_open_navlist">
			<span class="material-icons"> checklist </span>
		</button>
	</div>

</header>

</template>

<script>
export default {

	name: 'Header',

	methods: {
		toggleNavInMob () {
			this.$store.state.mobNavReq = !this.$store.state.mobNavReq
		}
	}

}
</script>

<style>

</style>