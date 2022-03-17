<script>
  import { onMount } from "svelte"

  import { display } from "./../store.js"
  import { data } from "./../data"

  let root
  // let mounted = false

  onMount(() => {
    console.log(data)

    // on donne le bon ID à chaque hub
    for (const group of root.querySelectorAll("g")) {
      if (group.querySelector("text")) {
        if (group.querySelector("text").textContent == "UE") {
          group.id = "JRO-FRONTEX"
        } else {
          group.id = group.querySelector("text").textContent
        }
        const infos = data.find((el) => el.Acronyme === group.id)
        group.classList.add("fichier")
        group.setAttribute("data-niveau", infos["Niveau"])
        group.style.cursor = "pointer"
      }
    }

    // mounted = true
  })

  const handleClick = (e) => {
    console.log("clic!")
    const hub = e.composedPath().find((el) => el.classList.contains("fichier"))
    console.log(hub)
    const infos = data.find((el) => el.Acronyme === hub.id)
    console.log(infos)
    $display.infos = infos
  }

  // $: $display, highlightFichiers()

  // const highlightFichiers = () => {
  //   if (!mounted) return
  //   for (const fichier of root.querySelectorAll(".fichier")) {
  //     console.log(fichier.getAttribute("data-niveau"))
  //     if (fichier.getAttribute("data-niveau") === $display.niveau) {
  //       fichier.classList.add("highlighted")
  //     } else {
  //       fichier.classList.remove("highlighted")
  //     }
  //   }
  // }
</script>

