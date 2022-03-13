<script>
  import { fade } from "svelte/transition"

  import { display } from "./store.js"

  import Close from "./Close.svelte"

  const closeInfos = () => {
    $display.infos = false
  }
</script>

{#if $display.infos}
  <div id="infos" transition:fade={{ duration: 100 }}>
    <div id="close" on:click={closeInfos}>
      <Close />
    </div>
    <p id="category">
      {$display.infos["Thématique"]}
    </p>
    <p id="title">
      <span id="acronyme">{$display.infos["Acronyme"]}</span>
      {$display.infos["Nom complet"]}

      {#if $display.infos["Création"] && $display.infos["Création"] != "-"}
        -
        {$display.infos["Création"]}
      {/if}
    </p>
    <p id="description">{$display.infos["Description"]}</p>
  </div>
{/if}

<style>
  #infos p {
    margin: 0;
  }

  #infos {
    border: 1px solid #eeaa41;
    border-top-right-radius: 12px;
    box-shadow: 4px 4px 0px #eeaa41;
    position: relative;
    background-color: #fff;
  }

  #infos #close {
    position: absolute;
    cursor: pointer;
    top: 4px;
    right: 4px;
  }

  #infos #category {
    padding: 12px 32px 4px 12px;
    color: #598993;
    font-size: 0.8em;
  }

  #infos #title {
    font-weight: 600;
    padding: 0 32px 8px 12px;
    border-bottom: 1px solid #eeaa41;
  }

  #infos #title #acronyme {
    color: #598993;
  }

  #infos #description {
    padding: 8px 24px 12px 12px;
  }
</style>
