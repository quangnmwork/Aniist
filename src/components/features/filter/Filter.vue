<template>
  <div class="max-w-6xl px-8 py-4 flex gap-6">
    <div class="grid items-center gap-1.5 w-[180px]">
      <label for="search">Search</label>
      <Input
        id="search"
        @update:model-value="(value) => (filterInput.search = value.toString())"
        type="text"
      />
    </div>
    <div class="grid items-center gap-1.5 w-[180px]">
      <label for="genres">Genres</label>
      <Select id="genres" @update:model-value="(value) => (filterInput.genre = value)">
        <SelectTrigger>
          <SelectValue placeholder="Select anime genres" />
        </SelectTrigger>
        <SelectContent class="overflow-auto max-h-96">
          <SelectGroup>
            <SelectLabel>Genres</SelectLabel>
            <SelectItem v-for="(item, id) in result?.genres" :key="id" :value="item">{{
              item
            }}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="grid items-center gap-1.5 w-[180px]">
      <label for="tag">Tags</label>
      <Select id="tag" @update:model-value="(value) => (filterInput.tag = value)">
        <SelectTrigger>
          <SelectValue placeholder="Select anime tag" />
        </SelectTrigger>
        <SelectContent class="overflow-auto max-h-96">
          <SelectGroup>
            <SelectLabel>Tag</SelectLabel>
            <SelectItem v-for="(item, id) in result?.tags" :key="id" :value="item.name">{{
              item.name
            }}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="grid items-center gap-1.5 w-[180px]">
      <label for="media">Media session</label>
      <Select id="media" @update:model-value="(value) => (filterInput.season = value)">
        <SelectTrigger>
          <SelectValue placeholder="Select media session" />
        </SelectTrigger>
        <SelectContent class="overflow-auto max-h-96">
          <SelectGroup>
            <SelectItem v-for="(item, id) in MEDIA_SESSION" :key="id" :value="item">{{
              item
            }}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="grid items-center gap-1.5 w-[180px]">
      <label for="format">Format</label>
      <Select id="format" @update:model-value="(value) => (filterInput.format = value)">
        <SelectTrigger>
          <SelectValue placeholder="Select media format" />
        </SelectTrigger>
        <SelectContent class="overflow-auto max-h-96">
          <SelectGroup>
            <SelectItem v-for="(item, id) in FORMAT" :key="id" :value="item">{{ item }}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>

  <div class="flex justify-center">
    <div @click="onSearch">
      <Button class="my-2"> Search </Button>
    </div>
  </div>
  <!-- <pre>{{ filterInput }}</pre> -->
  <!-- <pre>{{ search.$state }}</pre> -->
</template>
<script setup lang="ts">
import {
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Button
} from '@/components/ui'
import { useGetFilterData } from './useGetFilterData'
import { FORMAT, MEDIA_SESSION } from './constant'
import { textJSON } from '@/text'
import { useToast } from '@/components/ui/toast'
import { useFilterSearch } from './useFilterSearch'
import { reactive, watch } from 'vue'

const { toast } = useToast()

const filterInput = reactive({
  search: '',
  genre: '',
  season: '',
  format: '',
  tag: ''
})

const { result, onError } = useGetFilterData()

const search = useFilterSearch()

const onSearch = () => {
  search.$patch(filterInput)
}

onError(() => {
  toast({
    description: textJSON.error,
    variant: 'destructive'
  })
})
</script>
