<template>
  <div class="page-view">
    <div class="page-head reveal">
      <p class="kicker">04 / AI LAB</p>
      <h1 class="page-title">AI Lab</h1>
      <p class="page-sub">AI product observations &amp; experiments.</p>
    </div>

    <div class="lab-list">
      <div
        v-for="caseItem in aiLab"
        :key="caseItem.no"
        class="lab-item reveal"
      >
        <div class="lab-item-head">
          <span class="lab-no">{{ caseItem.no }}</span>
          <span class="lab-kind">{{ caseItem.tag }}</span>
          <h3 class="lab-title">{{ caseItem.title }}</h3>
          <p class="lab-quote">{{ caseItem.quote }}</p>
          <button
            class="lab-read"
            :class="{ open: openSet.has(caseItem.no) }"
            @click="toggle(caseItem.no)"
          >
            {{ openSet.has(caseItem.no) ? '收起分析 ↑' : '阅读分析 ↓' }}
          </button>
        </div>

        <div v-show="openSet.has(caseItem.no)" class="lab-detail">
          <div
            v-for="s in caseItem.sections"
            :key="s.key"
            class="lab-section"
            :class="{ idea: s.key === 'PRODUCT IDEA' }"
          >
            <span class="ls-key">{{ s.key }}</span>
            <span class="ls-title">{{ s.title }}</span>
            <p class="ls-body">{{ s.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { aiLab } from '../data'

const openSet = ref(new Set())

function toggle(no) {
  const next = new Set(openSet.value)
  if (next.has(no)) {
    next.delete(no)
  } else {
    next.add(no)
  }
  openSet.value = next
}

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
