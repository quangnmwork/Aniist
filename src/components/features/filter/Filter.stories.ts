import Filter from '@/components/features/filter/Filter.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter
}

export default meta

export const FilterBase: StoryObj<typeof Filter> = {}
