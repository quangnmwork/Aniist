<template>
  <div class="w-6xl px-4 py-5" v-if="false">1</div>
  {{ isValidFilterSearch }}
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFilterSearch } from '../filter/useFilterSearch'

const state = useFilterSearch()

const { isValidFilterSearch } = storeToRefs(state)

console.log(isValidFilterSearch)
</script>
