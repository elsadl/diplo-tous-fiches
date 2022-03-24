<script>
  import { onMount } from "svelte"

  import { display, BASE_PATH } from "./store.js"

  let toggle
  let legende
  let mounted = false

  onMount(() => {
    mounted = true
  })

  const toggleExemples = () => {
    $display.exemples = !$display.exemples
    toggle.classList.contains("active")
      ? toggle.classList.remove("active")
      : toggle.classList.add("active")
  }

  const displayBiometrique = (e) => {
    $display.niveau = false
    $display.secret = false

    $display.biometrique = !$display.biometrique
    highlightLegende(e)
  }

  const displaySecret = (e) => {
    $display.niveau = false
    $display.biometrique = false

    $display.secret = !$display.secret
    highlightLegende(e)
  }

  const displayFiletype = (e) => {
    $display.biometrique = false
    $display.secret = false

    const fichier = e
      .composedPath()
      .find((el) => el.classList.contains("fichier"))

    if ($display.niveau === fichier.getAttribute("data-fichier")) {
      $display.niveau = false
    } else {
      $display.niveau = fichier.getAttribute("data-fichier")
    }

    highlightLegende(e)
  }

  // $: $display, highlightLegende()

  const highlightLegende = (e) => {
    if (!mounted) return

    const button = e
      .composedPath()
      .find((el) => el.classList.contains("el-legende"))

    if ($display.niveau || $display.biometrique || $display.secret) {
      legende.querySelectorAll(".el-legende").forEach((el) => {
        el.classList.add("transparent")
      })

      button.classList.remove("transparent")
    } else {
      legende.querySelectorAll(".el-legende").forEach((el) => {
        el.classList.remove("transparent")
      })
    }
  }
</script>

<div id="legende-container" bind:this={legende}>
  <!-- <img
    id="titre"
    src={BASE_PATH + "legende/tousfiches.svg"}
    alt="Tous fichés !"
  /> -->
  <div id="legende">
    <div id="fichiers">
      <div
        on:click={displayFiletype}
        class="fichier el-legende"
        data-fichier="Répertoire national"
      >
        <img
          src={BASE_PATH + "legende/repertoire.svg"}
          alt="Répertoire national"
        />
        <p>Répertoire national</p>
      </div>
      <div
        on:click={displayFiletype}
        class="fichier el-legende"
        data-fichier="Européen"
      >
        <img src={BASE_PATH + "legende/europeen.svg"} alt="Fichier européen" />
        <p>Fichier européen</p>
      </div>
      <div
        on:click={displayFiletype}
        class="fichier el-legende"
        data-fichier="National"
      >
        <img src={BASE_PATH + "legende/national.svg"} alt="Fichier national" />
        <p>Fichier national</p>
      </div>
      <div
        on:click={displayFiletype}
        class="fichier el-legende"
        data-fichier="Régional"
      >
        <img
          src={BASE_PATH + "legende/regional.svg"}
          alt="Fichier régional ou académique"
        />
        <p>Fichier régional ou académique</p>
      </div>
      <div
        on:click={displayFiletype}
        class="fichier el-legende"
        data-fichier="Local"
      >
        <img src={BASE_PATH + "legende/local.svg"} alt="Fichier local" />
        <p>Fichier local</p>
        <p class="small">(établissement, commune ou département)</p>
      </div>
    </div>
    <div id="symboles">
      <div id="ministere">
        <img src={BASE_PATH + "legende/ministere.png"} alt="Ministère" />
        <p>Ministère <br />concerné</p>
      </div>
      <div on:click={displayBiometrique} class="el-legende biometrique">
        <img
          src={BASE_PATH + "legende/empreinte.png"}
          alt="Fichier biométrique"
        />
        <p>Fichier <br />biométrique</p>
      </div>
      <div on:click={displaySecret} class="el-legende secret">
        <img src={BASE_PATH + "legende/cadenas.svg"} alt="Fichier secret" />
        <p>Fichier non <br />publié (secret)</p>
      </div>
    </div>
    <div
      class="texte {$display.niveau || $display.biometrique || $display.secret
        ? 'inactive'
        : ''}"
      id="toggle"
      bind:this={toggle}
      on:click={toggleExemples}
    >
      <p>
        <span>→ </span>{$display.exemples ? "Masquer" : "Afficher"} les situations-clés
      </p>
    </div>
    <div class="texte" id="notice">
      <p>
        Cliquer sur un fichier pour en savoir plus, et sur un élément de légende
        pour filtrer les fichiers affichés
      </p>
    </div>
  </div>
  <div id="credits">
    <p>
      Merci à la <a href="https://www.zite.fr" target="_blank"
        >revue <img src={BASE_PATH + "zite.png"} alt="Zite" /></a
      >
      qui a publié une version antérieure de ce poster (n°11, octobre 2017) et nous
      a autorisé à reprendre son travail. <span>●</span>
      <!-- </p>
    <p> -->
      Ressource complémentaire : « La folle volonté de tout contrôler », Caisse de
      solidarité de Lyon, 2021. <span>●</span>
      <!-- </p>
    <p> -->
      Recherches et documentation : Jérome Thorel <span>●</span> Réalisation :
      Cécile Marin <span>●</span> Animation : Elsa Delmas
    </p>
  </div>
