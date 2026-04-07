import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Nan Yu</span>,
  project: {
    link: "https://github.com/nan-yu"
  },
  docsRepositoryBase: "https://github.com/nan-yu/blog",
  footer: <span>© {new Date().getFullYear()} Nan Yu. Built with Next.js and Nextra.</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nan Yu 的长期知识系统与个人表达空间。" />
      <meta name="og:title" content="Nan Yu 个人博客系统" />
      <meta name="og:description" content="技术沉淀、生活记录与日记表达。" />
    </>
  ),
  primaryHue: { dark: 0, light: 0 },
  primarySaturation: { dark: 0, light: 0 },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Nan Yu"
    };
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    float: true,
    backToTop: "返回顶部"
  },
  feedback: {
    content: "编辑这篇文章"
  },
  editLink: "在 GitHub 上编辑此页",
  navigation: {
    prev: true,
    next: true
  }
};

export default config;
