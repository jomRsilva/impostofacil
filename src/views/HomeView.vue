<template>
  <main id="homePageContainer" class="dlfex page_container">

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

		<!-- Lista de anos -->

		<h3 class="section_title"> Anos anteriores </h3>

		<p class="dft_par">
			Caso precise consultar entregas anteriores, clique/toque sobre o ano desejado:
		</p>

		<ul class="dflex anos_list">
			<li class="dflex ano_card">
				<strong> 2018 </strong>
				<div class="status_badge stsBdg_success">
					<small> Entregue e processado </small>
					<span class="material-icons"> check_circle </span>
				</div>
			</li>

			<li class="dflex ano_card">
				<strong> 2019 </strong>
				<div class="status_badge stsBdg_success">
					<small> Entregue e processado </small>
					<span class="material-icons"> check_circle </span>
				</div>
			</li>

			<li class="dflex ano_card">
				<strong> 2020 </strong>
				<div class="status_badge stsBdg_success">
					<small> Entregue e processado </small>
					<span class="material-icons"> check_circle </span>
				</div>
			</li>

			<li class="dflex ano_card">
				<strong> 2021 </strong>
				<div class="status_badge stsBdg_success">
					<small> Entregue e processado </small>
					<span class="material-icons"> check_circle </span>
				</div>
			</li>

			<li class="dflex ano_card">
				<strong> 2022 </strong>
				<div class="status_badge stsBdg_wait">
					<small> Entregue e em análise </small>
					<span class="material-icons"> pending </span>
				</div>
			</li>

			<li class="dflex ano_card">
				<strong> 2023 </strong>
				<div class="status_badge stsBdg_alert">
					<small> Não entregue </small>
					<span class="material-icons"> error </span>
				</div>
			</li>
		</ul>
  </main>
</template>

<script>


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
