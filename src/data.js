/* ============================================================
 * 网站全部内容数据
 * 修改这里的内容，页面会自动更新。
 * ============================================================ */

export const profile = {
  name: '李梦婷',
  enName: 'LI MENGTING',
  role: 'AI 产品经理实习生',
  school: '江汉大学',
  major: '数字媒体技术',
  degree: '数字媒体技术 · 本科',
  period: '2023.09 — 2027.06',
  gpa: '3.91 / 4.0',
  rank: 'Top 30%',
  location: '湖北 · 武汉',
  positionLine: 'AI 产品设计 / 产品策划 / 交互体验',
  focus:
    '关注 AI × 产品 × 用户体验，探索技术如何转化为真正有价值的用户体验。',
  tags: ['Product Thinking', 'AI Product', 'UX / Interaction'],
  heroPhoto: '/images/personal/hero-photo.jpg',
  intro:
    '数字媒体技术专业本科生，GPA 3.91/4.0，专业排名前 30%。熟悉产品策划、用户需求分析、交互设计与 AI 辅助开发全流程，参与多项国家级与省级获奖项目，具备从用户洞察、方案设计、原型落地到开发验证的完整实践经验。',
  extra:
    '深度使用 ChatGPT、Gemini、Codex、Claude 等生成式 AI 工具；英语四六级均分 550+；曾任校学生会秘书部副部长，参与大型活动组织。',
  email: '2537920812@qq.com',
  phone: '13667240212',
  github: 'github.com/limengting', // 占位，等你补充后替换
  portfolio: 'zcool.com.cn/limengting', // 占位，等你补充后替换
  wechat: 'limengting-wx', // 占位
}

export const stats = [
  { num: '03', label: 'Awards', zh: '获奖项目' },
  { num: '05', label: 'Product Projects', zh: '产品项目' },
  { num: '05+', label: 'AI Tools', zh: '深度使用的 AI 工具' },
  { num: '01', label: 'Personal Product Lab', zh: '个人产品实验室' },
]

export const about = {
  education: {
    no: '01',
    title: 'EDUCATION',
    school: '江汉大学',
    major: '数字媒体技术',
    period: '2023 — 2027',
    gpa: 'GPA 3.91 / 4.0',
    rank: '专业 Top 30%',
  },
  focus: {
    no: '02',
    title: 'FOCUS',
    items: ['AI Product', 'Product Strategy', 'UX / Interaction', 'Creative Technology'],
  },
  tools: {
    no: '03',
    title: 'TOOLS',
    items: ['Figma', 'Axure', 'Python', 'Unity', 'VS Code', 'Gemini', 'Codex'],
  },
  intro:
    '我具备设计、技术和产品三个维度的学习背景，希望在 AI 产品岗位中将用户需求、产品体验和技术能力连接起来。',
  moments: [
    {
      src: '/images/personal/moment-1.jpg',
      ratio: 'r-45',
      caption: '校园日常',
    },
    {
      src: '/images/personal/moment-2.jpg',
      ratio: 'r-32',
      caption: '学习与生活',
    },
  ],
}

