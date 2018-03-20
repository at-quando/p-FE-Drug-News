import FlagDropdown from './FlagDropdownPlugin'
import SocialSection from './SocialPlugin'
import Pagination from './PaginationPlugin'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const PluginComponents = {
  install (Vue) {
    Vue.use(FlagDropdown)
    Vue.use(SocialSection)
    Vue.use(Pagination)
  }
}

export default PluginComponents
