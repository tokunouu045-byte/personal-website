<template>
  <div>
    <!-- ================= Hero：求职信息为主 ================= -->
    <section class="hero">
      <div class="hero-copy">
        <p class="hero-index">01 / ABOUT ME</p>
        <h1 class="hero-title">
          AI PRODUCT<br />
          MANAGER INTERN
        </h1>
        <p class="hero-name">{{ profile.name }}</p>
        <p class="hero-sub">数字媒体技术本科生 · {{ profile.positionLine }}</p>
        <p class="hero-focus">“{{ profile.focus }}”</p>
        <div class="hero-tags">
          <span v-for="t in profile.tags" :key="t">{{ t }}</span>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/resume">查看简历</a>
          <a class="btn btn-secondary" href="#/projects">查看项目</a>
        </div>
      </div>

      <!-- 个人照片 -->
      <div class="hero-photo-wrap">
        <div class="hero-photo">
          <img :src="profile.heroPhoto" :alt="profile.name" />
        </div>
        <p class="photo-tag">
          BASED IN CHINA · OPEN TO PRODUCT INTERNSHIP
        </p>
      </div>
    </section>

    <!-- ================= 教育 / 数据 ================= -->
    <section class="edu-strip">
      <div class="edu-cell">
        <span class="edu-value">2023 — 2027</span>
        <span class="edu-label">Jianghan University</span>
      </div>
      <div class="edu-cell">
        <span class="edu-value">GPA 3.91 / 4.0</span>
        <span class="edu-label">数字媒体技术</span>
      </div>
      <div class="edu-cell">
        <span class="edu-value">TOP 30%</span>
        <span class="edu-label">专业排名</span>
      </div>
    </section>

    <!-- ================= 精选项目（最多 3 个） ================= -->
    <section class="home-section">
      <div class="home-head reveal">
        <div>
          <p class="kicker">02 / SELECTED PROJECTS</p>
          <h2>Selected Projects</h2>
        </div>
        <a class="text-link" href="#/projects">View All Projects →</a>
      </div>
      <div class="preview-list">
        <ProjectRow
          v-for="p in featured"
          :key="p.id"
          :project="p"
          class="reveal"
        />
      </div>
    </section>

    <!-- ================= 底部联系 ================= -->
    <section class="home-contact">
      <div class="contact-strip reveal">
        <div class="strip-status">
          <span class="status-dot"></span>
          <p>
            Looking for<br />
            <strong>AI Product Internship</strong>
          </p>
        </div>
        <a class="btn btn-primary" :href="'mailto:' + profile.email">Let's Talk</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { profile, projects } from '../data'
import ProjectRow from '../components/ProjectRow.vue'

const featured = computed(() => projects.slice(0, 3))

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
