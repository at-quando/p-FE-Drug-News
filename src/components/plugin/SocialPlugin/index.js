import SocialSection from './social-section.vue'

const socialStore = {
  icons: [
    {
      name: 'google',
      prefix: 'fab',
      color: '#da4935',
      link: '#'
    },
    {
      name: 'facebook-f',
      prefix: 'fab',
      color: '#4463b1',
      link: '#'
    },
    {
      name: 'play',
      prefix: 'fas',
      color: '#e32114',
      link: '#'
    },
    {
      name: 'skype',
      prefix: 'fab',
      color: '#21cafb',
      link: '#'
    },
    {
      name: 'twitter',
      prefix: 'fab',
      color: '#4e9edc',
      link: '#'
    },
    {
      name: 'instagram',
      prefix: 'fab',
      color: '#4c81a4',
      link: '#'
    }
  ]
}

const SocialPlugin = {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          socialStore: socialStore
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$socialicon', {
      get () {
        return this.$root.socialStore
      }
    })
    Vue.component('social-section', SocialSection)
  }
}

export default SocialPlugin
