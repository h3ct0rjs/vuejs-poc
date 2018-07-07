import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/Search';
import vueResource from 'vue-resource';

Vue.use(vueResource);
Vue.config.productionTip = false;

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Search',
			component: Search,
		},
	],
});
