import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import layout from '@/components/layout'
import webCome from '@/components/pages/webComePage'
import list from '@/components/pages/list/list'
import listReluter from '@/components/pages/list/listReluter'

Vue.use(Router);

const routes = {
	routes: [
	{
		path: '/login',
		component: login
	},
	{
		path: '/',
		name: 'index',
		component: layout,
		children:[
		{
			path: 'webCome',
			name: 'webCome',
			component: webCome
		},
		{
			path: 'list',
			name: 'list',
			component: list,
			children:[
			{
				path: '/listReluter',
				name: 'listReluter',
				component: listReluter,
			}
			]
		}

		]
	}
	
	]
};

export default new Router(routes);
