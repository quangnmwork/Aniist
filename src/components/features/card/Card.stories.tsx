import Card from './Card.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    image: '',
    title: ''
  }
}

export default meta

export const CardBase: StoryObj<typeof Card> = {
  args: {
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg',
    title: 'One piece', titleColor: 'blue'
  }
}
