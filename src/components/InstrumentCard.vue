<template>
  <div class="instrument-card">
  	<h3>{{name}}</h3>
  </div>
</template>

<script>

	export default {
	  name: 'instrument-card',
	  props: { instrument: String },
	  data: function() {
	  	return {
	  		name: this.instrument
	  	}
	  }
	}
</script>

<style scoped>
	.instrument-card {
		background-color: #ccc;
		border: 1px solid #222;
		margin-bottom: 20px;
		height: 240px;
		width: 200px;
	}

</style>
