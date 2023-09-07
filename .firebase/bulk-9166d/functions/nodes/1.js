

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.910c9dab.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/index.56af74da.js","_app/immutable/chunks/singletons.42f8cf59.js"];
export const stylesheets = [];
export const fonts = [];
