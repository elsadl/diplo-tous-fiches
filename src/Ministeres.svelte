<script>
  import { BASE_PATH } from "./store"
  export let scale
</script>

<div id="ministeres" style="transform: scale({scale});">
  <img src={BASE_PATH + "ministeres.png"} alt="ministères" />
</div>

<style>
  #ministeres {
    max-width: 890px;
    pointer-events: none;
    grid-area: 1 / -1;
    transform-origin: top left;
  }

  #ministeres img {
    width: 100%;
  }
</style>
