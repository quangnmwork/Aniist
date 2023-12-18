import { useQuery } from '@vue/apollo-composable'
import { getFilterQuery } from './filter.graphql'
import { computed } from 'vue'

type Props = {
  genres: string[]
  tags: {
    id: number
    name: string
    isAdult: boolean
  }[]
}

export const useGetFilterData = () => {
  const { onError, result, refetch } = useQuery<Props>(getFilterQuery)

  const res = computed(() => ({
    genres: result.value?.genres ?? [],
    tags: result.value?.tags ?? []
  }))

  return {
    onError,
    refetch,
    result: res
  }
}
