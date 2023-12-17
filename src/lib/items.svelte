<script lang="ts">
  import Bottom from "./bottom.svelte";
  import { brandToColor, type SearchItem } from "./data";
  export let searchItems: SearchItem[];
  export let querry: string;

  function highlightMatch(querry: string, name: string) {
    const regex = new RegExp(querry, "gi"); // Create a case-insensitive regex
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

<div class="grid gap-4 mt-10 w-4/5 mx-auto">
  {#each searchItems as product, i}
    <button
      class={`w-full dark:bg-slate-700/80 bg-gray-200/70 p-3 rounded-lg dark:text-slate-300 items-center text-xl font-bold shadow-sm duration-100 text-left font-mono ${
        i == 0 && querry && "scale-110"
      }`}
      on:click={() => {
        product.isOpen = expand(product);
      }}
    >
      <span class="w-full flex flex-row items-center">
        <h3 class="ml-2 whitespace-nowrap overflow-hidden w-[58%] truncate">
          {@html highlightMatch(querry, product.bin.name)}
        </h3>

        {#if product.bin.brand}
          <div
            class={`ml-auto text-white w-20 overflow-clip ${brandToColor(
              product.bin.brand
            )} rounded-lg px-3 h-10 items-center flex justify-center font-mono tracking-widest hover:scale-95 duration-200`}
          >
            {@html highlightMatch(querry, product.bin.brand)}
          </div>
        {/if}

        <div
          class="ml-3 bg-green-500 text-white dark:bg-green-700 rounded-lg px-3 h-10 items-center flex justify-center font-mono tracking-widest hover:scale-95 duration-200"
        >
          #{@html highlightMatch(querry, product.bin.num.toString())}
        </div>
      </span>

      {#if product.isOpen}
        <Bottom product={product.bin} />
      {/if}
    </button>
  {/each}
</div>
