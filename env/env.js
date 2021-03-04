module.exports = {
	NODE_ENV: 'none',
	MODE_ENV: {
		local: {
			api: 'http://superapp.minerva.vn:9218',
			cloudapi: 'https://cloudapi.minerva.vn',
			show_log: true,
			hot: true,
			liveReload: true,
			host: "localhost",
			port: 6005,

		},
		dev: {
			api: 'http://bankapp.minerva.vn:9233',
			cloudapi: 'https://cloudapi.minerva.vn'
		},
		sta: {
			api: 'http://superapp.minerva.vn:9218',
			cloudapi: 'https://cloudapi.minerva.vn'
		},
		prod: {
			api: 'https://superapp.minerva.vn',
			cloudapi: 'https://cloudapi.minerva.vn'
		},
	}
};
