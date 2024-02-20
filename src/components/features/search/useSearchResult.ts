/**
 * @description Hook for handle calling graphql search
 */

type ReturnData = {
  Page: {
    media: {
      title: { userPreferred: string }
      id: number
      coverImage: { medium: string }
    }[]
  }
}

type Query = {
  page: number
  perPage: number
  search: string
  genre: string
  tag: string
  season: string
  format: string
}

import { useQuery } from '@vue/apollo-composable'
import { searchQuery } from './search.graphql'
import { ref, type Ref, toValue, watchEffect } from 'vue'

export const useSearchResult = (
  queryInput: Ref<Query>,
  isQueryValid: Ref<boolean>
): Ref<ReturnData['Page']['media']> => {
  const returnDataRef = ref<ReturnData['Page']['media']>([])

  const { refetch } = useQuery<ReturnData>(searchQuery, {})

  const fetchSearchData = async () => {
    if (!isQueryValid.value) returnDataRef.value = []
    else {
      const obj = toValue(queryInput)

      Object.keys(obj).forEach(
        (k) => obj[k as keyof Query]?.toString().trim() === '' && delete obj[k as keyof Query]
      )

      const result = await refetch(obj)

      returnDataRef.value = result?.data.Page.media || []
    }
  }

  watchEffect(() => {
    fetchSearchData()
  })

  return returnDataRef
}
