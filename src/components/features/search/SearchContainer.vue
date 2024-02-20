<template>
  <div class="w-6xl px-4 py-5 mx-auto" v-if="isValidFilterSearch">
    <!-- <div v-for="anime in searchAnimeResult" :key="anime.id">
      <img :src="anime.coverImage.medium" :alt="anime.title.userPreferred" class="w-6 h-6" />
      <div name="title">
        <h3>{{ anime.title }}</h3>
      </div>
    </div> -->
  </div>
  <pre>{{ searchAnimeResult }}</pre>
  {{ isValidFilterSearch }}
  {{ toRef({ page: 1, perPage: 10, ...query }) }}
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFilterSearch } from '../filter/useFilterSearch'
import { useSearchResult } from './useSearchResult'
import { toRef, toValue, watchEffect } from 'vue'

const state = useFilterSearch()

const { isValidFilterSearch, query } = storeToRefs(state)

const searchAnimeResult = useSearchResult(
  toRef(() => ({ page: 1, perPage: 10, ...query.value })),
  isValidFilterSearch
)

watchEffect(() => console.log(toValue(searchAnimeResult)))
</script>
