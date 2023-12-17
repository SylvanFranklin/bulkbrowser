

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8948e558.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/index.b9569212.js","_app/immutable/chunks/singletons.bc1f9c7d.js"];
export const stylesheets = [];
export const fonts = [];
