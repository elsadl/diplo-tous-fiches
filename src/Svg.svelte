<script>
  import { display } from "./store.js"

  import Circles from "./Svg/Circles.svelte"
  import Links from "./Svg/Links.svelte"
  import Exemples from "./Svg/Exemples.svelte"
  import Hubs from "./Svg/Hubs.svelte"
  import Domains from "./Svg/Domains.svelte"

  export let scale

  // 0 0 988.68 777.5
</script>

<svg
  style="transform: scale({scale});"
  id="tous-fiches-svg"
  viewBox="0 0 890 760"
>
  <Circles />
  <Domains />
  {#if $display.exemples && !$display.niveau}
    <Exemples />
  {/if}
  {#if !$display.niveau}
    <Links />
  {/if}
  <Hubs />
</svg>

<style>
  #tous-fiches-svg {
    max-width: 890px;
    grid-area: 1 / -1;
    transform-origin: top left;
  }
</style>
