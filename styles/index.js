import injectNormalizeStyles from './normalize'
import injectResetStyles from './reset'
import injectBaseStyles from './base'

export default function injectGlobalStyles() {
  injectNormalizeStyles()
  injectResetStyles()
  injectBaseStyles()
}
