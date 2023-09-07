

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2ce23f21.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/index.56af74da.js"];
export const stylesheets = [];
export const fonts = [];
