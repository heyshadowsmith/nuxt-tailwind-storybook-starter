import { storiesOf } from '@storybook/vue'
import Button from './Button'
import '../../../assets/css/main.css'

storiesOf('Buttons', module)
  .add('Nuxt Green Button', () => ({
    components: { Button },
    template: '<Button class="bg-nuxt-green">Nuxt Green Button</Button>'
  }))
  .add('Tailwind Blue Button', () => ({
    components: { Button },
    template: '<Button class="bg-tailwind-blue">Tailwind Blue Button</Button>'
  }))
  .add('Storybook Pink Button', () => ({
    components: { Button },
    template: '<Button class="bg-storybook-pink">Storybook Pink Button</Button>'
  }))