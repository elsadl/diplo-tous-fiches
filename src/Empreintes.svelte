<script>
  import { BASE_PATH } from "./store"
  export let scale
</script>

<div id="empreintes" style="transform: scale({scale});">
  <img src={BASE_PATH + "empreintes.png"} alt="Fichiers biométriques" />
</div>

<style>
  #empreintes {
    max-width: 890px;
    pointer-events: none;
    grid-area: 1 / -1;
    transform-origin: top left;
  }

  #empreintes img {
    width: 100%;
  }
</style>
