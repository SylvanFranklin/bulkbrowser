<script lang="ts">

  import Barcode from "./barcode.svelte";
  import { getNutrionFacts, type Bin } from "./data";
  export let product: Bin;
</script>

<section class="mb-3 w-full rounded-lg opacity-5" />
<section class="flex m-1 w-full" id="bottom-half">
  <aside
    class="overflow-scroll p-4 mr-4 w-full h-36 text-sm font-normal text-left rounded-lg shadow-lg bg-gray-400/5 scrollbar-hidden"
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
  <span class="ml-auto bg-white rounded-lg shadow-lg w-[12rem] h-min">
    <Barcode upc={product.upc} />
  </span>
</section>
