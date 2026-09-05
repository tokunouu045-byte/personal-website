<template>
  <div v-if="project" class="page-view detail-view">
    <a class="back-link" href="#/projects">← Projects</a>

    <div class="detail-head reveal">
      <!-- 封面图：文字环绕排版 -->
      <div class="detail-cover">
        <img v-if="project.cover" :src="project.cover" :alt="project.name" />
        <div v-else class="cover-placeholder">
          <span class="cover-placeholder-label">PRD / CASE STUDY</span>
        </div>
      </div>
      <p class="kicker">{{ project.no }} / {{ project.type }}</p>
      <h1 class="page-title">{{ project.name }}</h1>
      <div class="detail-meta">
        <span>{{ project.year }}</span>
        <span class="award">{{ project.award }}</span>
      </div>
      <div v-if="project.links" class="detail-links">
        <a
          v-for="link in project.links"
          :key="link.label"
          class="btn btn-primary"
          :href="link.url"
          :target="link.external ? '_blank' : '_self'"
          :rel="link.external ? 'noopener noreferrer' : undefined"
        >
          {{ link.label }} →
        </a>
      </div>
      <p class="page-sub">{{ project.desc }}</p>
    </div>

    <!-- 项目展示图（多图，完整显示，不裁切） -->
    <div v-if="project.gallery" class="detail-gallery reveal">
      <p class="kicker">GALLERY — 项目展示</p>
      <div
        class="gallery-grid"
        :class="{ 'cols-3': project.galleryCols === 3 }"
      >
        <figure v-for="(img, i) in project.gallery" :key="img.src || img">
          <img
            :src="img.src || img"
            :alt="project.name + ' 展示图 ' + (i + 1)"
            loading="lazy"
          />
          <figcaption>
            {{ img.caption || project.type + ' · 图 ' + (i + 1) }}
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="detail-sections">
      <section
        v-for="section in project.detail"
        :key="section.key"
        class="detail-section reveal"
      >
        <div class="ds-head">
          <span class="ds-no">{{ section.no }}</span>
          <span class="ds-key">{{ section.key }}</span>
          <h2 class="ds-title">{{ section.title }}</h2>
        </div>

        <div class="ds-body">
          <div v-if="section.flow" class="flow-list">
            <div v-for="(step, i) in section.flow" :key="step[0]" class="flow-step">
              <span class="flow-index">0{{ i + 1 }}</span>
              <div class="flow-copy">
                <strong>{{ step[0] }}</strong>
                <span>{{ step[1] }}</span>
              </div>
            </div>
          </div>

          <div v-if="section.images" class="ds-images">
            <img
              v-for="src in section.images"
              :key="src"
              :src="src"
              :alt="project.name + ' prototype'"
              loading="lazy"
            />
          </div>

          <ul v-if="section.body && !section.flow" class="ds-list">
            <li v-for="line in section.body" :key="line">{{ line }}</li>
          </ul>
        </div>
      </section>
    </div>

    <nav class="detail-nav">
      <a
        v-if="prevProject"
        class="dn-link"
        :href="'#/project/' + prevProject.id"
      >
        <span class="dn-label">← Previous</span>
        <span class="dn-name">{{ prevProject.no }} {{ prevProject.name }}</span>
      </a>
      <a
        v-if="nextProject"
        class="dn-link right"
        :href="'#/project/' + nextProject.id"
      >
        <span class="dn-label">Next →</span>
        <span class="dn-name">{{ nextProject.no }} {{ nextProject.name }}</span>
      </a>
    </nav>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { projects } from '../data'

const props = defineProps({
  id: { type: String, required: true },
})

const project = computed(() => projects.find((p) => p.id === props.id))

const index = computed(() => projects.findIndex((p) => p.id === props.id))
const prevProject = computed(() =>
  index.value > 0 ? projects[index.value - 1] : null
)
const nextProject = computed(() =>
  index.value < projects.length - 1 ? projects[index.value + 1] : null
)

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
