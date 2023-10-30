<template>
  <main class="dlfex page_container">

		<!-- hero -->
		<section class="dflex home_hero">
			<div class="dflex home_hgroup">
				<h1> Ano atual </h1>
					<span class="material-icons circle_separate">	circle </span>
					<h2> 2023 está com IRPF pendente <span class="material-icons"> error </span> </h2>
			</div>

			<p class="dft_par">
				Você ainda não entregou a declaração do imposto de renda este ano. <br>
				Para fazê-lo, <strong> clique/toque no botão abaixo </strong>:
			</p>

			<div class="dflex btn_group">
				<router-link to="/formulario" class="dflex btn btn_fill">
					<small> Iniciar entrega do imposto </small>
					<span class="material-icons"> play_circle_outline </span>
				</router-link>

				<router-link to="/" class="dflex btn">
					<small> Iniciar entrega com dados anteriores </small>
				</router-link>
			</div>
		</section>

		<router-link to="/formulario"> Formulario </router-link>
		<router-link to="/conclusao"> Conclusao </router-link>
  </main>
</template>

<script>


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
