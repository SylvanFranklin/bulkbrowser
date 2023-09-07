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

<div class="flex rounded-lg w-full bg-white">
  {#if !failed}
    <svg id="upc-a" class="" />
  {:else}
    <div
      class="h-38 text-black text-sm flex font-normal text-center items-center p-3 w-80"

    >invalid UPC</div>
  {/if}
</div>
