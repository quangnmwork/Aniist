import { defineStore } from 'pinia'

type FilterProps = {
  search: string
  genre: string
  tag: string
  season: string
  format: string
}

export const useFilterSearch = defineStore('filter', {
  state: (): FilterProps => ({
    search: '',
    genre: '',
    tag: '',
    season: '',
    format: ''
  }),
  getters: {
    isValidFilterSearch: (state) => {
      return (
        (state.search.trim().length ||
          state.genre.trim().length ||
          state.tag.trim().length ||
          state.season.trim().length ||
          state.format.trim().length) > 0
      )
    }
  },
  actions: {
    isFilterSearchValid() {
      return (
        (this.search.trim().length ||
          this.genre.trim().length ||
          this.tag.trim().length ||
          this.season.trim().length ||
          this.format.trim().length) > 0
      )
    }
  }
})
