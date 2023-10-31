<template>
		<div class="dflex radio_box">
			<label class="radio_container"> {{ option1 }}
				<input type="radio" checked="checked" :name="radioName">
				<span class="checkmark_container"></span>
			</label>
			<label class="radio_container"> {{ option2 }}
				<input type="radio" :name="radioName">
				<span class="checkmark_container"></span>
			</label>
		</div>
</template>

<script>
export default {
	name: 'RadioBox',
	data() {
		return {
			localVModel: ''
		}
	},
	props: {
		option1: String,
		option2: String,
		radioName: String
	}

}
</script>

<style>

</style>