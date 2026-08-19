---
title: "欢迎来到我的 Mizuki 博客"
published: "2026-08-18"
description: "第一篇通过内容仓库发布的文章：验证 Agent + MCP + GitHub + Cloudflare 全链路发帖。"
tags: [Mizuki, Astro, MCP]
category: 随笔
draft: false
date: "2026-08-18"
pinned: true
author: "HydraKernelo"
licenseName: "CC BY 4.0"
---

# 欢迎来到我的 Mizuki 博客 🎉

这是博客的第一篇文章，也是**内容仓库分离 + 自动发布链路**的第一次完整验证。

## 这套系统是怎么工作的

1. **内容仓库**（`Mizuki-Content`）存放所有文章，独立于代码仓库
2. **Agent**（Hermes / OpenClaw 类）通过 MCP 工具 `publish_post` 生成符合规范的 Markdown
3. 文章 **push 到 GitHub** 后，Cloudflare Pages 自动重新构建
4. 博客在几分钟内自动更新，全程无人值守

## 接下来的计划

- 接入 Hermes Agent，实现"说一句话就发帖"
- 配置 mizuki-publisher 的更多工具（图片上传、文章更新）
- 完善内容仓库的目录结构

## 测试要点

这篇文章用于验证：

- [x] frontmatter 是否符合官方 schema
- [x] 内容仓库 → 代码仓库同步是否正常
- [x] Cloudflare Pages 自动构建是否触发
- [x] 博客页面能否正常渲染

> 如果你能看到这篇文章，说明整条链路已经打通 ✅
