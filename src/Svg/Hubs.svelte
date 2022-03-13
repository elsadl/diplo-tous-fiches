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

<g id="fichiers" bind:this={root}>
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
        font-family: "Bunday Sans";
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
        font-size: 5.84px;
      }

      .hubs-cls-18 {
        font-family: "Bunday Sans";
        font-style: italic;
      }

      .hubs-cls-20 {
        font-size: 4.55px;
      }

      .hubs-cls-21 {
        font-size: 6.57px;
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
      transform="translate(76.26 495.58) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(80.63 501.17)">Prénatal</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(129.66 239.47) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(135.03 245.06)">Pronote</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(92.53 239.58) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-18" transform="translate(96.93 245.17)">Cantines</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(52.05 418.1) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-18" transform="translate(57.78 423.69)">Crèches</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(52.08 469.94) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(61.87 475.53)">CRIP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(97.38 469.94) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(108.24 475.53)">ASE</text>
  </g>
  <g on:click={handleClick}>
    <g>
      <g>
        <line
          class="hubs-cls-5"
          x1="152.19"
          y1="603.87"
          x2="138.61"
          y2="603.87"
        />
        <line
          class="hubs-cls-5"
          x1="152.19"
          y1="603.87"
          x2="138.61"
          y2="603.87"
        />
        <path
          class="hubs-cls-5"
          d="M153.68,607.58a8.28,8.28,0,1,1-8.28-8.28,8.28,8.28,0,0,1,8.28,8.28"
          transform="translate(0 1)"
        />
        <polyline
          class="hubs-cls-5"
          points="143.94 607.37 142.96 606.38 137.52 606.38"
        />
        <line
          class="hubs-cls-5"
          x1="143.88"
          y1="608.64"
          x2="137.12"
          y2="608.64"
        />
        <polyline
          class="hubs-cls-5"
          points="153.31 606.5 147.8 606.5 146.84 607.45"
        />
        <polyline
          class="hubs-cls-5"
          points="149.57 615.73 145.35 615.73 145.35 610.25 146.89 610.25 146.89 607.27 143.88 607.27 143.88 610.21 142.91 611.18 137.52 611.18"
        />
        <line
          class="hubs-cls-5"
          x1="145.42"
          y1="607.24"
          x2="145.42"
          y2="600.3"
        />
        <line
          class="hubs-cls-5"
          x1="152.16"
          y1="613.36"
          x2="138.62"
          y2="613.36"
        />
        <polyline
          class="hubs-cls-5"
          points="153.34 611.08 147.79 611.08 146.92 610.21"
        />
        <line
          class="hubs-cls-5"
          x1="153.68"
          y1="608.77"
          x2="146.89"
          y2="608.77"
        />
      </g>
      <path
        class="hubs-cls-5"
        d="M165.63,600.58a3.39,3.39,0,0,1-3.39,3.39H129a3.4,3.4,0,0,1,0-6.79h33.28a3.4,3.4,0,0,1,3.39,3.4"
        transform="translate(0 1)"
      />
    </g>
    <text class="hubs-cls-17" transform="translate(127.04 603.62) scale(0.9 1)"
      >115 - SAMU social</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(299.1 475.98) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(306.97 481.57)">i-Milo</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(725.64 683.06) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(736.74 688.65)">CEF</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(502.94 560.29) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(513.3 565.88)">DUP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(160.52 566.48) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(169.65 572.07)">SDAS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(181.31 576.64) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(190.74 582.23)">CCAS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.6"
      height="26.02"
      transform="translate(93.37 418.1) scale(0.73)"
      xlink:href="#Local"
    />
    <text class="hubs-cls-17" transform="translate(104.05 423.69)">PMI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(114.25 293.29) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(119.52 299.26)">MOSART</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(93.8 175.31) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(96.9 181.08)">AFFELNET</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(63.78 137.77) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(72.37 143.79)">ONDE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(40.94 175.31) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(44.54 181.32)">LSUN-LSL</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(126.96 137.77) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(134.24 143.68)">SIECLE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(333.76 316.48) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(342.91 322.23)">PMSI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(333.99 390.28) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(335.87 396.02) scale(0.9 1)"
      >SIVIC/SINUS</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(68.61 277.45) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(73.29 283.1)">SAGESSE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.74"
      height="26.16"
      transform="translate(367.88 516.42) scale(0.73)"
      xlink:href="#Regional-13"
    />
    <text class="hubs-cls-19" transform="translate(370.16 522.21) scale(0.94 1)"
      >CAP SITERE</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(148.58 268.82) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(153.37 274.73)">CPA/CPF</text
    >
  </g>
  <g on:click={handleClick}>
    <g>
      <g>
        <g>
          <rect
            class="hubs-cls-6"
            x="157.47"
            y="177.13"
            width="16.76"
            height="16.84"
            rx="1.25"
          />
          <path
            class="hubs-cls-1"
            d="M173,176.56a.82.82,0,0,1,.82.82v14.34a.83.83,0,0,1-.82.83H158.72a.83.83,0,0,1-.83-.83V177.38a.83.83,0,0,1,.83-.82H173m0-.85H158.72a1.68,1.68,0,0,0-1.68,1.67v14.34a1.68,1.68,0,0,0,1.68,1.68H173a1.68,1.68,0,0,0,1.67-1.68V177.38a1.67,1.67,0,0,0-1.67-1.67Z"
            transform="translate(0 1)"
          />
        </g>
        <polyline
          class="hubs-cls-7"
          points="167.79 187.18 170.01 189.4 174.45 189.4"
        />
        <line
          class="hubs-cls-7"
          x1="168.35"
          y1="185.38"
          x2="174.45"
          y2="185.38"
        />
        <polyline
          class="hubs-cls-7"
          points="164.05 183.63 161.81 181.38 157.38 181.38"
        />
        <line
          class="hubs-cls-7"
          x1="163.41"
          y1="185.38"
          x2="157.38"
          y2="185.38"
        />
        <polyline
          class="hubs-cls-7"
          points="164.16 187.07 161.79 189.44 157.38 189.44"
        />
        <path
          class="hubs-cls-7"
          d="M165.92,176v6.12h-.06a2.45,2.45,0,1,0,1.83.82h0l2.49-2.5h4.27"
          transform="translate(0 1)"
        />
        <line
          class="hubs-cls-7"
          x1="165.92"
          y1="188.04"
          x2="165.92"
          y2="194.12"
        />
      </g>
      <g id="Europeen-2" data-name="Europeen">
        <path
          class="hubs-cls-8"
          d="M182.75,172.64a3.39,3.39,0,0,1-3.39,3.39H151.27a3.4,3.4,0,0,1,0-6.79h28.09a3.4,3.4,0,0,1,3.39,3.4"
          transform="translate(0 1)"
        />
      </g>
    </g>
    <text class="hubs-cls-19" transform="translate(149.66 175.8)"
      >PARCOURSUP</text
    >
  </g>
  <g on:click={handleClick}>
    <g>
      <g>
        <g>
          <rect
            class="hubs-cls-6"
            x="199.38"
            y="177.13"
            width="16.76"
            height="16.84"
            rx="1.25"
          />
          <path
            class="hubs-cls-1"
            d="M214.89,176.56a.83.83,0,0,1,.83.82v14.34a.83.83,0,0,1-.83.83H200.63a.83.83,0,0,1-.83-.83V177.38a.83.83,0,0,1,.83-.82h14.26m0-.85H200.63a1.68,1.68,0,0,0-1.68,1.67v14.34a1.68,1.68,0,0,0,1.68,1.68h14.26a1.68,1.68,0,0,0,1.68-1.68V177.38a1.68,1.68,0,0,0-1.68-1.67Z"
            transform="translate(0 1)"
          />
        </g>
        <polyline
          class="hubs-cls-7"
          points="209.7 187.18 211.93 189.4 216.36 189.4"
        />
        <line
          class="hubs-cls-7"
          x1="210.27"
          y1="185.38"
          x2="216.36"
          y2="185.38"
        />
        <polyline
          class="hubs-cls-7"
          points="205.96 183.63 203.72 181.38 199.29 181.38"
        />
        <line
          class="hubs-cls-7"
          x1="205.33"
          y1="185.38"
          x2="199.29"
          y2="185.38"
        />
        <polyline
          class="hubs-cls-7"
          points="206.08 187.07 203.7 189.44 199.29 189.44"
        />
        <path
          class="hubs-cls-7"
          d="M207.83,176v6.12h-.05a2.45,2.45,0,1,0,2.45,2.45,2.5,2.5,0,0,0-.62-1.63h0l2.5-2.5h4.26"
          transform="translate(0 1)"
        />
        <line
          class="hubs-cls-7"
          x1="207.83"
          y1="188.04"
          x2="207.83"
          y2="194.12"
        />
      </g>
      <g id="Europeen-3" data-name="Europeen">
        <path
          class="hubs-cls-8"
          d="M224.67,172.64a3.4,3.4,0,0,1-3.4,3.39H193.19a3.4,3.4,0,0,1,0-6.79h28.08a3.4,3.4,0,0,1,3.4,3.4"
          transform="translate(0 1)"
        />
      </g>
    </g>
    <text class="hubs-cls-19" transform="translate(198.32 175.8)">APOGEE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(176.48 245.4) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(187.01 251.33)">SDO</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(230.89 407.37) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(238.1 413.21)">HOPSY</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(199.13 382.12) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(206.96 388.02)">RIM-P</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(303.36 517.79) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(312.15 523.65)">DUDE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(306.01 429.76) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(312.88 435.6)">DMIMT</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(231.46 563.31) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(242.1 569.19)">RSA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(531.8 410.58) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(540.92 416.49)">FAED</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(469.97 410.58) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(477.33 416.46)">FNAEG</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(778.27 587.21) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(788.05 593.15)">APPI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(712.78 630.36) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(721.28 636.3)">PSEM</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(735.42 598.06) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(746.24 603.94)">PSE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(544.38 594.66) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(550.67 600.58)">FIJAISV</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(607.32 594.66) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(615.24 600.58)">FIJAIT</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(349.57 654.55) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(359.62 660.42)">FICP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(357.56 701.6) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(368.67 707.47)">FCC</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(369.65 599.52) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(375.75 605.42)">ADONIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(394.15 701.59) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(400.74 707.43)">FICOBA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(164.26 505.59) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(169.69 511.43)">CRISTAL</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(187.09 661.44) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(196.68 667.31)">DN@</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(74.82 597.76) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(79.73 603.69)">SNE-DLS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(36.2 635.47) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(45.19 641.31)">DALO</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(58.99 700.42) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(65.4 706.28)">ADOMA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(103.06 635.47) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(112.8 641.38)">SIAO</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(439.12 682.3) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(444.61 688.12)">EVAFISC</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(420.66 599.41) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(427.89 605.29)">SIRIUS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(797.4 660.38) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(802.54 666.2)">GENESIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(766.16 683.06) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(776.79 688.88)">DPS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(791.03 488.55) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(796.65 494.4)">API-PNR</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(602.4 524.94) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(611.62 530.78)">CJNA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(583.26 641.67) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(593.27 647.51)">AEM</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(820.01 146.35) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(826.44 152.25)">BIOPEX</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(750.46 146.31) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(756.15 152.2)">DOREMI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(748.5 290.4) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(750.21 296.29) scale(0.95 1)"
      >BCR-DNRED</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(799.84 223.48) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(801.09 229.38) scale(0.95 1)"
      >SIREX-DRSD</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(702.72 320.22) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(713.4 326.12)">CAR</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(783.29 290.4) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(786.26 296.29)"
      >STARTRAC</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(782.42 107.62) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(791.58 113.49)">DGSE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(804.41 386.31) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(813.46 392.2)">FNPC</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(741.61 386.03) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(749.34 391.92)">FOVES</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(799.52 438.5) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(803.95 444.4)">STC-LAPI</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(761.16 438.12) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(772.69 444.01)">SIV</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(740.56 481.32) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(751.33 487.06)">SCA</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(576.49 410.58) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(587.56 416.41)">TAJ</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(428.31 382.52) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(437.16 388.36)">ADOC</text>
  </g>
  <g on:click={handleClick}>
    <g>
      <g>
        <g>
          <rect
            class="hubs-cls-6"
            x="447.34"
            y="348.69"
            width="16.76"
            height="16.84"
            rx="1.25"
          />
          <path
            class="hubs-cls-1"
            d="M462.85,348.12a.83.83,0,0,1,.83.83v14.33a.83.83,0,0,1-.83.83H448.59a.83.83,0,0,1-.82-.83V349a.83.83,0,0,1,.82-.83h14.26m0-.85H448.59a1.68,1.68,0,0,0-1.67,1.68v14.33a1.68,1.68,0,0,0,1.67,1.68h14.26a1.68,1.68,0,0,0,1.68-1.68V349a1.68,1.68,0,0,0-1.68-1.68Z"
            transform="translate(0 1)"
          />
        </g>
        <polyline
          class="hubs-cls-7"
          points="457.67 358.74 459.89 360.96 464.32 360.96"
        />
        <line
          class="hubs-cls-7"
          x1="458.23"
          y1="356.94"
          x2="464.32"
          y2="356.94"
        />
        <polyline
          class="hubs-cls-7"
          points="453.93 355.19 451.68 352.94 447.25 352.94"
        />
        <line
          class="hubs-cls-7"
          x1="453.29"
          y1="356.94"
          x2="447.25"
          y2="356.94"
        />
        <polyline
          class="hubs-cls-7"
          points="454.04 358.63 451.66 361 447.25 361"
        />
        <path
          class="hubs-cls-7"
          d="M455.8,347.51v6.12h-.06a2.45,2.45,0,1,0,2.45,2.45,2.5,2.5,0,0,0-.62-1.64h0l2.5-2.5h4.26"
          transform="translate(0 1)"
        />
        <line
          class="hubs-cls-7"
          x1="455.79"
          y1="359.6"
          x2="455.79"
          y2="365.69"
        />
      </g>
      <g id="Europeen-48" data-name="Europeen">
        <path
          class="hubs-cls-8"
          d="M480.48,344.2a3.4,3.4,0,0,1-3.4,3.39H434.52a3.39,3.39,0,0,1,0-6.78h42.56a3.4,3.4,0,0,1,3.4,3.39"
          transform="translate(0 1)"
        />
      </g>
    </g>
    <text class="hubs-cls-19" transform="translate(432.85 347.33) scale(0.98 1)"
      >ANACRIM/MERCURE</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(524.78 332.93) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(529.96 338.81)">FNG-CNI</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(380.51 240.46) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(386.05 246.36)">VISABIO</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(556.08 167.86) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(565.04 173.69)">PASP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(686.22 246.4) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(695.33 252.23)">EASP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(659.99 144.21) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(664.05 150.08)"
      >CRISTINA</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(576.41 306.3) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(587.06 312.18)">FPR</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(486.29 456.39) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(490.55 462.21)">OCTOPUS</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(530.25 456.39) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(540.05 462.21)">FNIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(438.41 438.86) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(445.72 444.67)">OSIRIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(648.4 246.4) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(654.28 252.26)">ACCRED</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(656.09 323.51) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(662.19 329.38)">ASTREE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(596.68 119.38) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(598.53 125.25)"
      >GESTEREXT</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(659.99 107.54) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(664.43 113.41)">CGEEDRT</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(527.42 130.44) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(535.17 136.33)">FSPRT</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(589.04 167.86) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(595.58 173.76)">GIPASP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(339.66 142.71) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(349.71 148.65)">ELOI</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(372.71 107.49) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(378.54 113.42)">ADGREF</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(339.89 210.65) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(345.58 216.49)">PRÉNAT</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(286.93 280.3) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(299.04 286.19)">DP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(249.22 280.3) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(259.39 286.19)">MES</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(491.69 332.93) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(502.78 338.81)">TES</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="41.8"
      height="33.52"
      transform="translate(602.4 489.94) scale(0.73)"
      xlink:href="#National"
    />
    <text class="hubs-cls-19" transform="translate(604.29 495.85)"
      >CASSIOPEE</text
    >
  </g>
  <g id="JRO-FRONTEX" on:click={handleClick}>
    <g>
      <path
        class="hubs-cls-1"
        d="M440.43,145.65A3.39,3.39,0,0,1,437,149H410.67a3.39,3.39,0,0,1,0-6.78H437a3.4,3.4,0,0,1,3.4,3.39"
        transform="translate(0 1)"
      />
      <g>
        <rect
          class="hubs-cls-2"
          x="414.47"
          y="150.46"
          width="19.35"
          height="19.43"
          rx="1.84"
        />
        <text class="hubs-cls-20" transform="translate(421.7 168.02)">UE</text>
        <polyline
          class="hubs-cls-4"
          points="426.23 161.68 428.74 164.18 433.8 164.18"
        />
        <line
          class="hubs-cls-4"
          x1="426.87"
          y1="159.76"
          x2="433.8"
          y2="159.76"
        />
        <polyline
          class="hubs-cls-4"
          points="422.33 157.96 419.72 155.37 414.48 155.37"
        />
        <line
          class="hubs-cls-4"
          x1="421.48"
          y1="159.76"
          x2="414.48"
          y2="159.76"
        />
        <polyline
          class="hubs-cls-4"
          points="422.2 161.74 419.7 164.22 414.48 164.22"
        />
        <path
          class="hubs-cls-4"
          d="M424.24,149.57v6.65h-.07a2.69,2.69,0,1,0,2,.89h0l2.74-2.74h4.88"
          transform="translate(0 1)"
        />
      </g>
    </g>
    <text class="hubs-cls-17" transform="translate(408.96 148.81) scale(0.9 1)"
      >JRO-FRONTEX</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="42.98"
      height="36.91"
      transform="translate(415.75 197.41) scale(0.73)"
      xlink:href="#Europeen-71"
    />
    <text class="hubs-cls-17" transform="translate(420.05 203.04)">EURODAC</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="42.98"
      height="36.91"
      transform="translate(453.73 304.17) scale(0.73)"
      xlink:href="#Europeen-71"
    />
    <text class="hubs-cls-17" transform="translate(458.12 309.82)">EUROPOL</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="42.98"
      height="36.91"
      transform="translate(508.93 292.61) scale(0.73)"
      xlink:href="#Europeen-71"
    />
    <text class="hubs-cls-17" transform="translate(515.33 298.22)">N-SIS-2</text
    >
  </g>
  <g on:click={handleClick}>
    <use
      width="42.98"
      height="36.91"
      transform="translate(561.05 524.71) scale(0.73)"
      xlink:href="#Europeen-71"
    />
    <text class="hubs-cls-17" transform="translate(569.86 530.33)">ECRIS</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="42.81"
      height="44.09"
      transform="translate(122.26 344.86) scale(0.73)"
      xlink:href="#Repertoire"
    />
    <text class="hubs-cls-21" transform="translate(128.74 350.71)">RNIPP</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="42.81"
      height="44.09"
      transform="translate(94.93 122.93) scale(0.73)"
      xlink:href="#Repertoire"
    />
    <text class="hubs-cls-21" transform="translate(103.48 128.9)">RNIE</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="42.81"
      height="44.09"
      transform="translate(270.14 322.56) scale(0.73)"
      xlink:href="#Repertoire"
    />
    <text class="hubs-cls-21" transform="translate(275.78 328.46)">RNIAM</text>
  </g>
  <g on:click={handleClick}>
    <use
      width="42.81"
      height="44.09"
      transform="translate(196.39 498.87) scale(0.73)"
      xlink:href="#Repertoire"
    />
    <text class="hubs-cls-21" transform="translate(202.2 504.6)">RNCPS</text>
  </g>
</g>
