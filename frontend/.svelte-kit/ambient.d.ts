
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const STARSHIP_SHELL: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_config_metrics_registry: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const TERM_PROGRAM_VERSION: string;
	export const WINDOWID: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const LC_ALL: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const HELIX_RUNTIME: string;
	export const NU_LOG_FORMAT: string;
	export const COMMAND_MODE: string;
	export const ALACRITTY_SOCKET: string;
	export const npm_config_globalconfig: string;
	export const SSH_AUTH_SOCK: string;
	export const PROMPT_INDICATOR_VI_NORMAL: string;
	export const ALACRITTY_LOG: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PROMPT_COMMAND_RIGHT: string;
	export const npm_execpath: string;
	export const TMUX: string;
	export const PATH: string;
	export const NU_VERSION: string;
	export const npm_package_json: string;
	export const _: string;
	export const NU_LOG_DATE_FORMAT: string;
	export const LaunchInstanceID: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const CMD_DURATION_MS: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const XPC_FLAGS: string;
	export const TMUX_PANE: string;
	export const PROMPT_MULTILINE_INDICATOR: string;
	export const PROMPT_INDICATOR_VI_INSERT: string;
	export const npm_config_node_gyp: string;
	export const DIRS_POSITION: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const SHLVL: string;
	export const HOME: string;
	export const PROMPT_INDICATOR: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const NVM_BIN: string;
	export const BUN_INSTALL: string;
	export const npm_config_user_agent: string;
	export const LAST_EXIT_CODE: string;
	export const SECURITYSESSIONID: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		STARSHIP_SHELL: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		TERM: string;
		SHELL: string;
		npm_config_metrics_registry: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		TERM_PROGRAM_VERSION: string;
		WINDOWID: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		LC_ALL: string;
		USER: string;
		NVM_DIR: string;
		HELIX_RUNTIME: string;
		NU_LOG_FORMAT: string;
		COMMAND_MODE: string;
		ALACRITTY_SOCKET: string;
		npm_config_globalconfig: string;
		SSH_AUTH_SOCK: string;
		PROMPT_INDICATOR_VI_NORMAL: string;
		ALACRITTY_LOG: string;
		__CF_USER_TEXT_ENCODING: string;
		PROMPT_COMMAND_RIGHT: string;
		npm_execpath: string;
		TMUX: string;
		PATH: string;
		NU_VERSION: string;
		npm_package_json: string;
		_: string;
		NU_LOG_DATE_FORMAT: string;
		LaunchInstanceID: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		CMD_DURATION_MS: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		XPC_FLAGS: string;
		TMUX_PANE: string;
		PROMPT_MULTILINE_INDICATOR: string;
		PROMPT_INDICATOR_VI_INSERT: string;
		npm_config_node_gyp: string;
		DIRS_POSITION: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		SHLVL: string;
		HOME: string;
		PROMPT_INDICATOR: string;
		npm_config_cache: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		ALACRITTY_WINDOW_ID: string;
		NVM_BIN: string;
		BUN_INSTALL: string;
		npm_config_user_agent: string;
		LAST_EXIT_CODE: string;
		SECURITYSESSIONID: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
