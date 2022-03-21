<script>
  import { BASE_PATH } from "./store"
  export let scale
</script>

<div id="fond" style="transform: scale({scale});">
  <img src={BASE_PATH + "ministeres-3.png"} alt="fond" />
</div>

<style>
  #fond {
    max-width: 885px;
    pointer-events: none;
    grid-area: 1 / -1;
    transform-origin: top left;
  }

  #fond img {
    width: 100%;
  }
</style>
