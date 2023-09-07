export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","imune.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d3e67b45.js","app":"_app/immutable/entry/app.4d8658b8.js","imports":["_app/immutable/entry/start.d3e67b45.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/singletons.42f8cf59.js","_app/immutable/entry/app.4d8658b8.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/index.56af74da.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
