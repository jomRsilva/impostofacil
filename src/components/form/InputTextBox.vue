<template>
		<div :class="['dflex', 'input_box', sizeType]">
			<label for=""> {{ labelText }} </label>
			<small class="dflex required_badge" v-if="isrequired">
				<span class="material-icons"> emergency </span> Obrigatório
			</small>
			<div class="dflex input_container">
				<input :type="type" name="" :placeholder="placeholderText">
			</div>
		</div>
</template>

<script>
export default {
	name: 'InputTextBox',
	data() {
		return {
			localVModel: ''
		}
	},
	props: {
		sizeType: String,
		labelText: String,
		placeholderText: String,
		vModel: String,
		isrequired: Boolean,
		type: String
	},

	created() {
		console.log(typeof(this.isrequired))
	}
}
</script>

<style>

</style>