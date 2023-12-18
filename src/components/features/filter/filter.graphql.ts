import gql from 'graphql-tag'

export const getFilterQuery = gql`
  {
    genres: GenreCollection
    tags: MediaTagCollection {
      id
      name
      isAdult
    }
  }
`
