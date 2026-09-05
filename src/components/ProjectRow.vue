<template>
  <a class="project-row" :href="'#/project/' + project.id">
    <span class="pr-no">{{ project.no }}</span>
    <div class="pr-info">
      <div class="pr-meta">
        <span>{{ project.type }}</span>
        <span>{{ project.year }}</span>
      </div>
      <h3 class="pr-name">{{ project.name }}</h3>
      <p class="pr-desc">{{ project.desc }}</p>
      <div class="project-tags">
        <span v-for="role in project.roles" :key="role">{{ role }}</span>
      </div>
      <span class="pr-view">View Case →</span>
    </div>
    <div class="pr-thumb">
      <img
        v-if="project.thumb || project.cover"
        :src="project.thumb || project.cover"
        :alt="project.name"
        loading="lazy"
      />
      <div v-else class="cover-placeholder">
        <span class="cover-placeholder-label">PRD / UI</span>
      </div>
      <span class="pr-line" aria-hidden="true"></span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>