</div>

<style>
  #legende-container {
    text-align: left;
    font-size: 15px;
  }

  #legende-container #titre {
    padding-bottom: 8px;
  }

  #legende-container #legende {
    /* border-top: 4px solid #eeaa41; */
    padding-top: 12px;
    font-size: 1.15em;
  }

  #legende-container #fichiers {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  #legende-container #fichiers > div {
    text-align: center;
    cursor: pointer;
  }

  #legende-container #fichiers p {
    padding-bottom: 3px;
  }

  #legende-container #notice p {
    line-height: 1.2em;
  }

  #legende-container #fichiers img {
    width: 38px;
    margin: 0 auto;
  }

  #legende-container #symboles {
    padding-top: 8px;
    display: grid;
    grid-gap: 12px;
    align-items: center;
    grid-template-columns: 3fr 2fr 2fr;
  }

  #legende-container #symboles > div {
    display: flex;
    align-items: end;
  }

  #legende-container #symboles img {
    width: 20px;
    padding-right: 6px;
  }

  #legende-container #ministere img {
    width: 80px;
  }

  #legende-container .texte {
    padding-top: 8px;
    font-size: 1.15em;
    font-family: "Bunday Sans";
    margin: 0;
  }

  /* @media (max-width: 1060px) {
    #legende-container #texte {
      grid-template-columns: 1fr;
      grid-gap: 8px;
    }
  } */

  #legende-container .el-legende {
    cursor: pointer;
  }

  :global(#legende-container .el-legende.transparent) {
    opacity: 0.2;
  }

  #legende-container p {
    margin: 0;
    font-size: 0.75em;
    line-height: 1em;
  }

  #legende-container .small {
    font-size: 0.7em;
    line-height: 0.8em;
  }

  #legende-container #notice {
    opacity: 0.5;
  }

  #legende-container #toggle p {
    cursor: pointer;
    display: inline-block;
    padding-bottom: 1px;
    border-bottom: 1px dotted #000;
  }

  #legende-container #toggle.inactive {
    cursor: default;
    opacity: 0.2;
    pointer-events: none;
  }

  #legende-container #toggle span {
    color: #ba602d;
    font-size: 1.6em;
    position: relative;
    top: 2px;
    background-color: #fff;
  }

  #legende-container #credits {
    font-size: 1.1em;
    margin-top: 16px;
    border-top: 1px solid #eeaa41;
  }

  #legende-container #credits p {
    margin-top: 8px;
  }

  #legende-container #credits p:not(:first-child) {
    margin-top: 4px;
  }

  #legende-container #credits p span {
    color: #eeaa41;
  }

  #legende-container #credits p img {
    width: 0.8em;
    padding: 0 3px;
    transform: translateY(2px);
  }

  #legende-container #credits a {
    color: #000;
    text-decoration: none;
  }
</style>
