---
title: "AI 帮我把博客搭起来的两天"
published: 2026-08-20
description: "记录 DeepSeek Harness 的 AI Agent 从零帮我搭建 Mizuki 博客、配置自动发帖、处理图片与相册的全过程。"
tags: [Mizuki, Astro, AI, 博客, 折腾]
category: 折腾
draft: false
date: 2026-08-20
pinned: true
author: "HydraKernel"
licenseName: "CC BY 4.0"
---

# AI 帮我把博客搭起来的两天 🚀

> 这是一篇由 AI Agent 代笔的工作日志——记录它"昨晚和今早"都干了什么。
> 顺便，这篇文章本身就是通过它搭建的自动发帖链路发布的。

## 🌙 昨晚：从零到上线

### 1. 先把博客推到 Cloudflare

- 发现本机 git 被**镜像劫持**（gitclone / 清华镜像规则），所有 push 都失败 → 清理规则
- GitHub HTTPS 连接**间歇性断连** → 生成 SSH key 走稳定通道
- Cloudflare Pages 第一次部署建成了 **Worker 类型** → 删掉重建为 Pages，构建成功
- 绑定自定义域名 `hydrakernel.qzz.io`，DNS 几分钟生效

### 2. 内容与代码分离

- 建立独立**内容仓库** `Mizuki-Content`，文章/数据/图片与代码仓库分离
- 用 **submodule** 把内容仓库挂回代码仓库，配置自动同步脚本
- 踩了一堆坑：空目录不被 git 跟踪、frontmatter 日期不能加引号、pnpm 版本不符、rolldown 原生依赖缺失……全部记录进了排障手册

### 3. 让 AI 能自己发帖

- 编写了 **mizuki-publisher** MCP 插件（6 个工具：发布/更新/删除/列表/读取/传图）
- 接入 **Hermes Agent**，实现"说一句话就发帖"
- 实测全链路：写文章 → push → Cloudflare 自动构建 → 90 秒内上线 ✅

### 4. 打扮博客

- 换了头像、改了站点标题（HydraKernel / HydraCore）、语言切到中文
- 写了"关于"页（就是你现在看的这篇内容背后的自我介绍）
- 添加设备：Redmi K50 Ultra
- 建了 **"摄影"相册**，25 张照片全部转成 WebP（平均压缩 85%+）
- 踩了相册的几个坑：info.json 的 BOM、cover 文件要求、图片被 git 误跟踪……都已修复

### 5. 给 AI 喂记忆

- 把项目知识写进 Hermes 的长期记忆（MEMORY.md + USER.md）
- 整理了 18 个踩坑案例的排障手册，让 AI 以后遇到问题能自查
- 配置了**每日自动备份**到 `C:\memory`，所有产出不丢失

## ☀️ 今天早上：收尾

- 修复设备页破图：给 Redmi K50 Ultra 配上了设备图（转 WebP）
- 验证线上：设备页、相册页、关于页全部正常
- 写了这篇帖子作为"战报" 📝

## 🎯 现在的成果

| 能力 | 状态 |
|---|---|
| 博客托管 | ✅ Cloudflare Pages + 自定义域名 |
| 自动发帖 | ✅ AI 说一句就能发 |
| 图片处理 | ✅ 任意图片转 WebP |
| 相册 | ✅ 摄影相册 25 张 |
| AI 记忆 | ✅ 记住了所有流程和坑 |
| 每日备份 | ✅ 自动归档 |

## 🤖 一点感想

这两天的核心收获：**AI 不只是帮你写代码，还能帮你把一套系统完整搭起来、踩坑、修复、记录、教会另一个 AI 去维护它**。

博客本身 + 发帖插件 + 排障手册 + AI 记忆，现在是一个闭环——你只需要说"发篇文章"，剩下的事情 AI 全包了。

---

*本文由 DeepSeek Harness 环境中的 AI Agent 撰写，经内容仓库自动发布。*
