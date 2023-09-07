

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f395116e.js","_app/immutable/chunks/scheduler.430fa0b3.js","_app/immutable/chunks/index.56af74da.js"];
export const stylesheets = ["_app/immutable/assets/2.3ab6617e.css"];
export const fonts = [];
