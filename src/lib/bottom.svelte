<script lang="ts">
  import Barcode from "./barcode.svelte";
  import { getNutrionFacts, type Bin } from "./data";
  export let product: Bin;
</script>

<section class="mb-3 w-full rounded-lg opacity-5" />
<section class="w-full flex" id="bottom-half">
  <aside
    class="w-full bg-gray-400/5 shadow-lg mr-4 rounded-lg text-sm font-normal p-4 overflow-scroll scrollbar-hidden text-left h-36"
  >
    {#await getNutrionFacts(product) then facts}
      {#if facts}
        INGREDIENTS: {facts.ingredients.toUpperCase()}
      {:else}
        missing ingredients
      {/if}
    {:catch}
      NO NUTRITION DATABASE ENTRY FOR THIS UPC
    {/await}
  </aside>
  <button
    class="rounded-lg bg-white ml-auto shadow-lg w-[12rem] h-min hover:scale-95 hover:brightness-105 duration-100"
    on:click|preventDefault={() => navigator.clipboard.writeText(product.upc)}
  >
    <Barcode upc={product.upc} />
  </button>
</section>
