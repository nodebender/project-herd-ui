module.exports = {
	context: [
		"/api"
	],
	"target": process.env.API_PROXY || "http://localhost:8080",
	"changeOrigin": true,
	"secure": false
}