export const projects = [
  {
    id: 'ai-photo',
    no: '01',
    name: 'AI 拍照助手',
    type: 'AI 摄影同款拍摄 · 微信小程序',
    size: 'large',
    year: '2026',
    award: '个人产品项目 · 完整 PRD + 高保真原型 + 小程序 Demo',
    roles: ['Product Strategy', 'User Research', 'PRD / Prototype', 'Mini Program Demo'],
    desc: '把「网上好看、现场不知道在哪拍」变成可执行的拍摄方案：参考图 → AI 拍摄方案 → 叠画取景 → 出片对比。',
    cover: '/images/ai-photo/ai-photo-cover.jpg',
    thumb: '/images/ai-photo/ai-photo-thumb.jpg',
    links: [
      {
        label: '体验 Demo',
        url: 'https://modao.cc/proto/YTdGoImstkh759INqT9efd/sharing?view_mode=device',
        external: true,
      },
    ],
    galleryCols: 4,
    gallery: [
      { src: '/images/ai-photo/ai-photo-02-login.png', caption: '登录注册' },
      { src: '/images/ai-photo/ai-photo-04-import.png', caption: '参考图导入' },
      { src: '/images/ai-photo/ai-photo-06-plan.png', caption: 'AI 方案卡' },
      { src: '/images/ai-photo/ai-photo-07-camera.png', caption: '叠画取景' },
    ],
    detail: [
      {
        no: '01',
        key: 'OVERVIEW',
        title: '项目简介',
        body: [
          'AI 拍照助手是一款微信小程序：用户在网上看到想拍的照片（小红书 / 抖音等），上传参考图，AI 生成位置、机位、时间、穿搭、姿势等可执行拍摄方案，再用叠画取景辅助现场对齐构图，拍完后自动对比成片并给出修正建议，把「网上好看、现场不知道在哪拍」变成可复制的同款拍摄体验。',
          '项目从 8 份有效问卷的用户调研出发，完成产品定义、PRD 与 13 页高保真交互原型，并将原型转制为可运行的微信小程序 Demo（纯前端本地模拟数据，导入微信开发者工具即可体验完整流程）。',
        ],
      },
      {
        no: '02',
        key: 'PROBLEM',
        title: '用户痛点',
        body: [
          '「网上好看、现场不知道在哪拍」：7/8 被调研用户遇到过，参考图与拍摄地点之间的信息断层是最大痛点；',
          '参考图信息缺失：位置、机位、时间、穿搭、姿势是用户最想获取的前 4 类信息；',
          '拍完不会对比：6/8 用户对成片回看不满意，缺少参考图与成片的差异分析；',
          '收藏即吃灰：6/8 用户收藏后不整理，缺少按场景 / 地点的自动归类。',
        ],
      },
      {
        no: '03',
        key: 'PRODUCT GOAL',
        title: '产品目标',
        body: [
          '让「拍同款」从玄学变成可执行方案：参考图 → 拍摄方案 → 叠画取景 → 出片对比的完整闭环；',
          '把出片率（得到一张满意照片所需的拍摄张数）作为核心体验指标，用叠画与修正建议降低试错成本。',
        ],
      },
      {
        no: '04',
        key: 'MY ROLE',
        title: '我的职责',
        body: [
          '产品策划 · 用户调研 · PRD · 高保真原型 · 小程序 Demo',
          '负责问卷调研与用户洞察、产品定义、功能规划与优先级（P0 / P1 / P2）、PRD 撰写、13 页高保真交互原型，并将原型转制为可运行的微信小程序 Demo。',
        ],
      },
      {
        no: '05',
        key: 'PRODUCT FLOW',
        title: '产品流程',
        flow: [
          ['导入参考图', '从相册选择想拍的照片（支持重复图识别）'],
          ['AI 生成拍摄方案', '输出位置 / 机位 / 时间 / 穿搭 / 姿势，生成 ≤5 秒'],
          ['叠画取景', '参考图半透明叠加到相机取景画面（30%–70% 可调），对齐构图'],
          ['拍摄出片', '按方案拍摄并保存成片'],
          ['对比修正', '参考图 vs 成片对比，输出构图 / 光线 / 人物差异与修正建议'],
          ['收藏 / 分享', '方案与成片可收藏、分享微信，支持一键重拍'],
        ],
      },
      {
        no: '06',
        key: 'FEATURES',
        title: '核心功能',
        body: [
          'AI 拍摄方案：位置、机位、时间、穿搭、姿势结构化输出，专业参数默认折叠；',
          '叠画取景：参考图半透明叠加，透明度 30%–70% 可调，本地运行；',
          '出片对比：参考图与成片对比，输出构图 / 光线 / 人物差异，每次 1–2 条口语化建议；',
          '想拍清单：按场景 / 地点自动打标签（旅行 / 探店 / 约会），长按多选批量生成方案；',
          '用户体系：手机号验证码登录，未登录可浏览、收藏 / 生成方案时引导登录；',
          '历史方案与出片记录：离线可查看，支持一键重拍。',
        ],
      },
      {
        no: '07',
        key: 'PROTOTYPE',
        title: '产品原型与 Demo',
        body: [
          '基于 PRD 完成 13 页高保真交互原型（墨刀），覆盖启动、登录、首页、参考图导入、AI 方案生成、方案卡、叠画取景、出片对比、想拍清单、历史方案、出片记录与设置；随后转制为微信小程序 Demo，黑白极简风，真实调用 wx.chooseMedia 选图，可在微信开发者工具中体验完整流程。',
        ],
      },
      {
        no: '08',
        key: 'OUTCOME',
        title: '项目成果',
        body: [
          '完成 8 份有效问卷调研，量化验证核心痛点与信息需求优先级；',
          '输出完整 PRD（功能优先级 P0 / P1 / P2、规则说明、非功能需求）与 13 页高保真原型；',
          '转制可运行的小程序 Demo v0.2.0，验证「参考图 → 方案 → 叠画 → 对比」核心链路的产品可行性。',
        ],
      },
      {
        no: '09',
        key: 'REFLECTION',
        title: '产品思考',
        body: [
          'AI 的价值不是炫技：方案生成 ≤5 秒、每次 1–2 条口语化建议，都围绕「降低现场决策成本」这一真实目标；',
          '「出片率」比「功能数量」更能定义体验好坏，后续可用该指标验证叠画与修正建议的实际效果；',
          '从原型到可运行 Demo 的转制，让我更理解设计与工程之间的边界，也验证了纯前端模拟数据足以支撑早期产品验证。',
        ],
      },
    ],
  },
  {
    id: 'liyige',
    no: '02',
    name: '脂艺阁',
    type: 'AI × 非遗文化体验',
    size: 'large',
    year: '2026',
    award: '中国大学生计算机设计大赛 · 省级一等奖',
    roles: ['Product Strategy', 'UX / Interaction', 'AI Feature'],
    desc: '通过 AI 试妆、互动体验和数字化内容，重新设计年轻用户了解传统胭脂文化的方式。',
    cover: '/images/liyige-cover.jpg',
    thumb: '/images/liyige-thumb.jpg',
    detail: [
      {
        no: '01',
        key: 'OVERVIEW',
        title: '项目简介',
        body: [
          '脂艺阁是一款融合非遗文化、AI 智能体验与互动娱乐的数字化胭脂体验 App。针对传统非遗文化信息分散、年轻用户认知门槛高、展示互动性不足等问题，把「被观看的文化」变成「可体验的文化」。',
        ],
      },
      {
        no: '02',
        key: 'PROBLEM',
        title: '用户痛点',
        body: [
          '年轻用户对传统胭脂文化了解少，不知道如何选择适合自己的色号；',
          '传统文化展示形式较为静态，参与感不足；',
          '购买前无法预览上妆效果，存在试错成本。',
        ],
      },
      {
        no: '03',
        key: 'PRODUCT GOAL',
        title: '产品目标',
        body: [
          '让用户更容易理解胭脂历史；',
          '将传统知识转化为互动体验；',
          '利用 AI 提供符合用户特点的妆容推荐，降低选择成本。',
        ],
      },
      {
        no: '04',
        key: 'MY ROLE',
        title: '我的职责',
        body: ['产品策划 · 交互设计 · 原型设计', '负责产品定位、用户需求分析、功能规划、AI 功能设计、Axure 交互原型制作。'],
      },
      {
        no: '05',
        key: 'PRODUCT FLOW',
        title: '产品流程',
        flow: [
          ['文化了解', '通过内容探索认识胭脂历史与制作工艺'],
          ['制作体验', '选择材料、组合配方，模拟制作虚拟胭脂'],
          ['AI 试妆', '上传照片、选择色号，AI 生成妆容效果与色彩建议'],
          ['保存 / 分享', '保存妆容效果并分享给朋友'],
          ['商品探索', '从文化体验自然进入虚拟商城购买'],
        ],
      },
      {
        no: '06',
        key: 'FEATURES',
        title: '核心功能',
        body: [
          'AI 智能试妆：人脸照片上传、胭脂色号选择、虚拟妆容与色彩搭配建议；',
          '胭脂制作互动体验：材料选择、配方组合、制作步骤游戏化；',
          '非遗文化知识库：历史、朝代、工艺、色彩，图文视频动画展示；',
          '虚拟商城：形成「文化认知 → 互动体验 → 产品购买」闭环。',
        ],
      },
      {
        no: '07',
        key: 'PROTOTYPE',
        title: '产品原型',
          body: ['使用 Axure 完成高保真交互原型，覆盖文化探索、制作体验、AI 试妆与虚拟商城四大模块。'],
      },
      {
        no: '08',
        key: 'OUTCOME',
        title: '项目成果',
        body: ['中国大学生计算机设计大赛 · 省级一等奖', '完成 App 产品规划、Axure 交互原型、AI 功能设计与数字文化体验方案。'],
      },
      {
        no: '09',
        key: 'REFLECTION',
        title: '产品思考',
        body: [
          'AI 不是简单增加一个功能，而是解决用户「无法预览效果、不知道如何选择」的真实问题；',
          '后续优化方向：AI 个性化推荐、AI 文化助手（自然语言问答）、用户共创社区。',
        ],
      },
    ],
  },
  {
    id: 'zhilv',
    no: '03',
    name: '智旅',
    type: 'AI 个性化旅行规划 App',
    size: 'large',
    year: '2026',
    award: '个人产品项目 · 完整产品方案',
    roles: ['Product Strategy', 'User Research', 'Interaction Design'],
    desc: '通过 AI 生成个性化旅行方案，把数小时的人工规划缩短为一次对话。',
    cover: '/images/zhilv-showcase.png',
    thumb: '/images/zhilv-showcase.png',
    galleryCols: 3,
    gallery: [
      { src: '/images/zhilv-prototype.jpg', caption: '原型高保真图' },
      { src: '/images/zhilv-poster1.jpg', caption: '展示图 1' },
      { src: '/images/zhilv-poster2.jpg', caption: '展示图 2' },
    ],
    detail: [
      {
        no: '01',
        key: 'OVERVIEW',
        title: '项目简介',
        body: [
          '智旅是一款 AI 个性化旅行规划 App。针对年轻用户旅行攻略分散、行程规划耗时、预算控制困难等问题，通过 AI 生成个性化旅行方案，降低用户决策成本。',
        ],
      },
      {
        no: '02',
        key: 'PROBLEM',
        title: '用户痛点',
        body: [
          '旅行信息分散：景点、攻略、交通、住宿分布在多个平台；',
          '路线规划复杂：时间、预算、兴趣难以平衡；',
          '缺少个性化推荐：传统平台无法理解用户真实需求。',
        ],
      },
      {
        no: '03',
        key: 'PRODUCT GOAL',
        title: '产品目标',
        body: [
          '用 AI 把「规划旅行」从数小时的人工整理缩短为一次对话；',
          '形成「用户输入 → AI 生成行程 → 方案调整 → 旅行服务」的核心闭环。',
        ],
      },
      {
        no: '04',
        key: 'MY ROLE',
        title: '我的职责',
        body: ['产品负责人', '负责用户需求分析、产品定位、功能设计、用户流程设计、Axure 原型制作；独立完成 BRD、产品思维导图与竞品分析。'],
      },
      {
        no: '05',
        key: 'PRODUCT FLOW',
        title: '产品流程',
        flow: [
          ['用户输入需求', '目的地 / 时间 / 预算 / 兴趣'],
          ['AI 分析偏好', '理解用户真实旅行诉求'],
          ['生成旅行方案', '每日路线、景点推荐、交通建议、消费预算'],
          ['用户修改', '按偏好调整行程'],
          ['保存分享', '保存方案并分享给同行人'],
        ],
      },
      {
        no: '06',
        key: 'FEATURES',
        title: '核心功能',
        body: [
          'AI 行程生成：每日路线、景点推荐、交通建议、消费预算；',
          '预算优化：根据预算约束自动调整方案；',
          '交通住宿整合：聚合出行与住宿信息；',
          '旅行社区与个性化推荐；',
          '未来方向：AI Agent 旅行助手、语音交互、实时路线调整、AR 景点讲解。',
        ],
      },
      {
        no: '07',
        key: 'PROTOTYPE',
        title: '产品原型',
        body: ['Axure 交互原型 + 高保真页面，覆盖输入需求、方案生成、行程查看与调整的核心链路。'],
      },
      {
        no: '08',
        key: 'OUTCOME',
        title: '项目成果',
        body: ['完成产品定位、用户画像、功能架构与竞品分析；', '形成完整 AI 旅行产品方案与交互原型。'],
      },
      {
        no: '09',
        key: 'REFLECTION',
        title: '产品思考',
        body: [
          '与携程、飞猪、小红书对比后认识到差异化方向：不做「预订聚合」，做「决策助手」；',
          'AI 的价值在于减少用户的决策成本，而不是替代用户做选择。',
        ],
      },
    ],
  },
  {
    id: 'fantopia',
    no: '04',
    name: '蹲票雷达',
    type: 'AI 演出信息智能助手',
    size: 'mid',
    year: '2025',
    award: '个人产品项目 · 完整 PRD',
    roles: ['AI Product Design', 'Figma', 'Python'],
    desc: '从个人 Python 检测脚本出发，产品化为面向粉丝的演出票务回流智能提醒工具。',
    cover: '/images/dunpiao-cover.jpg',
    thumb: '/images/dunpiao-cover.jpg',
    gallery: [
      { src: '/images/dunpiao-1.jpg', caption: '创建监测任务' },
      { src: '/images/dunpiao-2.jpg', caption: '监测任务列表' },
      { src: '/images/dunpiao-3.jpg', caption: '回流票提醒' },
      { src: '/images/dunpiao-4.jpg', caption: '监测详情' },
    ],
    detail: [
      {
        no: '01',
        key: 'OVERVIEW',
        title: '项目简介',
        body: [
          '「蹲票雷达」是一款演出票务缺票回流智能提醒工具。热门演出开票即售罄，但退票、支付超时释放、主办方追加票位会产生回流票；蹲票雷达自动监测票务状态变化并及时提醒用户，把用户从反复手动刷新中解放出来。',
        ],
      },
      {
        no: '02',
        key: 'PROBLEM',
        title: '用户痛点',
        body: [
          '用户无法长时间盯手机（上班、上课），容易错过回流票窗口期；',
          '官方候补 / 登记通知延迟高、信息不透明；',
          '市面「代抢」工具游走平台规则边缘，存在账号风险与合规问题。',
        ],
      },
      {
        no: '03',
        key: 'PRODUCT GOAL',
        title: '产品目标',
        body: [
          '做「信息差工具」而不是「抢票工具」：只做状态提醒，不做自动下单；',
          '提醒响应时长小于 10 秒，把用户从持续手动刷新中解放出来。',
        ],
      },
      {
        no: '04',
        key: 'MY ROLE',
        title: '我的职责',
        body: ['AI 产品设计 · Figma 原型与 UI · MVP 技术验证', '负责 PRD 撰写、移动端原型与 UI 设计、基础设计规范建立，并使用 Python + Selenium 完成 MVP 技术验证。'],
      },
      {
        no: '05',
        key: 'PRODUCT FLOW',
        title: '产品流程',
        flow: [
          ['创建监测任务', '配置目标场次的购票页面链接'],
          ['AI 解析需求', '把自然语言转化为城市、日期、预算、座位偏好等结构化条件'],
          ['条件监测', '后台定时检测票务状态关键词变化'],
          ['匹配结果', '检测到回流票释放'],
          ['消息提醒', '第一时间通知用户，前往官方页面手动完成购买'],
        ],
      },
      {
        no: '06',
        key: 'FEATURES',
        title: '核心功能',
        body: [
          'MVP：配置购票页面链接、定时检测、声音 / 弹窗提醒；',
          'V1.5：多场次多平台监控、微信服务号 / 企业微信推送、自定义频率与关键词；',
          'V2：检测历史看板、多用户共享监控任务。',
        ],
      },
      {
        no: '07',
        key: 'PROTOTYPE',
        title: '产品原型',
          body: ['Figma 移动端高保真原型 + 颜色、字体、按钮、卡片基础设计规范；PRD 完整定义功能范围、技术架构、关键指标与合规边界。'],
      },
      {
        no: '08',
        key: 'OUTCOME',
        title: '项目成果',
        body: [
          '完成从技术脚本到产品方案的转化，输出完整 PRD；',
          'MVP 技术验证完成：解决 JS 动态渲染抓取、弹窗遮挡、文本节点拆分等实际问题。',
        ],
      },
      {
        no: '09',
        key: 'REFLECTION',
        title: '产品思考',
        body: [
          '主动的产品边界设计（不做自动下单）比技术能力更重要，也是 PM 必须承担的责任；',
          '提醒响应时长、准确率等指标需要被明确定义和度量；',
          '检测频率需要在「响应及时」与「合规、不构成压力」之间取得平衡。',
        ],
      },
    ],
  },
  {
    id: 'gugong',
    no: '05',
    name: '故宫角楼',
    type: '3D 文化体验 · 游戏化设计',
    size: 'small',
    year: '2026',
    award: '中国大学生计算机设计大赛 · 省级二等奖',
    roles: ['Product Design', 'Unity', 'AI-assisted Dev'],
    desc: '以 1956 年故宫角楼修缮为背景，让用户以修复工匠身份参与建筑复原。',
    cover: '/images/guogong-cover.jpg',
    thumb: '/images/guogong-thumb.jpg',
    detail: [
      {
        no: '01',
        key: 'OVERVIEW',
        title: '项目简介',
        body: [
          '《紫禁匠师》是一款以 1956 年故宫角楼修缮为背景的 3D 数字文化体验游戏。用户以古建筑修复工匠身份参与勘测、脊兽归位、斗拱还原、比例校准等互动任务，了解中国传统建筑营造技艺。',
        ],
      },
      {
        no: '02',
        key: 'PROBLEM',
        title: '用户痛点',
        body: [
          '传统建筑文化传播依赖书籍、图片、纪录片，用户只能观看、无法主动探索；',
          '斗拱、脊兽、榫卯等专业知识对普通用户理解困难；',
          '年轻用户需要更符合自身习惯的传统文化体验方式。',
        ],
      },
      {
        no: '03',
        key: 'PRODUCT GOAL',
        title: '产品目标',
        body: ['通过游戏化交互和数字技术，把传统文化知识转化为「可探索、可操作、可反馈」的数字体验。'],
      },
      {
        no: '04',
        key: 'MY ROLE',
        title: '我的职责',
        body: ['产品设计 · Unity 场景搭建 · AI 辅助开发', '负责任务流程、交互机制及文化知识展示设计；使用 VS Code + AI 工具完成代码生成、功能实现与问题排查，负责需求拆解、测试验证与最终功能集成。'],
      },
      {
        no: '05',
        key: 'PRODUCT FLOW',
        title: '产品流程',
        flow: [
          ['进入游戏', '角色设定：古建筑修复工匠'],
          ['探索场景', '发现角楼建筑损坏'],
          ['完成修复任务', '损坏勘测 / 脊兽归位 / 斗拱还原 / 比例校准'],
          ['学习知识', '在任务反馈中理解建筑营造技艺'],
          ['完成复原', '完成角楼整体复原'],
        ],
      },
      {
        no: '06',
        key: 'FEATURES',
        title: '核心功能',
        body: [
          '建筑损坏勘测：从「观看建筑」到「主动发现问题」；',
          '脊兽归位：根据位置、形态、历史资料选择正确脊兽，错误时 AI/系统提示相关知识；',
          '斗拱结构还原：拖拽组件组合结构，理解斗拱作用与结构关系；',
          '三重檐比例校准：调整高度、比例、位置完成角楼复原。',
        ],
      },
      {
        no: '07',
        key: 'PROTOTYPE',
        title: '产品原型',
        body: ['Unity 3D 体验场景与任务交互原型；项目视觉海报。'],
      },
      {
        no: '08',
        key: 'OUTCOME',
        title: '项目成果',
        body: ['中国大学生计算机设计大赛 · 省级二等奖', '完成 Unity 三维体验场景、游戏交互设计、AI 辅助开发流程与数字文化产品方案。'],
      },
      {
        no: '09',
        key: 'REFLECTION',
        title: '产品思考',
        body: [
          'AI 不是替代开发人员，而是帮助产品设计者更快验证想法、理解技术限制、降低沟通成本；',
          '作为 PM 需要把「体验古建筑修复」拆解为探索、修复、学习反馈等可执行需求，并能与开发沟通技术实现。',
        ],
      },
    ],
  },
  {
    id: 'book-system',
    no: '06',
    name: '图书管理系统',
    type: '全栈开发 · 课程实践',
    size: 'small',
    year: '2025',
    award: '网络程序设计课程设计 · 自评 96 分',
    roles: ['AI-assisted Development', 'Frontend / Backend'],
    desc: 'Spring Boot + MySQL + Vue 的前后端分离图书管理系统，理解完整开发链路。',
    cover: '/images/book-cover.jpg',
    thumb: '/images/book-cover.jpg',
    detail: [
      {
        no: '01',
        key: 'OVERVIEW',
        title: '项目简介',
        body: [
          '前后端分离的图书管理系统课程项目：Spring Boot + MySQL 后端、Vue 前端，实现登录注册、图书增删改查、借阅管理、个人借阅中心与路由权限控制。',
        ],
      },
      {
        no: '02',
        key: 'PROBLEM',
        title: '用户痛点',
        body: [
          '课程实践场景：理解前后端数据通信、数据库持久化与权限控制；',
          '验证从需求拆解到功能实现的完整开发流程。',
        ],
      },
      {
        no: '03',
        key: 'PRODUCT GOAL',
        title: '产品目标',
        body: ['打通前后端数据链路，完成账号验证、图书管理、借阅流程与权限控制等完整功能。'],
      },
      {
        no: '04',
        key: 'MY ROLE',
        title: '我的职责',
        body: ['全流程负责人', '负责需求拆解、数据库表设计、后端接口设计、前端页面开发、联调测试与文档撰写。'],
      },
      {
        no: '05',
        key: 'PRODUCT FLOW',
        title: '产品流程',
        flow: [
          ['登录 / 注册', '账号验证与用户注册'],
          ['图书管理', '列表、搜索、新增、编辑、下架'],
          ['借阅图书', '借阅专业教材'],
          ['个人借阅中心', '续借、归还、历史记录'],
          ['权限控制', '路由守卫保护后台页面'],
        ],
      },
      {
        no: '06',
        key: 'FEATURES',
        title: '核心功能',
        body: [
          '用户注册登录与 Token 校验；',
          '图书增删改查与搜索；',
          '借阅、续借、归还与历史记录；',
          '路由守卫权限控制。',
        ],
      },
      {
        no: '07',
        key: 'PROTOTYPE',
        title: '产品原型',
        images: ['/images/book-detail.jpg'],
        body: ['Vue + Element UI 页面原型；MySQL 用户、图书数据表设计。'],
      },
      {
        no: '08',
        key: 'OUTCOME',
        title: '项目成果',
        body: ['完成课程设计，自评 96 分；', '完整实践了前后端分离开发、AI 辅助编码与问题排查。'],
      },
      {
        no: '09',
        key: 'REFLECTION',
        title: '产品思考',
        body: [
          '部分借阅功能采用本地模拟数据，功能深度和工程化还有提升空间；',
          '这段经历让我理解 AI 辅助开发如何提升原型验证效率，也意识到 PM 理解技术边界的重要性。',
        ],
      },
    ],
  },
]

