<template>
  <div class="page-view">
    <div class="page-head reveal">
      <p class="kicker">01 / ABOUT ME</p>
      <h1 class="page-title">About</h1>
    </div>

    <div class="about-columns">
      <div class="about-col reveal">
        <p class="col-no">{{ about.education.no }}</p>
        <p class="col-title">{{ about.education.title }}</p>
        <h3>{{ about.education.school }}</h3>
        <p class="col-sub">{{ about.education.major }}</p>
        <p class="col-sub">{{ about.education.period }}</p>
        <div class="col-stats">
          <span>{{ about.education.gpa }}</span>
          <span>{{ about.education.rank }}</span>
        </div>
      </div>

      <div class="about-col reveal">
        <p class="col-no">{{ about.focus.no }}</p>
        <p class="col-title">{{ about.focus.title }}</p>
        <ul class="col-list">
          <li v-for="item in about.focus.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="about-col reveal">
        <p class="col-no">{{ about.tools.no }}</p>
        <p class="col-title">{{ about.tools.title }}</p>
        <ul class="col-list">
          <li v-for="item in about.tools.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <p class="about-intro reveal">{{ about.intro }}</p>

    <!-- SELECTED MOMENTS -->
    <div class="moments reveal">
      <p class="kicker">SELECTED MOMENTS</p>
      <div class="moments-grid">
        <figure
          v-for="m in about.moments"
          :key="m.src"
          class="moment"
          :class="m.ratio"
        >
          <img :src="m.src" :alt="m.caption" loading="lazy" />
          <figcaption>{{ m.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { about } from '../data'

let observer = null

function setupReveal() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

onMounted(setupReveal)
onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>