<g on:click={handleClick} id="fichiers" bind:this={root}>
  <defs>
    <style>
      .hubs-cls-1,
      .hubs-cls-19,
      .hubs-cls-2,
      .hubs-cls-9 {
        fill: #221f20;
      }

      .hubs-cls-2,
      .hubs-cls-4,
      .hubs-cls-5 {
        stroke: #fff;
      }

      .hubs-cls-12,
      .hubs-cls-13,
      .hubs-cls-14,
      .hubs-cls-15,
      .hubs-cls-16,
      .hubs-cls-2,
      .hubs-cls-4,
      .hubs-cls-5,
      .hubs-cls-7,
      .hubs-cls-8,
      .hubs-cls-9 {
        stroke-miterlimit: 10;
      }

      .hubs-cls-2,
      .hubs-cls-4,
      .hubs-cls-7,
      .hubs-cls-8 {
        stroke-width: 0.85px;
      }

      .hubs-cls-3 {
        font-size: 6.23px;
      }

      .hubs-cls-16,
      .hubs-cls-17,
      .hubs-cls-18,
      .hubs-cls-20,
      .hubs-cls-3,
      .hubs-cls-8 {
        fill: #fff;
      }

      .hubs-cls-17,
      .hubs-cls-19,
      .hubs-cls-20,
      .hubs-cls-21,
      .hubs-cls-3 {
        font-family: Bunday Sans;
      }

      .hubs-cls-17,
      .hubs-cls-18,
      .hubs-cls-19,
      .hubs-cls-20,
      .hubs-cls-21,
      .hubs-cls-3 {
        font-weight: 800;
      }

      .hubs-cls-10,
      .hubs-cls-13,
      .hubs-cls-15,
      .hubs-cls-4,
      .hubs-cls-7 {
        fill: none;
      }

      .hubs-cls-11,
      .hubs-cls-12,
      .hubs-cls-14,
      .hubs-cls-21,
      .hubs-cls-5,
      .hubs-cls-6 {
        fill: #eeaa41;
      }

      .hubs-cls-5 {
        stroke-width: 0.43px;
      }

      .hubs-cls-10,
      .hubs-cls-11,
      .hubs-cls-12,
      .hubs-cls-13,
      .hubs-cls-7,
      .hubs-cls-8,
      .hubs-cls-9 {
        stroke: #221f20;
      }

      .hubs-cls-10,
      .hubs-cls-11,
      .hubs-cls-12,
      .hubs-cls-9 {
        stroke-width: 0.57px;
      }

      .hubs-cls-14,
      .hubs-cls-15 {
        stroke: #eeaa41;
        stroke-width: 1.13px;
      }

      .hubs-cls-16 {
        stroke: #000;
        opacity: 0;
      }

      .hubs-cls-17,
      .hubs-cls-18,
      .hubs-cls-19 {
        font-size: 6.02px;
      }

      .hubs-cls-18 {
        font-family: Bunday Sans;
        font-style: italic;
      }

      .hubs-cls-20 {
        font-size: 4.69px;
      }

      .hubs-cls-21 {
        font-size: 6.77px;
      }
    </style>
    <symbol id="Local" data-name="Local" viewBox="0 0 41.6 26.02">
      <g id="Regional">
        <g>
          <line class="hubs-cls-5" x1="30.1" y1="8.01" x2="11.5" y2="8.01" />
          <line class="hubs-cls-5" x1="30.1" y1="8.01" x2="11.5" y2="8.01" />
          <path
            class="hubs-cls-5"
            d="M32.14,14.46A11.34,11.34,0,1,1,20.8,3.11,11.34,11.34,0,0,1,32.14,14.46"
          />
          <polyline
            class="hubs-cls-5"
            points="18.8 12.8 17.45 11.45 10.01 11.45"
          />
          <line class="hubs-cls-5" x1="18.71" y1="14.54" x2="9.46" y2="14.54" />
          <polyline
            class="hubs-cls-5"
            points="31.64 11.61 24.08 11.61 22.78 12.91"
          />
          <polyline
            class="hubs-cls-5"
            points="26.52 24.26 20.73 24.26 20.73 16.74 22.84 16.74 22.84 12.66 18.71 12.66 18.71 16.7 17.38 18.02 10 18.02"
          />
          <line class="hubs-cls-5" x1="20.82" y1="12.62" x2="20.82" y2="3.12" />
          <line class="hubs-cls-5" x1="30.06" y1="21" x2="11.51" y2="21" />
          <polyline
            class="hubs-cls-5"
            points="31.69 17.89 24.08 17.89 22.89 16.7"
          />
          <line
            class="hubs-cls-5"
            x1="32.14"
            y1="14.73"
            x2="22.84"
            y2="14.73"
          />
        </g>
        <path
          class="hubs-cls-5"
          d="M41.39,4.86a4.65,4.65,0,0,1-4.65,4.65H4.86a4.65,4.65,0,0,1,0-9.3H36.74a4.65,4.65,0,0,1,4.65,4.65"
        />
      </g>
    </symbol>
    <symbol id="Regional-13" data-name="Regional" viewBox="0 0 41.74 26.16">
      <g>
        <line class="hubs-cls-9" x1="30.17" y1="8.08" x2="11.57" y2="8.08" />
        <line class="hubs-cls-10" x1="30.17" y1="8.08" x2="11.57" y2="8.08" />
        <path
          class="hubs-cls-11"
          d="M32.21,14.53A11.34,11.34,0,1,1,20.87,3.19,11.34,11.34,0,0,1,32.21,14.53"
        />
        <polyline
          class="hubs-cls-10"
          points="18.88 12.87 17.52 11.52 10.08 11.52"
        />
        <line class="hubs-cls-10" x1="18.79" y1="14.61" x2="9.53" y2="14.61" />
        <polyline
          class="hubs-cls-10"
          points="31.71 11.68 24.15 11.68 22.85 12.98"
        />
        <polyline
          class="hubs-cls-10"
          points="26.59 24.33 20.8 24.33 20.8 16.81 22.91 16.81 22.91 12.73 18.79 12.73 18.79 16.77 17.45 18.1 10.07 18.1"
        />
        <line class="hubs-cls-10" x1="20.9" y1="12.69" x2="20.9" y2="3.19" />
        <line class="hubs-cls-10" x1="30.13" y1="21.08" x2="11.58" y2="21.08" />
        <polyline
          class="hubs-cls-10"
          points="31.76 17.96 24.15 17.96 22.96 16.77"
        />
        <line class="hubs-cls-10" x1="32.21" y1="14.8" x2="22.91" y2="14.8" />
      </g>
      <path
        class="hubs-cls-12"
        d="M41.46,4.93a4.65,4.65,0,0,1-4.65,4.65H4.93a4.65,4.65,0,0,1,0-9.3H36.81a4.65,4.65,0,0,1,4.65,4.65"
      />
    </symbol>
    <symbol id="National" data-name="National" viewBox="0 0 41.8 33.52">
      <g>
        <g>
          <rect
            class="hubs-cls-6"
            x="9.26"
            y="9.71"
            width="23.29"
            height="23.39"
            rx="1.87"
          />
          <path
            class="hubs-cls-1"
            d="M30.67,10.13a1.45,1.45,0,0,1,1.45,1.45V31.23a1.45,1.45,0,0,1-1.45,1.44H11.13a1.45,1.45,0,0,1-1.45-1.44V11.58a1.45,1.45,0,0,1,1.45-1.45H30.67m0-.85H11.13a2.3,2.3,0,0,0-2.3,2.3V31.23a2.3,2.3,0,0,0,2.3,2.29H30.67A2.3,2.3,0,0,0,33,31.23V11.58a2.3,2.3,0,0,0-2.3-2.3Z"
          />
        </g>
        <polyline
          class="hubs-cls-7"
          points="23.56 23.63 26.61 26.68 32.69 26.68"
        />
        <line class="hubs-cls-7" x1="24.33" y1="21.17" x2="32.69" y2="21.17" />
        <polyline
          class="hubs-cls-7"
          points="18.44 18.76 15.36 15.69 9.29 15.69"
        />
        <line class="hubs-cls-7" x1="17.57" y1="21.17" x2="9.29" y2="21.17" />
        <polyline
          class="hubs-cls-7"
          points="18.59 23.48 15.34 26.73 9.29 26.73"
        />
        <path
          class="hubs-cls-7"
          d="M21,9.61V18h-.08a3.35,3.35,0,1,0,2.51,1.12h0l3.42-3.42h5.85"
        />
        <line class="hubs-cls-7" x1="21" y1="24.81" x2="21" y2="33.15" />
      </g>
      <g id="Europeen">
        <path
          class="hubs-cls-8"
          d="M41.38,5.07a4.65,4.65,0,0,1-4.65,4.65H5.07a4.65,4.65,0,0,1,0-9.29H36.73a4.65,4.65,0,0,1,4.65,4.64"
        />
      </g>
    </symbol>
    <symbol id="Europeen-71" data-name="Europeen" viewBox="0 0 42.98 36.91">
      <path
        class="hubs-cls-1"
        d="M43,4.65A4.65,4.65,0,0,1,38.33,9.3H4.65a4.65,4.65,0,0,1,0-9.3H38.33A4.65,4.65,0,0,1,43,4.65"
      />
      <g>
        <rect
          class="hubs-cls-2"
          x="8.23"
          y="9.86"
          width="26.52"
          height="26.63"
          rx="2.52"
        />
        <text class="hubs-cls-3" transform="translate(18.13 33.93)">UE</text>
        <polyline
          class="hubs-cls-4"
          points="24.35 25.24 27.78 28.67 34.72 28.67"
        />
        <line class="hubs-cls-4" x1="25.22" y1="22.61" x2="34.72" y2="22.61" />
        <polyline class="hubs-cls-4" points="19 20.14 15.42 16.59 8.25 16.59" />
        <line class="hubs-cls-4" x1="17.84" y1="22.61" x2="8.25" y2="22.61" />
        <polyline
          class="hubs-cls-4"
          points="18.82 25.32 15.39 28.73 8.25 28.73"
        />
        <path
          class="hubs-cls-4"
          d="M21.61,10v9.11h-.08a3.71,3.71,0,1,0,2.75,1.24h0L28,16.59h6.69"
        />
      </g>
    </symbol>
    <symbol id="Repertoire" data-name="Repertoire" viewBox="0 0 42.81 44.09">
      <path
        class="hubs-cls-1"
        d="M42.81,4.65A4.65,4.65,0,0,1,38.16,9.3H4.89A4.81,4.81,0,0,1,0,5.07,4.65,4.65,0,0,1,4.65,0H38.16a4.65,4.65,0,0,1,4.65,4.65"
      />
      <g>
        <rect
          class="hubs-cls-1"
          x="6.46"
          y="12.34"
          width="29.89"
          height="29.89"
          rx="2.83"
        />
        <path
          class="hubs-cls-13"
          d="M8.79,11H34a3.68,3.68,0,0,1,3.68,3.68V39.9A3.69,3.69,0,0,1,34,43.59H8.79A3.69,3.69,0,0,1,5.1,39.9V14.66A3.68,3.68,0,0,1,8.79,11Z"
        />
        <rect
          class="hubs-cls-6"
          x="18.3"
          y="24.23"
          width="6.52"
          height="6.52"
          rx="1.12"
        />
        <circle class="hubs-cls-14" cx="13.7" cy="19.65" r="2.46" />
        <circle class="hubs-cls-15" cx="13.7" cy="27.68" r="2.46" />
        <line class="hubs-cls-15" x1="11.24" y1="27.68" x2="6.46" y2="27.68" />
        <polyline
          class="hubs-cls-15"
          points="6.46 16.69 8.53 16.69 11.55 18.49"
        />
        <path
          class="hubs-cls-15"
          d="M20.11,35a2.46,2.46,0,1,0-2.46,2.45A2.46,2.46,0,0,0,20.11,35Z"
        />
        <polyline
          class="hubs-cls-15"
          points="6.46 37.95 12.48 37.95 15.46 36.18"
        />
        <path
          class="hubs-cls-14"
          d="M23.49,35A2.46,2.46,0,1,1,26,37.45,2.46,2.46,0,0,1,23.49,35Z"
        />
        <path
          class="hubs-cls-15"
          d="M27.32,23a2.46,2.46,0,1,1,2.46,2.46A2.46,2.46,0,0,1,27.32,23Z"
        />
        <line class="hubs-cls-15" x1="24.85" y1="27.78" x2="36.36" y2="27.78" />
        <polyline
          class="hubs-cls-15"
          points="36.31 37.95 31.11 37.95 28.1 36.16"
        />
        <circle class="hubs-cls-15" cx="21.7" cy="19.65" r="2.46" />
        <polyline
          class="hubs-cls-15"
          points="36.36 16.69 26.87 16.69 23.9 18.46"
        />
        <line class="hubs-cls-15" x1="32.23" y1="22.74" x2="36.34" y2="22.74" />
      </g>
    </symbol>
  </defs>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(62.34 503.29) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(66.84 509.04)">Prénatal</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(117.37 239.37) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(122.9 245.13)">Pronote</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(79.1 239.49) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-18" transform="translate(83.64 245.24)">Cantines</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(37.39 423.45) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-18" transform="translate(43.29 429.21)">Crèches</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(37.42 476.87) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(47.52 482.63)">CRIP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(84.11 476.87) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(95.29 482.63)">ASE</text>
  </g>
  <g on:click={handleClick}>
    <g>
      <g>
        <line
          class="hubs-cls-5"
          x1="140.58"
          y1="614.88"
          x2="126.59"
          y2="614.88"
        />
        <line
          class="hubs-cls-5"
          x1="140.58"
          y1="614.88"
          x2="126.59"
          y2="614.88"
        />
        <path
          class="hubs-cls-5"
          d="M142.12,618.73a8.53,8.53,0,1,1-8.53-8.53,8.53,8.53,0,0,1,8.53,8.53"
          transform="translate(0 1)"
        />
        <polyline
          class="hubs-cls-5"
          points="132.09 618.49 131.07 617.47 125.47 617.47"
        />
        <line
          class="hubs-cls-5"
          x1="132.02"
          y1="619.8"
          x2="125.06"
          y2="619.8"
        />
        <polyline
          class="hubs-cls-5"
          points="141.74 617.59 136.06 617.59 135.07 618.57"
        />
        <polyline
          class="hubs-cls-5"
          points="137.89 627.1 133.54 627.1 133.54 621.45 135.12 621.45 135.12 618.38 132.02 618.38 132.02 621.42 131.02 622.42 125.46 622.42"
        />
        <line
          class="hubs-cls-5"
          x1="133.61"
          y1="618.35"
          x2="133.61"
          y2="611.2"
        />
        <line
          class="hubs-cls-5"
          x1="140.55"
          y1="624.66"
          x2="126.6"
          y2="624.66"
        />
        <polyline
          class="hubs-cls-5"
          points="141.77 622.31 136.05 622.31 135.16 621.42"
        />
        <line
          class="hubs-cls-5"
          x1="142.12"
          y1="619.93"
          x2="135.12"
          y2="619.93"
        />
      </g>
      <path
        class="hubs-cls-5"
        d="M154.44,611.52a3.5,3.5,0,0,1-3.5,3.49H116.65a3.5,3.5,0,1,1,0-7h34.29a3.5,3.5,0,0,1,3.5,3.5"
        transform="translate(0 1)"
      />
    </g>
    <text class="hubs-cls-17" transform="translate(114.67 614.62) scale(0.9 1)"
      >115 - SAMU social</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(291.98 483.09) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(300.08 488.85)">i-Milo</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(731.52 696.49) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(742.95 702.24)">CEF</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(502.03 569.97) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(512.7 575.73)">DUP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(149.17 576.35) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(158.57 582.11)">SDAS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(170.59 586.82) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(180.3 592.58)">CCAS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(79.97 423.45) scale(0.75)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(90.97 429.21)">PMI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(101.49 294.83) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(106.91 300.98)">MOSART</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(80.41 173.26) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(83.61 179.21)">AFFELNET</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(49.48 134.57) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(58.33 140.77)">ONDE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(25.94 173.26) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(29.65 179.46)">LSUN-LSL</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(114.58 134.57) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(122.09 140.66)">SIECLE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(327.69 318.73) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(337.12 324.65)">PMSI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(327.92 394.78) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(329.86 400.7) scale(0.9 1)"
      >SIVIC/SINUS</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(54.46 278.51) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(59.28 284.34)">SAGESSE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(362.85 524.76) scale(0.75)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(365.2 530.73) scale(0.94 1)"
      >CAP SITERE</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(136.86 269.62) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(141.8 275.71)">CPA/CPF</text>
  </g>
  <g on:click={handleClick}>
    <g>
      <g>
        <g>
          <rect
            class="hubs-cls-6"
            x="146.01"
            y="175.12"
            width="17.3"
            height="17.38"
            rx="1.3"
          />
          <path
            class="hubs-cls-1"
            d="M162,174.55a.87.87,0,0,1,.87.88V190.2a.88.88,0,0,1-.87.88h-14.7a.89.89,0,0,1-.88-.88V175.43a.88.88,0,0,1,.88-.88H162m0-.85h-14.7a1.73,1.73,0,0,0-1.73,1.73V190.2a1.74,1.74,0,0,0,1.73,1.73H162a1.73,1.73,0,0,0,1.72-1.73V175.43A1.72,1.72,0,0,0,162,173.7Z"
            transform="translate(0 1)"
          />
        </g>
        <polyline
          class="hubs-cls-7"
          points="156.66 185.49 158.95 187.78 163.52 187.78"
        />
        <line
          class="hubs-cls-7"
          x1="157.24"
          y1="183.64"
          x2="163.52"
          y2="183.64"
        />
        <polyline
          class="hubs-cls-7"
          points="152.8 181.83 150.49 179.51 145.93 179.51"
        />
        <line
          class="hubs-cls-7"
          x1="152.15"
          y1="183.64"
          x2="145.93"
          y2="183.64"
        />
        <polyline
          class="hubs-cls-7"
          points="152.92 185.37 150.47 187.82 145.93 187.82"
        />
        <path
          class="hubs-cls-7"
          d="M154.73,174v6.3h-.06a2.52,2.52,0,1,0,1.89.84h0l2.58-2.58h4.39"
          transform="translate(0 1)"
        />
        <line
          class="hubs-cls-7"
          x1="154.73"
          y1="186.38"
          x2="154.73"
          y2="192.65"
        />
      </g>
      <g on:click={handleClick} id="Europeen-2" data-name="Europeen">
        <path
          class="hubs-cls-8"
          d="M172.08,170.53a3.5,3.5,0,0,1-3.5,3.5H139.64a3.5,3.5,0,1,1,0-7h28.94a3.5,3.5,0,0,1,3.5,3.49"
          transform="translate(0 1)"
        />
      </g>
    </g>
    <text class="hubs-cls-19" transform="translate(137.98 173.76)"
      >PARCOURSUP</text
    >
  </g>
  <g on:click={handleClick}>
    <g>
      <g>
        <g>
          <rect
            class="hubs-cls-6"
            x="189.2"
            y="175.12"
            width="17.3"
            height="17.38"
            rx="1.3"
          />
          <path
            class="hubs-cls-1"
            d="M205.2,174.55a.88.88,0,0,1,.88.88V190.2a.89.89,0,0,1-.88.88H190.5a.89.89,0,0,1-.88-.88V175.43a.88.88,0,0,1,.88-.88h14.7m0-.85H190.5a1.73,1.73,0,0,0-1.73,1.73V190.2a1.74,1.74,0,0,0,1.73,1.73h14.7a1.74,1.74,0,0,0,1.73-1.73V175.43a1.73,1.73,0,0,0-1.73-1.73Z"
            transform="translate(0 1)"
          />
        </g>
        <polyline
          class="hubs-cls-7"
          points="199.85 185.49 202.14 187.78 206.71 187.78"
        />
        <line
          class="hubs-cls-7"
          x1="200.43"
          y1="183.64"
          x2="206.71"
          y2="183.64"
        />
        <polyline
          class="hubs-cls-7"
          points="196 181.83 193.68 179.51 189.12 179.51"
        />
        <line
          class="hubs-cls-7"
          x1="195.34"
          y1="183.64"
          x2="189.12"
          y2="183.64"
        />
        <polyline
          class="hubs-cls-7"
          points="196.11 185.37 193.67 187.82 189.12 187.82"
        />
        <path
          class="hubs-cls-7"
          d="M197.92,174v6.3h0a2.52,2.52,0,1,0,1.88.84h0l2.57-2.58h4.39"
          transform="translate(0 1)"
        />
        <line
          class="hubs-cls-7"
          x1="197.92"
          y1="186.38"
          x2="197.92"
          y2="192.65"
        />
      </g>
      <g on:click={handleClick} id="Europeen-3" data-name="Europeen">
        <path
          class="hubs-cls-8"
          d="M215.27,170.53a3.5,3.5,0,0,1-3.5,3.5H182.83a3.5,3.5,0,0,1,0-7h28.94a3.5,3.5,0,0,1,3.5,3.49"
          transform="translate(0 1)"
        />
      </g>
    </g>
    <text class="hubs-cls-19" transform="translate(188.12 173.76)">APOGEE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(165.62 245.48) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(176.46 251.6)">SDO</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(221.68 412.39) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(229.11 418.4)">HOPSY</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(188.96 386.37) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(197.02 392.45)">RIM-P</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(296.37 526.18) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(305.42 532.21)">DUDE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(299.09 435.46) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(306.17 441.48)">DMIMT</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(222.27 573.09) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(233.23 579.14)">RSA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(531.77 415.7) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(541.16 421.79)">FAED</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(468.05 415.7) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(475.63 421.76)">FNAEG</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(785.75 597.71) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(795.82 603.83)">APPI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(718.27 642.18) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(727.02 648.29)">PSEM</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(741.59 608.89) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(752.74 614.96)">PSE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(544.73 605.39) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(551.21 611.49)">FIJAISV</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(609.58 605.39) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(617.75 611.49)">FIJAIT</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(343.98 667.11) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(354.34 673.16)">FICP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(352.21 715.59) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(363.66 721.64)">FCC</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(364.67 610.4) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(370.96 616.48)">ADONIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(389.92 715.58) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(396.72 721.59)">FICOBA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(153.02 513.6) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(158.62 519.62)">CRISTAL</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(176.55 674.2) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(186.43 680.25)">DN@</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(60.85 608.59) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(65.92 614.69)">SNE-DLS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(21.05 647.44) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(30.32 653.46)">DALO</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(44.54 714.37) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(51.15 720.41)">ADOMA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(89.95 647.44) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(100 653.53)">SIAO</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(436.26 695.7) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(441.91 701.69)">EVAFISC</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(417.24 610.28) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(424.69 616.35)">SIRIUS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(805.46 673.11) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(810.76 679.11)">GENESIS</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(773.27 696.49) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(784.22 702.48)">DPS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(798.9 496.05) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(804.69 502.07)">API-PNR</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(604.52 533.55) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(614.02 539.56)">CJNA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(584.79 653.83) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(595.11 659.85)">AEM</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(828.76 143.42) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(835.39 149.5)">BIOPEX</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(757.09 143.37) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(762.95 149.45)">DOREMI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(755.07 291.85) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(756.83 297.93) scale(0.95 1)"
      >BCR-DNRED</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(807.97 222.89) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(809.27 228.97) scale(0.95 1)"
      >SIREX-DRSD</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(707.9 322.58) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(718.9 328.66)">CAR</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(790.92 291.85) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(793.98 297.93)"
      >STARTRAC</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(790.02 103.51) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(799.47 109.55)">DGSE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(812.69 390.69) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(822.01 396.76)">FNPC</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(747.97 390.4) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(755.93 396.47)">FOVES</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(807.65 444.47) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(812.21 450.55)"
      >STC-LAPI</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(768.12 444.08) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(780 450.15)">SIV</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(746.89 488.59) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(757.99 494.51)">SCA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(577.82 415.7) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(589.22 421.71)">TAJ</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(425.12 386.78) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(434.24 392.8)">ADOC</text>
  </g>
  <g on:click={handleClick}>
    <g>
      <g>
        <g>
          <rect
            class="hubs-cls-6"
            x="444.72"
            y="351.91"
            width="17.3"
            height="17.38"
            rx="1.3"
          />
          <path
            class="hubs-cls-1"
            d="M460.72,351.34a.88.88,0,0,1,.88.88V367a.89.89,0,0,1-.88.88H446a.89.89,0,0,1-.88-.88V352.22a.88.88,0,0,1,.88-.88h14.7m0-.85H446a1.73,1.73,0,0,0-1.73,1.73V367a1.74,1.74,0,0,0,1.73,1.73h14.7a1.74,1.74,0,0,0,1.73-1.73V352.22a1.73,1.73,0,0,0-1.73-1.73Z"
            transform="translate(0 1)"
          />
        </g>
        <polyline
          class="hubs-cls-7"
          points="455.37 362.28 457.67 364.57 462.23 364.57"
        />
        <line
          class="hubs-cls-7"
          x1="455.95"
          y1="360.43"
          x2="462.23"
          y2="360.43"
        />
        <polyline
          class="hubs-cls-7"
          points="451.52 358.62 449.2 356.3 444.64 356.3"
        />
        <line
          class="hubs-cls-7"
          x1="450.86"
          y1="360.43"
          x2="444.64"
          y2="360.43"
        />
        <polyline
          class="hubs-cls-7"
          points="451.63 362.16 449.19 364.61 444.64 364.61"
        />
        <path
          class="hubs-cls-7"
          d="M453.44,350.74V357h-.05a2.52,2.52,0,1,0,1.88.84h0l2.57-2.58h4.39"
          transform="translate(0 1)"
        />
        <line
          class="hubs-cls-7"
          x1="453.44"
          y1="363.17"
          x2="453.44"
          y2="369.44"
        />
      </g>
      <g on:click={handleClick} id="Europeen-48" data-name="Europeen">
        <path
          class="hubs-cls-8"
          d="M478.88,347.32a3.49,3.49,0,0,1-3.5,3.5H431.52a3.5,3.5,0,1,1,0-7h43.86a3.49,3.49,0,0,1,3.5,3.49"
          transform="translate(0 1)"
        />
      </g>
    </g>
    <text class="hubs-cls-19" transform="translate(429.8 350.52) scale(0.98 1)"
      >ANACRIM/MERCURE</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(524.53 335.69) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(529.87 341.74)">FNG-CNI</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(375.86 240.39) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(381.58 246.48)">VISABIO</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(556.79 165.58) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(566.02 171.59)">PASP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(690.89 246.51) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(700.28 252.52)">EASP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(663.86 141.21) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(668.05 147.26)"
      >CRISTINA</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(577.74 308.24) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(588.71 314.3)">FPR</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(484.87 462.91) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(489.26 468.9)">OCTOPUS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(530.16 462.91) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(540.27 468.9)">FNIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(435.53 444.84) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(443.06 450.83)">OSIRIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(651.92 246.51) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(657.98 252.56)">ACCRED</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(659.85 325.98) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(666.12 332.02)">ASTREE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(598.62 115.62) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(600.53 121.67)"
      >GESTEREXT</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(663.86 103.42) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(668.44 109.47)">CGEEDRT</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(527.26 127.02) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(535.24 133.09)">FSPRT</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(590.75 165.58) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(597.49 171.66)">GIPAPS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(333.77 139.66) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(344.12 145.78)">ELOI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(367.83 103.37) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(373.83 109.48)">ADGREF</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(334.01 209.68) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(339.87 215.7)">PRÉNAT</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(279.43 281.44) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(291.91 287.52)">DP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(240.57 281.44) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(251.05 287.52)">MES</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(490.43 335.69) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(501.86 341.74)">TES</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(604.52 497.48) scale(0.75)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(606.47 503.57)"
      >CASSIOPEE</text
    >
  </g>
  <g on:click={handleClick}>
    <g>
      <path
        class="hubs-cls-1"
        d="M437.61,142.73a3.5,3.5,0,0,1-3.5,3.49H407a3.5,3.5,0,1,1,0-7h27.16a3.5,3.5,0,0,1,3.5,3.5"
        transform="translate(0 1)"
      />
      <g>
        <rect
          class="hubs-cls-2"
          x="410.86"
          y="147.65"
          width="19.94"
          height="20.02"
          rx="1.9"
        />
        <text class="hubs-cls-20" transform="translate(418.3 165.74)">UE</text>
        <polyline
          class="hubs-cls-4"
          points="422.98 159.21 425.56 161.79 430.78 161.79"
        />
        <line
          class="hubs-cls-4"
          x1="423.63"
          y1="157.24"
          x2="430.78"
          y2="157.24"
        />
        <polyline
          class="hubs-cls-4"
          points="418.95 155.38 416.26 152.71 410.87 152.71"
        />
        <line
          class="hubs-cls-4"
          x1="418.08"
          y1="157.24"
          x2="410.87"
          y2="157.24"
        />
        <polyline
          class="hubs-cls-4"
          points="418.82 159.27 416.25 161.83 410.87 161.83"
        />
        <path
          class="hubs-cls-4"
          d="M420.92,146.77v6.84h-.06a2.78,2.78,0,1,0,2.77,2.77,2.75,2.75,0,0,0-.7-1.84h0l2.83-2.82h5"
          transform="translate(0 1)"
        />
      </g>
    </g>
    <text class="hubs-cls-17" transform="translate(405.18 145.95) scale(0.9 1)"
      >JRO-FRONTEX</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="42.98"
      height="36.91"
      transform="translate(412.18 196.03) scale(0.75)"
      xlink:href="#Europeen-71"
    />
    <text class="hubs-cls-17" transform="translate(416.61 201.83)">EURODAC</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="42.98"
      height="36.91"
      transform="translate(451.31 306.05) scale(0.75)"
      xlink:href="#Europeen-71"
    />
    <text class="hubs-cls-17" transform="translate(455.84 311.87)">EUROPOL</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="42.98"
      height="36.91"
      transform="translate(508.2 294.13) scale(0.75)"
      xlink:href="#Europeen-71"
    />
    <text class="hubs-cls-17" transform="translate(514.79 299.92)">N-SIS-2</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="42.98"
      height="36.91"
      transform="translate(561.9 533.31) scale(0.75)"
      xlink:href="#Europeen-71"
    />
    <text class="hubs-cls-17" transform="translate(570.98 539.1)">ECRIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="42.81"
      height="44.09"
      transform="translate(109.74 347.97) scale(0.75)"
      xlink:href="#Repertoire"
    />
    <text class="hubs-cls-21" transform="translate(116.42 354)">RNIPP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="42.81"
      height="44.09"
      transform="translate(81.58 119.28) scale(0.75)"
      xlink:href="#Repertoire"
    />
    <text class="hubs-cls-21" transform="translate(90.39 125.43)">RNIE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="42.81"
      height="44.09"
      transform="translate(262.13 324.99) scale(0.75)"
      xlink:href="#Repertoire"
    />
    <text class="hubs-cls-21" transform="translate(267.94 331.08)">RNIAM</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="42.81"
      height="44.09"
      transform="translate(186.13 506.68) scale(0.75)"
      xlink:href="#Repertoire"
    />
    <text class="hubs-cls-21" transform="translate(192.12 512.58)">RNCPS</text>
  </g>
</g>
