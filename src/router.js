/* 轻量 hash 路由：不引入额外依赖，支持多页面与项目详情页 */
import { ref } from 'vue'

const routeMap = {
  about: 'about',
  projects: 'projects',
  'ai-lab': 'ai-lab',
  resume: 'resume',
  contact: 'contact',
}

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/'
  const path = raw.split('?')[0]
  const segments = path.split('/').filter(Boolean)
  if (segments[0] === 'project' && segments[1]) {
    return { name: 'project', id: segments[1] }
  }
  return { name: routeMap[segments[0]] || 'home' }
}

const route = ref(parseHash())

let attached = false

export function useRouter() {
  if (!attached && typeof window !== 'undefined') {
    attached = true
    window.addEventListener('hashchange', () => {
      route.value = parseHash()
      window.scrollTo(0, 0)
    })
  }
  return { route }
}