export const aiLab = [
  {
    no: '01',
    product: 'Codex',
    tag: 'AI Coding Agent · 产品体验分析',
    title: 'AI 编程工具的「最后一公里」',
    quote:
      '从不会使用现代前端工具，到通过 Codex 完成个人网站，观察 AI 编程工具在新手使用场景中的产品问题。',
    tags: ['Codex', '产品体验', '用户痛点'],
    sections: [
      {
        key: 'CONTEXT',
        title: '使用场景',
        body: '作为没有系统学习过现代前端工程流程的用户，我尝试使用 Codex 从零完成个人简历网站，包括项目创建、代码修改、运行项目和页面迭代。',
      },
      {
        key: 'OBSERVATION',
        title: '我的观察',
        body: 'AI 可以生成代码，但用户仍然需要知道「终端是什么、npm 是什么、localhost 是什么」，也需要理解改完代码为什么还要重新运行。',
      },
      {
        key: 'PROBLEM',
        title: '核心问题',
        body: 'AI 没有完全解决新手的任务上下文问题：用户不知道下一步该做什么，也不知道 AI 改了什么、会不会影响原有内容。',
      },
      {
        key: 'INSIGHT',
        title: '产品洞察',
        body: '对新手而言，AI 的价值不只是「写出代码」，而是降低每一步操作的成本，让任务真正可以完成。',
      },
      {
        key: 'PRODUCT IDEA',
        title: '产品想法',
        body: '增加「本次修改」摘要：列出修改了哪些文件、影响范围与风险等级，并提供查看与撤销入口。',
      },
    ],
  },
  {
    no: '02',
    product: 'Figma AI',
    tag: 'AI UI Generation',
    title: 'AI 生成 UI 为什么容易失去一致性？',
    quote: 'AI 可以快速生成单个页面，但多页面产品的设计系统和视觉一致性仍然需要约束。',
    tags: ['Figma AI', 'UI 生成', 'Design System'],
    sections: [
      {
        key: 'CONTEXT',
        title: '使用场景',
        body: '使用 AI 快速生成蹲票雷达演出信息智能助手的多个移动端页面。',
      },
      {
        key: 'OBSERVATION',
        title: '我的观察',
        body: '第一次生成首页一个风格，第二次创建任务页又是另一个风格，第三次 AI 解析页又变了：字体、卡片圆角、间距、按钮样式、蓝粉渐变的使用方式都不一致。',
      },
      {
        key: 'PROBLEM',
        title: '核心问题',
        body: 'AI 擅长生成单个页面，但多页面产品的一致性仍然需要设计系统约束。',
      },
      {
        key: 'INSIGHT',
        title: '产品洞察',
        body: '「生成得快」不等于「设计得好」；一致性需要从设计源头约束，而不是事后修补。',
      },
      {
        key: 'PRODUCT IDEA',
        title: '产品想法',
        body: '让 AI 在生成前先建立 Design System：定义颜色、圆角、字体、间距 tokens，所有页面基于同一套系统生成。',
      },
    ],
  },
  {
    no: '03',
    product: 'Gemini / ChatGPT',
    tag: 'AI Assistant',
    title: '「回答正确」不等于「解决问题」',
    quote: '从真实使用场景出发，观察 AI 如何从问答工具进一步成为任务助手。',
    tags: ['Gemini', 'ChatGPT', 'AI UX'],
    sections: [
      {
        key: 'CONTEXT',
        title: '使用场景',
        body: '使用 AI 做网站、写产品方案时，AI 一次性给出技术栈、文件结构、安装命令、代码和部署方法。',
      },
      {
        key: 'OBSERVATION',
        title: '我的观察',
        body: '信息太多反而不知道第一步该做什么——回答是「正确」的，但任务并没有完成。',
      },
      {
        key: 'PROBLEM',
        title: '核心问题',
        body: '当前 AI 产品主要优化「回答质量」，而不是「任务完成率」。',
      },
      {
        key: 'INSIGHT',
        title: '产品洞察',
        body: '对新手用户，AI 的价值不仅是提供答案，更是降低任务执行成本。',
      },
      {
        key: 'PRODUCT IDEA',
        title: '产品想法',
        body: '把「下面是完整教程」改成「我们一步一步来」：一次只做第一件事，完成后进入下一步，并提供「我完成了」入口。',
      },
    ],
  },
]

