<script lang="ts">
    import type { Bin } from "$lib/data";
    import Items from "$lib/items.svelte";
    import "../app.css";

    const closeAllBins = (bins: Bin[]) => {
        return bins.map((bin) => {
            return {
                bin: bin,
                isOpen: false,
            };
        });
    };

    let query = "";
    let bins: Array<Bin> = [];

    async function formChange(event: Event) {
        const input = event.target as HTMLInputElement;
        query = input.value;
        const response = await fetch("http://localhost:8000/search/" + query);

        bins = (await response.json()) as Bin[];
        console.log(bins);
    }

    let dark_mode = false;
    function toggleDarkMode() {
        dark_mode = !dark_mode;

        dark_mode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    }
</script>

<main
    class="flex overflow-scroll flex-col w-screen h-screen bg-white dark:bg-gray-800"
>
    <nav
        class="flex items-center p-3 h-20 rounded-xl shadow-lg hover:dark:brightness-125 hover:brightness-75"
    >
        <button
            on:click={toggleDarkMode}
            class="p-3 rounded-lg shadow-md duration-200 bg-gray-200/10"
        >
            {#if dark_mode}
                <span class="text-3xl rotate-90 dark:text-white">
                    <svg
                        fill="currentColor"
                        stroke-width="0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        style="overflow: visible; color: currentcolor;"
                        ><path
                            d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                        /></svg
                    >
                </span>
            {:else}
                <span class="text-3xl dark:text-white">
                    <svg
                        fill="currentColor"
                        stroke-width="0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        style="overflow: visible; color: currentcolor;"
                        ><path
                            d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480Z"
                        /></svg
                    >
                </span>
            {/if}
        </button>
        <header
            class="flex flex-col mx-auto font-mono text-5xl font-bold text-gray-600 select-none dark:text-white/20"
        >
            <div>
                THE
                <span
                    class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400 dark:from-yellow-400 dark:to-red-500"
                >
                    BULK
                </span>
                BROWSER
            </div>
            <!-- <div class="mt-1 ml-auto text-2xl font-bold dark:text-white/40"> -->
            <!--     by Sylvan -->
            <!-- </div> -->
        </header>
    </nav>

    <div>
        <div
            class="flex flex-col items-center mx-auto mt-32 rounded-md sm:w-3/4 lg:w-2/5"
        >
            <form
                class="flex flex-row justify-center items-center p-4 mt-4 w-full h-full text-black bg-none rounded-xl shadow-lg dark:text-white bg-gray-200/40 dark:bg-slate-900/30"
                on:input|preventDefault={formChange}
            >
                <!-- svelte-ignore a11y-autofocus -->
                <input
                    type="text"
                    autofocus
                    placeholder="search..."
                    class="w-full h-full font-mono text-3xl text-black bg-transparent bg-none border-white outline-none dark:text-white placeholder-black/20 dark:placeholder-white/10"
                />
                <!-- <span class="flex w-12 text-white/10"> -->
                <!--   <GoSearch /> -->
                <!-- </span> -->
            </form>

            <Items bins={bins.slice(0, 5)} {query} />
        </div>
    </div>
</main>
