module.exports = {
	base: '/Jseeder/',
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Jseeder',
			description: 'Generating a set of random data'
		},
		'/ru/': {
			lang: 'ru',
			title: 'Jseeder',
			description: 'Генерация набора случайных данных'
		}
	},
	serviceWorker: true,
	themeConfig: {
		logo: '/logo.png',
		docsDir: 'docs',
		repo: 'gribanov2la/Jseeder',
		locales: {
			'/': {
				label: 'English',
				selectText: 'Translations',
				sidebar: [
					{
						title: 'Introduction',
						collapsable: false,
						children: [
							'/installation',
							'/fast-start',
						]
					},
					{
						title: 'Core concepts',
						collapsable: false,
						children: [
							'/core-concepts/generators',
							'/core-concepts/collection',
							'/core-concepts/seeding',
							'/core-concepts/i18n'
						]
					},
					{
						title: 'Generators',
						collapsable: false,
						children: [
							'/generators/dataset',
							'/generators/string',
							'/generators/uuid'
						]
					}
				]
			},
			'/ru/': {
				label: 'Русский',
				selectText: 'Переводы',
				sidebar: [
					{
						title: 'Введение',
						collapsable: false,
						children: [
							'/ru/installation',
							'/ru/fast-start',
						]
					},
					{
						title: 'Основные понятия',
						collapsable: false,
						children: [
							'/ru/core-concepts/generators',
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

