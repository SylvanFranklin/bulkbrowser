<script lang="ts">
  import JsBarcode from "jsbarcode";
  import { onMount } from "svelte";
  export let upc: string;
  let failed = false;
  onMount(() => {
    try {
      JsBarcode("#upc-a", upc, { format: "upc" });
    } catch {
      failed = true;
      console.log("error");
    }
  });
</script>

<div class="flex w-full bg-white rounded-lg">
  {#if !failed}
    <svg id="upc-a" class="" />
  {:else}
    <div
      class="flex items-center p-3 w-80 text-sm font-normal text-center text-black h-38"

    >invalid UPC</div>
  {/if}
</div>
