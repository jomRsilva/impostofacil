<template>
		<div :class="['dflex', 'input_box', sizeType]">
			<label for=""> {{ labelText }} </label>
			<small class="dflex required_badge" v-if="isrequired">
				<span class="material-icons"> emergency </span> Obrigatório
			</small>
			<div class="dflex input_container">
				<select name="" id="">
					<option value="" disabled selected> {{ disable }} </option>
					<option v-for="(option, index) in optionsList" :key="index" :value="optionsList[index]" > {{ optionsList[index] }} </option>
				</select>
			</div>
		</div>
</template>

<script>
export default {
	name: 'SelectBox',
	data() {
		return {
			localVModel: ''
		}
	},
	props: {
		sizeType: String,
		labelText: String,
		disable: String,
		optionsList: [],
		isrequired: Boolean,
	},

	created() {
		console.log(typeof(this.isrequired))
	}
}
</script>

<style>

</style>