<template>
  <div class="max-w-6xl px-4 py-5 mx-auto" v-if="isValidFilterSearch">
    <h1 class="text-4xl text-blue-500 text-center">Search Result</h1>
    <div class="grid grid-cols-6 my-5 gap-3">
      <div v-for="anime in searchAnimeResult" :key="anime.id">
        <Card
          v-bind="{
            image: anime.coverImage.medium,
            title: anime.title.userPreferred,
            titleColor: anime.coverImage.color
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFilterSearch } from '../filter/useFilterSearch'
import { useSearchResult } from './useSearchResult'
import { toRef } from 'vue'
import { Card } from '@/components/features'

const state = useFilterSearch()

const { isValidFilterSearch, query } = storeToRefs(state)

const searchAnimeResult = useSearchResult(
  toRef(() => ({ page: 1, perPage: 10, ...query.value })),
  isValidFilterSearch
)
</script>
