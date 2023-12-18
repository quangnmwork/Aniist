import { useQuery } from '@vue/apollo-composable'
import { ref, watch } from 'vue'
import { trendingQuery } from './trending.graphql'

type ReturnData = {
  data: {
    media: {
      id: number
      title: {
        userPreferred: string
      }
      coverImage: {
        medium: string
        color: string
      }
    }[]
  }
}

export const useTrending = () => {
  const { onResult } = useQuery<ReturnData>(trendingQuery)

  const trendingData = ref<ReturnData['data']['media']>([])

  onResult((data) => {
    trendingData.value = data.data?.data.media
  })

  return {
    data: trendingData
  }
}
