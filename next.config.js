const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
	pwa: {
		dest: 'public',
	},
	assetPrefix: isProd
		? 'https://cdn.statically.io/gh/Jerell/next-pwa/main/'
		: '',
})
