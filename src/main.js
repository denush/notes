import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import MainPage from './components/MainPage';
import InstrumentList from './components/InstrumentList';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
	{
		path: '/',
		redirect: '/instrument-list',
		component: MainPage,
		children: [
			{ path: '/instrument-list', component: InstrumentList }
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	router,
  render: h => h(App)
}).$mount('#app');
