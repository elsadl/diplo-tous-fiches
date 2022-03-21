<script>
  import { onMount } from "svelte"
  import { display } from "./store.js"

  import Fond from "./Fond.svelte"
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
    <Fond {scale} />
    <Svg {scale} />
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
    width: 100vw;
    position: relative;
    font-family: "Bunday Sans";
  }

  #tous-fiches #container {
    display: grid;
    transform-origin: top left;
    position: relative;
    margin-top: -7vw;
  }

  #tous-fiches #header {
    /* height: 220px; */
    position: relative;
    z-index: 10;
  }

  @media (max-width: 1060px) {
    #tous-fiches #header {
      /* height: 240px; */
    }
  }

  #tous-fiches #header #left {
    width: 40%;
    max-width: 520px;
    position: relative;
    top: 20px;
    left: 4vw;
  }

  #tous-fiches #header #right {
    width: 40%;
    max-width: 520px;
    position: fixed;
    top: 20px;
    right: 20px;
  }

  @media (max-width: 840px) {
    #tous-fiches #header {
      height: auto;
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
