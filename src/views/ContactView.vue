<template>
  <div class="page-view">
    <div class="page-head reveal">
      <p class="kicker">06 / CONTACT</p>
      <h1 class="page-title">Let's Talk</h1>
      <p class="page-sub">
        如果你在寻找 AI 产品经理实习生，或者想聊聊 AI 产品、用户体验与创造性技术，欢迎随时联系我。看到消息后我会尽快回复。
      </p>
    </div>

    <div class="contact-list reveal">
      <a
        v-for="c in contacts"
        :key="c.label"
        :href="c.href"
        @click.prevent="openLink(c)"
      >
        <span class="contact-cell">
          <span class="contact-label">{{ c.label }}</span>
          <span class="contact-desc">{{ c.desc }}</span>
        </span>
        <span class="contact-value">{{ c.value }}</span>
      </a>
    </div>

    <p class="contact-note">
      以上信息均可直接使用；发送邮件或添加微信时请备注来意，我会尽快回复。
    </p>

    <div class="contact-footer reveal">
      <span class="status-dot"></span>
      <p>
        Looking for<br />
        <strong>AI Product Internship</strong><br />
        目前正在寻找 AI 产品经理实习机会，期待与你交流。
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { profile } from '../data'

const contacts = [
  { label: 'Email', value: profile.email, href: 'mailto:' + profile.email, desc: '实习与工作邀约首选' },
  { label: 'WeChat', value: profile.wechat, href: '#', desc: '备注“作品集 / 实习”更快通过' },
  { label: 'Phone', value: profile.phone, href: 'tel:' + profile.phone, desc: '工作时间可联系' },
  { label: 'GitHub', value: profile.github, href: 'https://github.com/tokunouu045-byte', desc: '项目代码与 AI 实验' },
  { label: '个人网站', value: profile.website, href: profile.website, desc: '作品集与项目全案' },
]

function openLink(c) {
  if (c.href && c.href !== '#') {
    window.location.href = c.href
  }
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
