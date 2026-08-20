import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "blog-start",
		title: "搭建 Mizuki 个人博客",
		description:
			"选用 LyraVoid/Mizuki（Astro 框架）主题，在 Cloudflare Pages 上部署个人博客，并绑定自定义域名。",
		type: "project",
		startDate: "2026-08-17",
		endDate: "2026-08-17",
		skills: ["Astro", "Cloudflare Pages", "Git"],
		achievements: [
			"完成 GitHub 仓库 + Cloudflare Pages 自动构建部署",
			"绑定自定义域名 hydrakernel.qzz.io",
			"解决 git 镜像劫持与 HTTPS 断连问题，改用 SSH 稳定通道",
		],
		links: [
			{
				name: "博客主页",
				url: "https://hydrakernel.qzz.io",
				type: "website",
			},
			{
				name: "代码仓库",
				url: "https://github.com/HydraKernelo/Mizuki",
				type: "project",
			},
		],
		icon: "material-symbols:web",
		color: "#4D6BFE",
		featured: true,
	},
	{
		id: "content-separation",
		title: "内容与代码仓库分离",
		description:
			"建立独立内容仓库 Mizuki-Content，通过 submodule 与同步脚本实现文章、数据、图片与代码分离管理。",
		type: "project",
		startDate: "2026-08-17",
		endDate: "2026-08-18",
		skills: ["Git Submodule", "CI/CD"],
		achievements: [
			"内容仓库独立托管 posts/spec/data/images",
			"配置 sync-content 自动同步与 Cloudflare 自动构建",
			"解决 submodule 在云端构建时的 HTTPS/SSH 兼容问题",
		],
		links: [
			{
				name: "内容仓库",
				url: "https://github.com/HydraKernelo/Mizuki-Content",
				type: "project",
			},
		],
		icon: "material-symbols:folder-shared",
		color: "#059669",
	},
	{
		id: "mcp-publisher",
		title: "开发 mizuki-publisher MCP 发帖插件",
		description:
			"基于 MCP 协议开发 Node.js 发帖插件，让 AI Agent 能自动生成符合规范的 Markdown 文章并发布到博客。",
		type: "project",
		startDate: "2026-08-18",
		endDate: "2026-08-18",
		skills: ["MCP", "Node.js", "Git"],
		achievements: [
			"实现 publish_post 等 6 个 MCP 工具",
			"27/27 冒烟测试全部通过",
			"接入 Hermes Agent，实现'说一句话就发帖'",
		],
		icon: "material-symbols:extension",
		color: "#8B5CF6",
	},
	{
		id: "blog-customize",
		title: "博客个性化定制",
		description:
			"更换头像、壁纸、站点标题，配置 Giscus 评论系统，搭建摄影相册，完善关于页与设备页。",
		type: "achievement",
		startDate: "2026-08-19",
		endDate: "2026-08-20",
		skills: ["TypeScript", "WebP", "Git"],
		achievements: [
			"配置 Giscus 评论系统（GitHub Discussions）",
			"摄影相册上线 25 张照片",
			"开发 img2webp 图片转换工具",
			"全部踩坑记录进排障手册",
		],
		icon: "material-symbols:palette",
		color: "#D97757",
	},
	{
		id: "ai-memory",
		title: "为 AI Agent 建立长期记忆",
		description:
			"把项目知识、排障经验写入 Hermes 的 MEMORY.md / USER.md，配置每日自动备份，让 AI 能持续维护博客。",
		type: "achievement",
		startDate: "2026-08-20",
		skills: ["AI Agent", "Automation"],
		achievements: [
			"18 个踩坑案例整理成排障手册",
			"配置每日备份到 C:\\memory",
			"AI 可独立完成博客日常维护",
		],
		icon: "material-symbols:memory",
		color: "#7C3AED",
	},
];
