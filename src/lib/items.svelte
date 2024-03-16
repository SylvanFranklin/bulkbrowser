<script lang="ts">
  import Bottom from "./bottom.svelte";
  import { brandToColor, type SearchItem } from "./data";
  export let searchItems: SearchItem[];
  export let query: string;

  function highlightMatch(query: string, name: string) {
    const regex = new RegExp(query, "gi"); // Create a case-insensitive regex
    const highlightedName = name.replace(
      regex,
      (match) => `<mark>${match}</mark>`
    );
    return highlightedName;
  }
  function expand(item: SearchItem) {
    const cop = !item.isOpen;
    for (const prod of searchItems) {
      prod.isOpen = false;
    }
    return cop;
  }
</script>

<div class="grid gap-4 mx-auto mt-10 w-4/5">
  {#each searchItems as product, i}
    <button
      class={`w-full dark:bg-slate-700/80 bg-gray-200/70 p-3 rounded-lg dark:text-slate-300 items-center text-xl font-bold shadow-sm duration-100 text-left font-mono ${
        i == 0 && query && "scale-110"
      }`}
      on:click={() => {
        product.isOpen = expand(product);
      }}
    >
      <span class="flex flex-row items-center w-full">
        <h3 class="ml-2 whitespace-nowrap overflow-hidden w-[58%] truncate">
          {@html highlightMatch(query, product.bin.name)}
        </h3>

        {#if product.bin.brand}
          <div
            class={`ml-auto text-white w-20 overflow-clip ${brandToColor(
              product.bin.brand
            )} rounded-lg px-3 h-10 items-center flex justify-center font-mono tracking-widest hover:scale-95 duration-200`}
          >
            {@html highlightMatch(query, product.bin.brand)}
          </div>
        {/if}

        <div
          class="flex justify-center items-center px-3 ml-3 h-10 font-mono tracking-widest text-white bg-green-500 rounded-lg duration-200 dark:bg-green-700 hover:scale-95"
        >
          #{@html highlightMatch(query, product.bin.num.toString())}
        </div>
      </span>

      {#if product.isOpen}
        <Bottom product={product.bin} />
      {/if}
    </button>
  {/each}
</div>
