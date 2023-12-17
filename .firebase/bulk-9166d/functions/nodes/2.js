

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c7d9b468.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/index.b9569212.js"];
export const stylesheets = ["_app/immutable/assets/2.31063969.css"];
export const fonts = [];
