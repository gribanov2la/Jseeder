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
		docsDir: 'docs',
		locales: {
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

