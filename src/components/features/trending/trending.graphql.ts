import gql from 'graphql-tag'

export const trendingQuery = gql`
  {
    data: Page(page: 1, perPage: 5) {
      media(sort: TRENDING_DESC, type: ANIME) {
        id
        title {
          userPreferred
        }
        coverImage {
          medium
          color
        }
      }
    }
  }
`
