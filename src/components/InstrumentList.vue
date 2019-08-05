<template>
  <div class="instrument-list">
  	<div class='wrapper'>
  		<instrument-card
  			v-for='item in instruments'
  			:key='item'
  			:instrument='item'
  		>
  		</instrument-card>
  	</div>
  </div>
</template>

<script>
	import instrumentCard from './InstrumentCard';

	const instruments = [
		'guitar',
		'piano',
		'drum',
		'dombra',
		'accordion',
		'triangle',
		'trumpet',
		'flute'
	];

	export default {
	  name: 'instrument-list',
	  components: { instrumentCard },
	  data: function() {
	  	return {
	  		instruments
	  	}
	  }
	}
</script>

<style scoped>
	.instrument-list {
		background-color: #ddd;

	}

	.instrument-list .wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-top: 20px;
	}

	/* корректное выравнивание последней строки */
	.instrument-list .wrapper::after {
		content: "";
  	width: 200px;
	}
</style>
