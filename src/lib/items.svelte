<script lang="ts">
  import Bottom from "./bottom.svelte";
  import type { SearchItem } from "./data";
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

<div class="grid gap-4 mt-10 w-3/4 mx-auto">
  {#each searchItems as product}
    <button
      class="w-full bg-slate-700/80 p-2 py-2 rounded-lg text-slate-300 items-center text-xl font-bold hover:brightness-105 shadow-lg duration-100 "
      on:click={() => {
        product.isOpen = expand(product);
      }}
    >
      <span class="w-full flex flex-row items-center">
        <h3 class="whitespace-nowrap overflow-clip w-[60%]">
          {@html highlightMatch(querry, product.bin.name)}
        </h3>

        {#if product.bin.brand}
          <div
            class="ml-auto bg-red-400/50 rounded-lg px-3 h-10 items-center flex justify-center font-mono tracking-widest hover:scale-95 duration-200"
          >
            {@html highlightMatch(querry, product.bin.brand)}
          </div>
        {/if}

        <div
          class="ml-3 bg-green-700 rounded-lg px-3 h-10 items-center flex justify-center font-mono tracking-widest hover:scale-95 duration-200"
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
