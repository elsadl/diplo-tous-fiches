<script>
  import { onMount } from "svelte"
  import { display } from "./store.js"

  import Ministeres from "./Ministeres.svelte"
  import Svg from "./Svg.svelte"
  import Infos from "./Infos.svelte"
  import Legende from "./Legende.svelte"

  let containerWidth

  onMount(() => {
    console.log(containerWidth)
  })

  const unselectDisplay = (e) => {
    if (e.composedPath()[0].id === "header") {
      $display.niveau = false
      $display.secret = false
      $display.biometrique = false

      document.querySelectorAll("#left .el-legende").forEach((el) => {
        el.classList.remove("transparent")
      })
    }
  }

  $: scale = containerWidth > 890 ? containerWidth / 890 : 1
</script>

<main id="tous-fiches" bind:clientWidth={containerWidth}>
  <div id="header" on:click={unselectDisplay}>
    <div id="left">
      <Legende />
    </div>
    <div id="right">
      <Infos />
    </div>
  </div>
  <div id="container">
    <Svg {scale} />
    <Ministeres {scale} />
  </div>
</main>

<style>
  :global(body) {
    /* :global(#svelte-container body) { */
    margin: 0;
  }

  #tous-fiches {
    background: #fff;
    position: absolute;
    width: 100%;
    z-index: 1;
    position: relative;
    font-family: "Bunday Sans";
    text-align: left;
    font-size: 16px;
    line-height: 1.2em;
  }

  #tous-fiches #container {
    display: grid;
    transform-origin: top left;
    position: relative;
    margin-top: -6%;
  }

  #tous-fiches #header {
    /* height: 220px; */
    position: relative;
    z-index: 10;
    width: calc(100% - 60px);
    grid-gap: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #tous-fiches #header #left {
    max-width: 420px;
    position: relative;
    top: 20px;
    left: 4%;
  }

  #tous-fiches #header #right {
    max-width: 420px;
  }

  :global(.zoombox.zoome #tous-fiches #header #right) {
    position: fixed;
    top: 20px;
    right: 70px;
  }

  @media (max-width: 900px) {
    #tous-fiches #header {
      height: auto;
      grid-template-columns: 1fr;
      grid-gap: 0px;
    }

    #tous-fiches #header #left,
    #tous-fiches #header #right {
      position: relative;
      width: 90%;
      top: unset;
      left: unset;
      right: unset;
    }

    #tous-fiches #header #left {
      margin: 0 auto;
      top: 20px;
      margin-bottom: 20px;
    }

    #tous-fiches #header #right {
      box-sizing: border-box;
      margin: 20px auto;
      top: 20px;
    }
  }
</style>
