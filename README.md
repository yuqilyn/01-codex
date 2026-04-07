# Nan Yu 个人博客系统

基于 Next.js + Nextra 的个人博客与知识库项目，围绕 `Docs / Blog / Life / About` 四个主要内容区域组织。

## 特性

- 文档站结构，适合长期知识沉淀
- 博客与生活内容分区，便于表达不同类型的内容
- Markdown / MDX 驱动，便于维护
- 基础 SEO 与 sitemap 配置
- 响应式首页与阅读优先布局

## 本地启动

```bash
npm install
npm run dev
```

## 内容目录

- `pages/docs`: 知识库
- `pages/blog`: 技术文章与教程
- `pages/life`: 日记、碎片、思考
- `pages/about.mdx`: 关于页

## 部署建议

推荐直接部署到 Vercel，并在正式上线前将 [next-sitemap.config.js](/Users/yuthon/Desktop/github/website/01-codex/next-sitemap.config.js) 中的 `siteUrl` 替换为你的真实域名。
