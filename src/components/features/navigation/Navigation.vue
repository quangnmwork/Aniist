<template>
  <nav class="bg-[#2b2d42] text-[#bcbedc] flex justify-between px-12 py-4">
    <Avatar class="bg-transparent">
      <AvatarImage src="https://anilist.co/img/icons/icon.svg" />
    </Avatar>
    <div role="group" class="flex gap-3 items-center">
      <a>Login</a>
      <Button>Sign up</Button>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { Avatar, AvatarImage, Button } from '@/components/ui'
</script>
