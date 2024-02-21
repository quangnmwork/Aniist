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
    },
    query: (state) => {
      return {
        search: state.search,
        genre: state.genre,
        tag: state.tag,
        season: state.season,
        format: state.format
      }
    }
  }
})
