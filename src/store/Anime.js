import { defineStore } from 'pinia'

export const animeStore = defineStore('anime', {
  state: () => {
    return {
      anime: []
    }
  }
})