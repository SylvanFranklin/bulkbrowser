

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b2c52440.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/index.b9569212.js"];
export const stylesheets = [];
export const fonts = [];
