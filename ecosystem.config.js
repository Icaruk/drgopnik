module.exports = {
  apps: [{
    name: "drgopnik",
    script: "serve",

    log_date_format: "DD/MM/YYYY HH:mm:ss Z",

		instances: 1,
		exec_mode: "fork",
		watch: true,

    env: {
   	  NODE_ENV: "production",
			TZ: 'Europe/Madrid',
      PM2_SERVE_PATH: 'dist',
      PM2_SERVE_PORT: 9876,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: '/index.html'
    }
  }]
}
