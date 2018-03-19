import FlagDropdown from './flag-dropdown.vue'

const flagDropdownStore = {
  flagsCountry: [
    {
      country: 'EN',
      icon: 'flag-icon flag-icon-gb',
      lang: 'en'
    },
    {
      country: 'VN',
      icon: 'flag-icon flag-icon-vn',
      lang: 'vn'
    }
  ]
}

const FlagDropdownPlugin = {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          flagDropdownStore: flagDropdownStore
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$flagdropdown', {
      get () {
        return this.$root.flagDropdownStore
      }
    })
    Vue.component('flag-dropdown', FlagDropdown)
  }
}

export default FlagDropdownPlugin
