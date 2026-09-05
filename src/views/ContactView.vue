<template>
  <div class="page-view">
    <div class="page-head reveal">
      <p class="kicker">06 / CONTACT</p>
      <h1 class="page-title">Let's Talk</h1>
      <p class="page-sub">
        如果你对 AI 产品、用户体验或创造性技术感兴趣，欢迎联系我。
      </p>
    </div>

    <div class="contact-list reveal">
      <a
        v-for="c in contacts"
        :key="c.label"
        :href="c.href"
        @click.prevent="openLink(c)"
      >
        <span class="contact-label">{{ c.label }}</span>
        <span class="contact-value">{{ c.value }}</span>
      </a>
    </div>

    <p class="contact-note">
      GitHub / Portfolio 为占位链接，之后补充后会自动替换。
    </p>

    <div class="contact-footer reveal">
      <span class="status-dot"></span>
      <p>
        Looking for<br />
        <strong>AI Product Internship</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { profile } from '../data'

const contacts = [
  { label: 'Email', value: profile.email, href: 'mailto:' + profile.email },
  { label: 'Phone', value: profile.phone, href: 'tel:' + profile.phone },
  { label: 'GitHub', value: profile.github, href: '#' },
  { label: 'Portfolio', value: profile.portfolio, href: '#' },
]

function openLink(c) {
  if (c.href && c.href !== '#') {
    window.location.href = c.href
  }
}
</script>
