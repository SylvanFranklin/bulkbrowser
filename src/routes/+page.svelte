<script lang="ts">
  import Items from "$lib/items.svelte";
  import "../app.css";
  import { bins, fuse } from "$lib/bins";
  import type { Bin, SearchItem } from "$lib/data";

  const closeAllBins = (bins: Bin[]) => {
    return bins.map((bin) => {
      return {
        bin: bin,
        isOpen: false,
      };
    });
  };

  function calcSearchItems() {
    if (querry == "") {
      searchItems = closeAllBins(bins);
    } else {
      searchItems = closeAllBins(fuse.search(querry).map((item) => item.item));
    }
  }

  let searchItems: SearchItem[] = closeAllBins(bins);
  let querry: string;

  function formChange(e: Event) {
    if (e.target == null) {
      return;
    }

    const target: EventTarget = e.target;

    if (target instanceof HTMLInputElement) {
      querry = target.value;
      calcSearchItems();
    }
  }

  let dark_mode = false;
  // document.documentElement.classList.add("dark");

  function toggleDarkMode() {
    dark_mode = !dark_mode;

    dark_mode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }
</script>

<main
  class="flex w-screen h-screen bg-white dark:bg-gray-800 flex-col overflow-scroll"
>
  <nav
    class="flex items-center rounded-xl h-20 shadow-lg p-3 hover:dark:brightness-125 hover:brightness-75"
  >
    <button
      on:click={toggleDarkMode}
      class="p-3 bg-gray-200/10 rounded-lg shadow-md duration-200"
    >
      {#if dark_mode}
        <span class="dark:text-white text-3xl rotate-90">
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
        <span class="dark:text-white text-3xl">
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
  </nav>

  <header
    class="text-5xl text-gray-600 font-bold dark:text-white/20 font-mono mt-10 mx-auto select-none flex flex-col"
  >
    <div>
      THE
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 dark:from-yellow-400 dark:to-red-500 font-extrabold to-orange-400"
      >
        BULK
      </span>
      BROWSER
    </div>
    <div class="dark:text-white/40 font-bold text-2xl ml-auto mt-1">
      by Sylvan
    </div>
  </header>

  <div>
    <div
      class="rounded-md sm:w-3/4 lg:w-2/5 mx-auto flex items-center flex-col mt-32"
    >
      <form
        class="w-full h-full bg-none mt-4 flex flex-row bg-gray-200/70 shadow-sm dark:bg-slate-900/30 items-center justify-center p-4 rounded-xl dark:text-white text-black"
        on:input|preventDefault={formChange}
      >
        <!-- svelte-ignore a11y-autofocus -->
        <input
          type="text"
          autofocus
          placeholder="search..."
          class=" placeholder-black/20 dark:placeholder-white/10 bg-none w-full h-full bg-transparent font-mono text-3xl text-black border-white outline-none dark:text-white"
        />
        <!-- <span class="text-white/10 flex w-12"> -->
        <!--   <GoSearch /> -->
        <!-- </span> -->
      </form>

      <Items searchItems={searchItems.slice(0, 5)} {querry} />
    </div>
  </div>
</main>
