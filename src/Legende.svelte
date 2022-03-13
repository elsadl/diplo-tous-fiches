<script>
  import { display, BASE_PATH } from "./store.js"

  let toggle

  const toggleExemples = () => {
    $display.exemples = !$display.exemples
    toggle.classList.contains("active")
      ? toggle.classList.remove("active")
      : toggle.classList.add("active")
  }

  // const handleClick = (e) => {
  //   console.log(e)
  //   const fichier = e.path.find((el) => el.classList.contains("fichier"))
  //   $display.niveau = fichier.getAttribute("data-fichier")
  //   console.log($display.niveau)
  // }
</script>

<div id="legende-container">
  <img
    id="titre"
    src={BASE_PATH + "legende/tousfiches.svg"}
    alt="Tous fichés !"
  />
  <div id="legende">
    <div id="fichiers">
      <div class="fichier" data-fichier="Répertoire national">
        <img
          src={BASE_PATH + "legende/repertoire.svg"}
          alt="Répertoire national"
        />
        <p>Répertoire national</p>
      </div>
      <div class="fichier" data-fichier="Européen">
        <img src={BASE_PATH + "legende/europeen.svg"} alt="Fichier européen" />
        <p>Fichier européen</p>
      </div>
      <div class="fichier" data-fichier="National">
        <img src={BASE_PATH + "legende/national.svg"} alt="Fichier national" />
        <p>Fichier national</p>
      </div>
      <div class="fichier" data-fichier="Régional">
        <img
          src={BASE_PATH + "legende/regional.svg"}
          alt="Fichier régional ou académique"
        />
        <p>Fichier régional ou académique</p>
      </div>
      <div class="fichier" data-fichier="Local">
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
      <div>
        <img
          src={BASE_PATH + "legende/empreinte.png"}
          alt="Fichier biométrique"
        />
        <p>Fichier <br />biométrique</p>
      </div>
      <div>
        <img src={BASE_PATH + "legende/cadenas.svg"} alt="Fichier secret" />
        <p>Fichier non <br />publié (secret)</p>
      </div>
    </div>
    <div id="texte">
      <div id="toggle" bind:this={toggle} on:click={toggleExemples}>
        <p>
          <span>→ </span>{$display.exemples ? "Masquer" : "Afficher"} les situations-clés
        </p>
      </div>
      <div id="notice">
        <p>Cliquer sur un fichier pour en savoir plus</p>
      </div>
    </div>
  </div>
</div>

<style>
  #legende-container #titre {
    padding-bottom: 8px;
  }

  #legende-container #legende {
    border-top: 4px solid #eeaa41;
    padding-top: 12px;
  }

  #legende-container #fichiers {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  #legende-container #fichiers > div {
    text-align: center;
    /* cursor: pointer; */
  }

  #legende-container #fichiers p {
    padding-bottom: 3px;
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

  #legende-container #texte {
    width: 120%;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 2fr 3fr;
    padding-top: 8px;
    font-size: 1.15em;
    align-items: baseline;
  }

  @media (max-width: 1060px) {
    #legende-container #texte {
      grid-template-columns: 1fr;
      grid-gap: 8px;
    }
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
    opacity: 0.6;
  }

  #legende-container #toggle p {
    cursor: pointer;
    display: inline-block;
    padding-bottom: 2px;
    border-bottom: 1px solid #000;
  }

  #legende-container #toggle span {
    color: #ba602d;
    font-size: 1.6em;
    position: relative;
    top: 2px;
    background-color: #fff;
  }
</style>
