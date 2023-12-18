<template>
  <div class="max-w-6xl grid grid-cols-5">
    <Card
      :key="id"
      v-bind="{
        image: item.coverImage.medium,
        title: item.title.userPreferred,
        titleColor: item.coverImage.color
      }"
      v-for="(item, id) in data"
    />
  </div>
</template>
<script setup lang="ts">
import { Card } from '@/components/features'
import { useTrending } from './useTrending'

const { data } = useTrending()
</script>
