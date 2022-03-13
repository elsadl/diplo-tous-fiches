import { writable } from "svelte/store"

// export const BASE_PATH = "/dataviz/tousfiches/"
export const BASE_PATH = "/assets/"

export const display = writable({
  exemples: true,
  infos: false,
  niveau: false,
})
