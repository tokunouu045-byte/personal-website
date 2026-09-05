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
        <span class="contact-label">{{ c.label }}</span>
        <span class="contact-value">{{ c.value }}</span>
      </a>
    </div>

    <p class="contact-note">
      微信添加时请备注“作品集 / 实习”，Email 用于实习与工作邀约。
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
import { profile } from '../data'

const contacts = [
  { label: 'Email', value: profile.email, href: 'mailto:' + profile.email },
  { label: 'WeChat', value: profile.wechat, href: '#' },
  { label: 'Phone', value: profile.phone, href: 'tel:' + profile.phone },
  { label: 'GitHub', value: profile.github, href: 'https://github.com/tokunouu045-byte' },
]

function openLink(c) {
  if (c.href && c.href !== '#') {
    window.location.href = c.href
  }
}
</script>
