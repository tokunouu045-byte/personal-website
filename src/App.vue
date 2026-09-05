<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from './router'
import { navItems, profile } from './data'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ProjectDetailView from './views/ProjectDetailView.vue'
import AiLabView from './views/AiLabView.vue'
import ResumeView from './views/ResumeView.vue'
import ContactView from './views/ContactView.vue'

const { route } = useRouter()

const menuOpen = ref(false)
const pageLoaded = ref(false)
const particlesCanvas = ref(null)

let raf = null
let particles = []
let resizeHandler = null

function initParticles() {
  const canvas = particlesCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const count = Math.min(55, Math.floor((window.innerWidth * window.innerHeight) / 26000))
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.6,
      vy: -(Math.random() * 0.2 + 0.05),
      vx: (Math.random() - 0.5) * 0.1,
      o: Math.random() * 0.28 + 0.08,
      hue: Math.random() > 0.5 ? '110, 139, 255' : '229, 183, 206',
    }))
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.y < -8) {
        p.y = window.innerHeight + 8
        p.x = Math.random() * window.innerWidth
      }
      if (p.x < -8) p.x = window.innerWidth + 8
      if (p.x > window.innerWidth + 8) p.x = -8
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(' + p.hue + ',' + p.o + ')'
      ctx.fill()
    }
    raf = requestAnimationFrame(draw)
  }

  resize()
  resizeHandler = resize
  window.addEventListener('resize', resize)
  if (!reduce) {
    raf = requestAnimationFrame(draw)
  } else {
    draw()
    cancelAnimationFrame(raf)
  }
}

const activeName = () =>
  route.value.name === 'project' ? 'projects' : route.value.name

function currentKey() {
  return route.value.name === 'project'
    ? 'project-' + route.value.id
    : route.value.name
}

onMounted(() => {
  requestAnimationFrame(() => {
    pageLoaded.value = true
  })
  initParticles()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
})
</script>

<template>
  <div class="shell" :class="{ loaded: pageLoaded }">
    <!-- 动态粉蓝渐变背景 + 粒子层 -->
    <div class="bg-gradient" aria-hidden="true"></div>
    <canvas ref="particlesCanvas" class="bg-particles" aria-hidden="true"></canvas>

    <!-- 顶部横向导航 -->
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#/">
          {{ profile.enName }}
          <span class="brand-sub">AI PRODUCT</span>
        </a>

        <nav class="site-nav">
          <a
            v-for="item in navItems"
            :key="item.to"
            :href="'#' + item.to"
            :class="{ active: activeName() === item.name }"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
        </nav>

        <button
          class="menu-btn"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="打开菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="mobile-nav" :class="{ open: menuOpen }">
        <a
          v-for="item in navItems"
          :key="item.to"
          :href="'#' + item.to"
          :class="{ active: activeName() === item.name }"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
      </div>
    </header>

    <!-- 内容区 -->
    <main class="main">
      <div class="container view-wrap" :key="currentKey()">
        <HomeView v-if="route.name === 'home'" />
        <AboutView v-else-if="route.name === 'about'" />
        <ProjectsView v-else-if="route.name === 'projects'" />
        <ProjectDetailView
          v-else-if="route.name === 'project'"
          :id="route.id"
        />
        <AiLabView v-else-if="route.name === 'ai-lab'" />
        <ResumeView v-else-if="route.name === 'resume'" />
        <ContactView v-else-if="route.name === 'contact'" />
      </div>

      <footer class="footer">
        <div class="container footer-inner">
          <span>© 2026 {{ profile.name }} · AI Product Portfolio</span>
          <span>{{ profile.email }}</span>
        </div>
      </footer>
    </main>
  </div>
</template>
