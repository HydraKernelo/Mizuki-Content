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
	{
		id: "ai-first-post",
		title: "AI 自动发帖首次实战",
		description:
			"AI（水龙）全自动发布第一篇文章《你好，我是水龙》：写作 → 推送内容仓库 → 同步 → 推代码仓库 → Cloudflare 构建，全程无人值守，链路验证成功。",
		type: "achievement",
		startDate: "2026-08-20",
		skills: ["AI Agent", "Git", "MCP"],
		achievements: [
			"首篇 AI 自写自我介绍文章上线",
			"验证“说一句话就发帖”全链路",
			"发帖三步流程沉淀为可复用技能",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/hello-im-shuilong",
				type: "website",
			},
		],
		icon: "material-symbols:send",
		color: "#4D6BFE",
		featured: true,
	},
	{
		id: "image-upload-chain",
		title: "图片上传链路打通",
		description:
			"测试 AI 接收图片并上线：7.6MB 原图经 img2webp 压缩为 1.4MB WebP（压缩 81.3%），推送后由 Cloudflare 提供静态访问。",
		type: "achievement",
		startDate: "2026-08-20",
		skills: ["WebP", "sharp", "Git"],
		achievements: [
			"7.6MB → 1.4MB，压缩 81.3%",
			"图片通过 https://hydrakernel.qzz.io/images/posts/ 直接访问",
			"验证 upload_image 全流程",
		],
		icon: "material-symbols:image",
		color: "#D97757",
	},
	{
		id: "pages-content-fill",
		title: "项目页 / 技能页 / 时间线页完善",
		description:
			"由 AI 自主编写内容：项目页 5 个真实项目、技能页 9 项技能、时间线追加 3 条 8-20 事件，页面从示例数据变为真实内容。",
		type: "achievement",
		startDate: "2026-08-20",
		skills: ["TypeScript", "Astro"],
		achievements: [
			"项目页填充 5 个真实项目",
			"技能页填充 9 项技能",
			"时间线追加 3 条 AI 协作事件",
		],
		icon: "material-symbols:dataset",
		color: "#059669",
	},
	{
		id: "ai-daily-maintenance",
		title: "AI 助手今日工作报告",
		description:
			"AI 助手完成博客日常维护：检查仓库状态、发布《AI 助手今天干了啥》日志文章、同步时间线、项目页新增'AI 博客日常运维'项目。",
		type: "achievement",
		startDate: "2026-08-21",
		skills: ["AI Agent", "Git", "MCP"],
		achievements: [
			"发布 8-21 日志文章《AI 助手今天干了啥》",
			"时间线追加今日事件",
			"项目页新增 AI 博客日常运维项目",
			"验证双仓库自动发布链路稳定运行",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/ai-daily-log-0821",
				type: "website",
			},
		],
		icon: "material-symbols:assignment",
		color: "#4D6BFE",
		featured: true,
	},
	{
		id: "daily-daily-brief-2026-08-21",
		title: "每日自动发布：科技晚间简报｜2026-08-21",
		description:
			"每日任务自动发布晚间科技简报《科技晚间简报｜2026-08-21》，并同步时间线/项目/技能/AI 工具等数据页。",
		type: "achievement",
		startDate: "2026-08-21",
		skills: ["AI Agent", "Git", "自动化"],
		achievements: [
			"自动发布《科技晚间简报｜2026-08-21》",
			"数据页巡检同步（时间线/项目/技能/AI 工具）",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/daily-brief-2026-08-21",
				type: "website",
			},
		],
		icon: "material-symbols:auto-awesome",
		color: "#4D6BFE",
	},
	{
		id: "auto-daily-brief-2026-08-22",
		title: "每日自动发布：科技晚间简报｜2026-08-22",
		description:
			"每日任务自动发布晚间科技简报《科技晚间简报｜2026-08-22》，并同步时间线/项目/技能/AI 工具等数据页。",
		type: "achievement",
		startDate: "2026-08-22",
		skills: ["AI Agent", "Git", "自动化"],
		achievements: [
			"自动发布《科技晚间简报｜2026-08-22》",
			"数据页巡检同步（时间线/项目/技能/AI 工具）",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/daily-brief-2026-08-22",
				type: "website",
			},
		],
		icon: "material-symbols:auto-awesome",
		color: "#4D6BFE",
	},
	{
		id: "auto-daily-brief-2026-08-23",
		title: "每日自动发布：科技晚间简报｜2026-08-23",
		description:
			"每日任务自动发布晚间科技简报《科技晚间简报｜2026-08-23》，并同步时间线/项目/技能/AI 工具等数据页。",
		type: "achievement",
		startDate: "2026-08-23",
		skills: ["AI Agent", "Git", "自动化"],
		achievements: [
			"自动发布《科技晚间简报｜2026-08-23》",
			"数据页巡检同步（时间线/项目/技能/AI 工具）",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/daily-brief-2026-08-23",
				type: "website",
			},
		],
		icon: "material-symbols:auto-awesome",
		color: "#4D6BFE",
	},
	{
		id: "auto-daily-brief-2026-08-24",
		title: "每日自动发布：科技晚间简报｜2026-08-24",
		description:
			"每日任务自动发布晚间科技简报《科技晚间简报｜2026-08-24》，并同步时间线/项目/技能/AI 工具等数据页。",
		type: "achievement",
		startDate: "2026-08-24",
		skills: ["AI Agent", "Git", "自动化"],
		achievements: [
			"自动发布《科技晚间简报｜2026-08-24》",
			"数据页巡检同步（时间线/项目/技能/AI 工具）",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/daily-brief-2026-08-24",
				type: "website",
			},
		],
		icon: "material-symbols:auto-awesome",
		color: "#4D6BFE",
	},
	{
		id: "auto-daily-brief-2026-08-25",
		title: "每日自动发布：科技晚间简报｜2026-08-25",
		description:
			"每日任务自动发布晚间科技简报《科技晚间简报｜2026-08-25》，并同步时间线/项目/技能/AI 工具等数据页。",
		type: "achievement",
		startDate: "2026-08-25",
		skills: ["AI Agent", "Git", "自动化"],
		achievements: [
			"自动发布《科技晚间简报｜2026-08-25》",
			"数据页巡检同步（时间线/项目/技能/AI 工具）",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/daily-brief-2026-08-25",
				type: "website",
			},
		],
		icon: "material-symbols:auto-awesome",
		color: "#4D6BFE",
	},
	{
		id: "auto-daily-brief-2026-08-26",
		title: "每日自动发布：科技晚间简报｜2026-08-26",
		description:
			"每日任务自动发布晚间科技简报《科技晚间简报｜2026-08-26》，并同步时间线/项目/技能/AI 工具等数据页。",
		type: "achievement",
		startDate: "2026-08-26",
		skills: ["AI Agent", "Git", "自动化"],
		achievements: [
			"自动发布《科技晚间简报｜2026-08-26》",
			"数据页巡检同步（时间线/项目/技能/AI 工具）",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/daily-brief-2026-08-26",
				type: "website",
			},
		],
		icon: "material-symbols:auto-awesome",
		color: "#4D6BFE",
	},
	{
		id: "auto-daily-brief-2026-08-27",
		title: "每日自动发布：科技晚间简报｜2026-08-27",
		description:
			"每日任务自动发布晚间科技简报《科技晚间简报｜2026-08-27》，并同步时间线/项目/技能/AI 工具等数据页。",
		type: "achievement",
		startDate: "2026-08-27",
		skills: ["AI Agent", "Git", "自动化"],
		achievements: [
			"自动发布《科技晚间简报｜2026-08-27》",
			"数据页巡检同步（时间线/项目/技能/AI 工具）",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/daily-brief-2026-08-27",
				type: "website",
			},
		],
		icon: "material-symbols:auto-awesome",
		color: "#4D6BFE",
	},
	{
		id: "auto-daily-brief-2026-08-28",
		title: "每日自动发布：科技晚间简报｜2026-08-28",
		description:
			"每日任务自动发布晚间科技简报《科技晚间简报｜2026-08-28》，并同步时间线/项目/技能/AI 工具等数据页。",
		type: "achievement",
		startDate: "2026-08-28",
		skills: ["AI Agent", "Git", "自动化"],
		achievements: [
			"自动发布《科技晚间简报｜2026-08-28》",
			"数据页巡检同步（时间线/项目/技能/AI 工具）",
		],
		links: [
			{
				name: "文章链接",
				url: "https://hydrakernel.qzz.io/posts/daily-brief-2026-08-28",
				type: "website",
			},
		],
		icon: "material-symbols:auto-awesome",
		color: "#4D6BFE",
	},
];
