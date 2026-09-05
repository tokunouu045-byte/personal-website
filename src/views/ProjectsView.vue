<template>
  <div class="page-view">
    <div class="page-head reveal">
      <p class="kicker">02 / PROJECTS</p>
      <h1 class="page-title">Projects</h1>
      <p class="page-sub">Selected projects and product experiments.</p>
    </div>

    <div class="project-list">
      <ProjectRow
        v-for="p in projects"
        :key="p.id"
        :project="p"
        class="reveal"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { projects } from '../data'
import ProjectRow from '../components/ProjectRow.vue'

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
    { threshold: 0.08 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

onMounted(setupReveal)
onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>
