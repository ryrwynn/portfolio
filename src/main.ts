import '../style/modern-normalize.css'
import '../style/style.css'

import '../style/components/header.css'
import '../style/components/hero.css'
import '../style/components/about.css'
import '../style/components/featured.css'
import '../style/components/work.css'
import '../style/components/contact.css'
import '../style/components/footer.css'
import '../style/components/mobile-nav.css'


import toggleMode from './utils/dark-mode.ts'
import lazyLoading from './utils/lazy-loading.ts'
import mobileNav from './utils/mobile-nav.ts'

import '../style/utils.css'

toggleMode()
lazyLoading()
mobileNav()