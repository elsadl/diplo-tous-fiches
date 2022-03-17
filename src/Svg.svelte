<script>
  import { display } from "./store.js"

  import Circles from "./Svg/Circles.svelte"
  import Links from "./Svg/Links.svelte"
  import Exemples from "./Svg/Exemples.svelte"
  import Text from "./Svg/Text.svelte"
  import Hubs from "./Svg/Hubs.svelte"
  import Domains from "./Svg/Domains.svelte"
  import Cadenas from "./Svg/Cadenas.svelte"

  export let scale
</script>

<svg
  style="transform: scale({scale});"
  id="tous-fiches-svg"
  viewBox="0 0 890 792"
>
  <Circles />
  <Domains />
  {#if $display.exemples}
    <Exemples />
  {/if}
  <Links />
  <Hubs />
  <Text />
  <Cadenas />
</svg>

<style>
  #tous-fiches-svg {
    max-width: 890px;
    grid-area: 1 / -1;
    transform-origin: top left;
  }
</style>
