<template>
  <div class="main-page">
  	<header-component></header-component>
  	<navbar-component></navbar-component>
  	<router-view></router-view>
  	<footer-component></footer-component>
  </div>
</template>

<script>
	import headerComponent from './HeaderComponent';
	import navbarComponent from './NavbarComponent';
	import footerComponent from './FooterComponent';

	export default {
	  name: 'main-page',
	  components: {
	  	headerComponent,
	  	navbarComponent,
	  	footerComponent
	  }
	}
</script>

<style>
</style>
