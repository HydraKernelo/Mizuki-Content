---
title: "自动化部署测试文章"
published: 2026-08-19
description: "这是一篇由 Agent 自动写入、用来验证 Cloudflare Pages 自动部署链路的测试文章。"
tags: [Mizuki, 自动化, 测试]
category: 技术
draft: false
date: 2026-08-19
pinned: false
author: "HydraKernelo"
licenseName: "CC BY 4.0"
---

# 自动化部署测试文章 🚀

这篇文章的目标：**验证从内容仓库 push 到博客上线的全自动链路**。

## 测试内容

- 内容仓库新增一篇文章
- push 到 GitHub 触发 Cloudflare Pages 自动构建
- 几分钟内新文章出现在 `https://hydrakernel.qzz.io`

## 预期结果

- [ ] 文章出现在博客首页列表
- [ ] 文章页面可以正常访问
- [ ] 全程无需人工干预

> 如果能看到这篇文章，说明 **Agent + MCP + GitHub + Cloudflare 全链路已经打通** ✅

## 时间线记录

- 文章创建：通过 mizuki-publisher 的 frontmatter 规范生成
- 发布方式：直接写入内容仓库 posts/ 目录
- 触发方式：git push 到 GitHub → Cloudflare webhook 自动构建
