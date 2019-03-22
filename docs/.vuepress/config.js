module.exports = {
	locales: {
		'/ru/': {
			lang: 'ru',
			title: 'Jseeder',
			description: 'Централизованное управление состоянием для Vue.js'
		}
	},
	serviceWorker: false,
	themeConfig: {
		// algolia: {
		// 	apiKey: '97f135e4b5f5487fb53f0f2dae8db59d',
		// 	indexName: 'vuex'
		// },
		repo: 'vuejs/vuex',
		docsDir: 'docs',
		locales: {
			// '/': {
			// },
			'/ru/': {
				label: 'Русский',
				selectText: 'Переводы',
				editLinkText: 'Изменить эту страницу на GitHub',
				nav: [
					{
						text: 'Руководство',
						link: '/ru/guide/'
					},
					{
						text: 'API',
						link: '/ru/api/'
					}
				],
				sidebar: [
					'/ru/installation',
					'/ru/usage',
					{
						title: 'Основные понятия',
						collapsable: false,
						children: [
							'/ru/core-concepts/structure',
							'/ru/core-concepts/collection',
							'/ru/core-concepts/seeding',
							'/ru/core-concepts/i18n'
						]
					},
					{
						title: 'Генераторы',
						collapsable: false,
						children: [
							'/ru/generators/dataset',
							'/ru/generators/string',
							'/ru/generators/uuid'
						]
					}
				]
			}
		}
	}
};

