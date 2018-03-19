import FlagDropdown from './FlagDropdownPlugin'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const PluginComponents = {
  install (Vue) {
    Vue.use(FlagDropdown)
  }
}

export default PluginComponents
