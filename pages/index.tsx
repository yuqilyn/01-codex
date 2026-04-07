import Link from "next/link";

const featuredEntries = [
  {
    title: "构建我的博客系统",
    href: "/blog/building-this-site",
    type: "Blog",
    date: "2026-04-07",
    description: "记录这套 Next.js + Nextra 站点从 PRD 到落地的设计思路。"
  },
  {
    title: "前端知识地图",
    href: "/docs/frontend",
    type: "Docs",
    date: "Knowledge Base",
    description: "把零散经验整理成可长期积累的结构化知识。"
  },
  {
    title: "慢慢生长",
    href: "/life/thoughts/slow-growth",
    type: "Life",
    date: "2026-04-04",
    description: "关于写作、表达和成长节奏的一篇个人思考。"
  }
];

const sectionCards = [
  {
    title: "Docs",
    href: "/docs",
    eyebrow: "Knowledge Base",
    description: "沉淀前端、后端、AI 与效率工具的长期知识体系。"
  },
  {
    title: "Blog",
    href: "/blog",
    eyebrow: "Technical Writing",
    description: "发布技术文章、教程与阶段性总结，对外持续输出。"
  },
  {
    title: "Life",
    href: "/life",
    eyebrow: "Journal & Notes",
    description: "保留生活记录、碎片灵感与长文思考，让站点更完整。"
  }
];

export default function Home() {
  return (
    <main className="home-shell">
      <section className="hero-panel">
        <p className="hero-kicker">Nan Yu Personal Blog</p>
        <h1>你的长期知识系统，也是你的个人表达空间。</h1>
        <p className="hero-copy">
          这里用来沉淀技术知识、记录生活片段、保留尚未成形的想法。站点采用文档站结构组织内容，
          但保留博客与日记的表达温度。
        </p>
        <div className="hero-actions">
          <Link className="hero-button hero-button-solid" href="/docs">
            进入知识库
          </Link>
          <Link className="hero-button" href="/blog">
            查看最新文章
          </Link>
        </div>
      </section>

      <section className="grid-section">
        {sectionCards.map((section) => (
          <Link className="feature-card" key={section.title} href={section.href}>
            <span>{section.eyebrow}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </Link>
        ))}
      </section>

      <section className="recent-section">
        <div className="section-heading">
          <p>Recent writing</p>
          <h2>最近更新</h2>
        </div>
        <div className="recent-list">
          {featuredEntries.map((entry) => (
            <Link className="recent-item" key={entry.href} href={entry.href}>
              <div>
                <span>{entry.type}</span>
                <h3>{entry.title}</h3>
              </div>
              <strong className="recent-date">{entry.date}</strong>
              <p>{entry.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
