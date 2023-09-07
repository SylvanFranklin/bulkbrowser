<script lang="ts">
  import GoSearch from "svelte-icons/go/GoSearch.svelte";
  import Items from "$lib/items.svelte";
  import "../app.css";
  import Icon from "$lib/assets/citymarket.png";
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
</script>

<main class="flex w-screen h-screen bg-gray-800 flex-col overflow-scroll">
  <nav class="flex items-center mx-8 rounded-xl mt-3 opacity-80">
    <!-- <a href="https://citymarket.coop" class="flex items-center w-20 mr-auto z-0 absolute mt-5 hover:scale-125 duration-100"> -->
    <!--   <img src={Icon} alt="failed" /> -->
    <!-- </a> -->
    <header
      class="text-5xl text-white/20 font-mono mt-10 mx-auto select-none flex flex-col"
    >
      <div>
        THE
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
        >
          BULK
        </span>
        BROWSER
      </div>
      <div
        class="text-white/40 font-bold text-2xl ml-auto mt-1"
      >
        by Sylvan
      </div>
    </header>
  </nav>

  <div>
    <div
      class="rounded-md sm:w-3/4 lg:w-2/5 mx-auto flex items-center flex-col mt-32"
    >
      <form
        class="w-full h-full bg-none mt-4 flex flex-row bg-slate-900/30 items-center justify-center p-4 rounded-xl text-white hover:brightness-110"
        on:input|preventDefault={formChange}
      >
        <!-- svelte-ignore a11y-autofocus -->
        <input
          type="text"
          autofocus
          placeholder="search..."
          class="bg-none w-full h-full bg-transparent font-mono text-3xl border-white outline-none placeholder-white/10"
        />
        <!-- <span class="text-white/10 flex w-12"> -->
        <!--   <GoSearch /> -->
        <!-- </span> -->
      </form>

      <Items searchItems={searchItems.slice(0, 5)} {querry} />
    </div>
  </div>
</main>
