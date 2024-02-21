import gql from 'graphql-tag'

export const searchQuery = gql`
  query SearchAnime(
    $page: Int = 1
    $perPage: Int = 10
    $search: String
    $genre: String
    $tag: String
    $season: MediaSeason
    $format: MediaFormat
  ) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, genre: $genre, tag: $tag, season: $season, format: $format) {
        title {
          userPreferred
        }
        id
        coverImage {
          medium
          color
        }
      }
    }
  }
`
