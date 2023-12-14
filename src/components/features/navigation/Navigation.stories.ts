import Navigation from '@/components/features/navigation/Navigation.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation
}

export default meta

export const NavigationBase: StoryObj<typeof Navigation> = {}
