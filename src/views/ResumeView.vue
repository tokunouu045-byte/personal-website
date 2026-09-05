<template>
  <div class="page-view">
    <div class="resume-top reveal">
      <div>
        <p class="kicker">05 / RESUME</p>
        <h1 class="page-title">AI Product Manager Intern</h1>
      </div>
      <a class="btn btn-primary" :href="resume.resumeFile" download>
        Download Resume
      </a>
    </div>

    <div class="resume-doc">
      <section class="resume-section reveal">
        <p class="rs-title">PROFILE</p>
        <p class="rs-body">
          数字媒体技术本科生，GPA 3.64/4.0，专业 Top 15%。具备产品策划、用户需求分析、交互设计及 AI 辅助开发实践经验。
        </p>
      </section>

      <section class="resume-section reveal">
        <p class="rs-title">EDUCATION</p>
        <div class="edu-row">
          <div>
            <h3>{{ resume.education.school }}</h3>
            <p class="rs-muted">{{ resume.education.major }}</p>
          </div>
          <div class="edu-right">
            <span>{{ resume.education.period }}</span>
            <span>{{ resume.education.gpa }} · {{ resume.education.rank }}</span>
          </div>
        </div>
        <p class="rs-muted edu-courses">{{ resume.education.courses }}</p>
      </section>

      <section class="resume-section reveal">
        <p class="rs-title">PROJECT EXPERIENCE</p>
        <ul class="resume-projects">
          <li v-for="p in resume.projects" :key="p.name">
            <span class="rp-name">{{ p.name }}</span>
            <span class="rp-role">{{ p.role }}</span>
            <span class="rp-period">{{ p.period }}</span>
          </li>
        </ul>
      </section>

      <section class="resume-section reveal">
        <p class="rs-title">AWARDS</p>
        <ul class="resume-awards">
          <li v-for="a in resume.awards" :key="a.project">
            <span class="award-level">{{ a.level }}</span>
            <span class="award-name">{{ a.name }}</span>
            <span class="award-project">{{ a.project }}</span>
          </li>
        </ul>
      </section>

      <section class="resume-section reveal">
        <p class="rs-title">SKILLS</p>
        <div class="skill-groups">
          <div v-for="group in skillGroups" :key="group.label" class="skill-group">
            <p class="sg-label">{{ group.label }}</p>
            <div class="skill-tags">
              <span v-for="s in group.items" :key="s">{{ s }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { resume } from '../data'

const skillGroups = [
  { label: 'Product', items: resume.skills.product },
  { label: 'AI', items: resume.skills.ai },
  { label: 'Tools', items: resume.skills.tools },
]

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
