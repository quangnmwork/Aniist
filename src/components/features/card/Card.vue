<template>
  <Card class="max-w-[220px] border-none shadow-none cursor-pointer title">
    <CardContent class="p-0">
      <img :src="props.image" width="100" height="150" />
    </CardContent>
    <CardFooter class="p-0 text-center">{{ props.title }}</CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardFooter } from '@/components/ui'

const props = defineProps({
  image: String,
  title: String,
  titleColor: String
})
</script>

<style scoped>
.title:hover {
  color: v-bind('props?.titleColor || `transparent`');
}
.title {
  transition: all 0.1s ease;
}
</style>
