<script lang="ts">
    import Bottom from "./bottom.svelte";
    import { brandToColor, type Bin } from "./data";
    export let bins: Bin[];
    export let query: string;

    function highlightMatch(query: string, name: string) {
        const regex = new RegExp(query, "gi"); // Create a case-insensitive regex
        const highlightedName = name.replace(
            regex,
            (match) => `<mark>${match}</mark>`,
        );
        return highlightedName;
    }

    function smart_clip(title: string): string {
        if (title.length > 22) {
            return title.slice(0, 22) + "...";
        }

        return title;
    }
</script>

<div class="grid gap-4 justify-center mx-auto mt-10 w-4/5">
    {#each bins as bin, i}
        <button
            class={`w-full dark:bg-slate-700/40 bg-gray-200/50 p-3 rounded-lg  items-center text-lg font-mono shadow-lg duration-100 text-left font-bold ${
                i == 0 && query && "scale-110"
            }`}
            on:click={() => {
                // product.isOpen = expand(product);
            }}
        >
            <span class="flex flex-row items-center w-full text-white">
                <h3 class="pr-4 pl-1 text-black whitespace-nowrap overflow-clip dark:text-slate-300">
                    {@html highlightMatch(query, smart_clip(bin.name))}
                </h3>

                {#if bin.brand}
                    <div
                        class={`ml-auto w-20 overflow-clip ${brandToColor(
                            bin.brand,
                        )} rounded-lg px-3 h-10 items-center flex justify-center font-mono tracking-widest hover:scale-95 duration-200`}
                    >
                        {@html highlightMatch(query, bin.brand)}
                    </div>
                {/if}

                <div
                    class="flex justify-center items-center px-3 ml-3 h-10 font-mono tracking-widest text-white bg-green-500 rounded-lg duration-200 dark:bg-green-700 hover:scale-95"
                >
                    #{@html highlightMatch(query, bin.num.toString())}
                </div>
            </span>

            <!-- {#if product.isOpen} -->
            <!--     <Bottom product={product.bin} /> -->
            <!-- {/if} -->
        </button>
    {/each}
</div>
