<script>
  import { onMount } from "svelte"

  import Fond from "./Fond.svelte"
  import Svg from "./Svg.svelte"
  import Infos from "./Infos.svelte"
  import Legende from "./Legende.svelte"
  import Empreintes from "./Empreintes.svelte"

  let containerWidth

  onMount(() => {
    console.log(containerWidth)
  })

  $: scale = containerWidth > 890 ? containerWidth / 890 : 1
</script>

<main id="tous-fiches" bind:clientWidth={containerWidth}>
  <div id="header">
    <div id="left">
      <Legende />
    </div>
    <div id="right">
      <Infos />
    </div>
  </div>
  <div style="transform: scale({1})" id="container">
    <Fond {scale} />
    <Svg {scale} />
    <Empreintes {scale} />
  </div>
</main>

<style>
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
  }

  #tous-fiches #header {
    height: 220px;
    position: relative;
    z-index: 10;
  }

  @media (max-width: 1060px) {
    #tous-fiches #header {
      height: 240px;
    }
  }

  #tous-fiches #header #left {
    width: 40%;
    max-width: 440px;
    position: absolute;
    top: 20px;
    left: 4vw;
  }

  #tous-fiches #header #right {
    width: 40%;
    max-width: 460px;
    position: fixed;
    top: 20px;
    right: 20px;
  }

  @media (max-width: 675px) {
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
      max-width: unset;
      box-sizing: border-box;
      margin: 20px auto;
      top: 20px;
    }
  }
</style>