export const resume = {
  education: {
    school: '江汉大学',
    major: '数字媒体技术',
    period: '2023.09 — 2027.06',
    gpa: 'GPA 3.91 / 4.0',
    rank: 'Top 30%',
    courses:
      '交互设计 · 人工智能概论 · 网页程序设计 · 网站设计与开发 · 数据库技术 · 新媒体营销与运营',
  },
  projects: [
    { name: 'AI 拍照助手', role: 'AI 摄影同款拍摄微信小程序', period: '2026' },
    { name: '智旅', role: 'AI 个性化旅行规划 App', period: '2026' },
    { name: '蹲票雷达', role: 'AI 演出信息智能助手', period: '2025' },
    { name: '紫禁匠师 · 角楼营造', role: '故宫角楼 3D 文化体验游戏', period: '2026' },
    { name: '图书管理系统', role: '前后端分离 Web 课程实践', period: '2025' },
  ],
  skills: {
    product: ['User Research', 'Product Strategy', 'UX', 'Interaction'],
    ai: ['Generative AI', 'AI Product Design', 'AI-assisted Development'],
    tools: ['Figma', 'Axure', 'Python', 'Unity', 'VS Code'],
  },
  awards: [
    {
      name: '中国大学生计算机设计大赛',
      level: '省级一等奖',
      project: '脂艺阁 · AI 赋能非遗胭脂文化体验 App',
    },
    {
      name: '中国大学生计算机设计大赛',
      level: '省级二等奖',
      project: '紫禁匠师 · 故宫角楼文化体验 3D 游戏',
    },
    {
      name: '未来设计师 · 全国高校数字艺术设计大赛',
      level: '国家级二等奖',
      project: '故宫角楼文化主题视觉设计作品',
    },
  ],
  resumeFile: '/resume/limengting-resume.docx',
}

export const navItems = [
  { to: '/', label: '首页', name: 'home' },
  { to: '/about', label: '关于', name: 'about' },
  { to: '/projects', label: '项目', name: 'projects' },
  { to: '/ai-lab', label: 'AI 实验室', name: 'ai-lab' },
  { to: '/resume', label: '简历', name: 'resume' },
  { to: '/contact', label: '联系', name: 'contact' },
]
