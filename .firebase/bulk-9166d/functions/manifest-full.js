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
		client: {"start":"_app/immutable/entry/start.fcc74e9e.js","app":"_app/immutable/entry/app.60e03ab0.js","imports":["_app/immutable/entry/start.fcc74e9e.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/singletons.bc1f9c7d.js","_app/immutable/entry/app.60e03ab0.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/index.b9569212.js"],"stylesheets":[],"fonts":[]},
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
