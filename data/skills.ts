// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	{
		id: "astro",
		name: "Astro",
		description:
			"基于 Mizuki 主题完成个人博客的搭建、定制与部署，掌握内容集合、frontmatter schema 与静态构建流程；2026-11 完成横幅/头像视觉换新。",
		icon: "simple-icons:astro",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["mizuki-blog"],
		color: "#FF5D01",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"在 Astro 项目中编写组件与数据配置，熟悉类型接口定义（Project / Skill / TimelineItem）与构建期类型校验。",
		icon: "simple-icons:typescript",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["mizuki-blog", "mizuki-publisher"],
		color: "#3178C6",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"开发 mizuki-publisher MCP 服务器、img2webp 图片转换工具与每周随笔发布脚本，熟悉 ESM、zod 校验与 child_process。",
		icon: "simple-icons:nodedotjs",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["mizuki-publisher", "img2webp", "weekly-autopost"],
		color: "#339933",
	},
	{
		id: "mcp",
		name: "MCP 协议",
		description:
			"基于 @modelcontextprotocol/sdk 实现 stdio 型 MCP 服务器，接入 Hermes Agent，打通 AI 远程发帖链路。",
		icon: "material-symbols:extension",
		category: "other",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["mizuki-publisher", "ai-publish-chain"],
		color: "#8B5CF6",
	},
	{
		id: "git",
		name: "Git & GitHub",
		description:
			"掌握双仓库 + submodule 协作、SSH 通道配置、分支管理、commit 规范与镜像劫持等网络排障。",
		icon: "simple-icons:git",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["ai-publish-chain", "mizuki-blog"],
		color: "#F05032",
	},
	{
		id: "cloudflare",
		name: "Cloudflare Pages",
		description:
			"配置 Pages 项目（pnpm 构建、dist 输出、自定义域名），理解 webhook 自动构建与 submodule HTTPS/SSH 兼容问题。",
		icon: "simple-icons:cloudflare",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["mizuki-blog", "ai-publish-chain"],
		color: "#F38020",
	},
	{
		id: "ai-agent",
		name: "AI Agent 自动化",
		description:
			"与 DSH / Hermes Agent / OpenClaw 协作完成博客全生命周期管理：自动发帖、记忆维护、内容策略改造、周更流水线与排障手册沉淀。",
		icon: "material-symbols:robot-2",
		category: "other",
		level: "advanced",
		experience: { years: 0, months: 3 },
		projects: ["ai-blog-ops", "weekly-autopost"],
		color: "#7C3AED",
	},
	{
		id: "dsh",
		name: "DeepSeek Harness",
		description:
			"本地 AI 代理工作台（DSH）：通过工具调用、子代理与工作流自动化完成长期任务，本博客的周更写作、数据页巡检与双仓库发布都由它驱动。",
		icon: "material-symbols:robot-2",
		category: "other",
		level: "advanced",
		experience: { years: 0, months: 3 },
		projects: ["ai-blog-ops", "weekly-autopost"],
		color: "#4D6BFE",
	},
	{
		id: "scheduledtasks",
		name: "Windows 计划任务",
		description:
			"用 ScheduledTasks / PowerShell 做无人值守调度：每周三、周六定时执行发布脚本，日志落盘、失败可查、幂等可补跑。",
		icon: "material-symbols:schedule",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["weekly-autopost", "ai-blog-ops"],
		color: "#0EA5E9",
	},
	{
		id: "llm-content-ops",
		name: "LLM 内容运营",
		description:
			"用 DeepSeek API 把 RSS 科技资讯写成第一人称周记：选题、结构与口吻模板化，27 篇补写一次上线（含失败重试兜底）。",
		icon: "material-symbols:auto-awesome",
		category: "other",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["weekly-autopost"],
		color: "#10B981",
	},
	{
		id: "powershell",
		name: "PowerShell 脚本",
		description:
			"编写每日备份脚本（robocopy + 无 BOM UTF-8 写入）、git 批量操作、批量 frontmatter 改写与自动化运维命令。",
		icon: "simple-icons:powershell",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["ai-blog-ops"],
		color: "#5391FE",
	},
	{
		id: "webp",
		name: "WebP 图片处理",
		description:
			"基于 sharp / Pillow 批量压缩图片为 WebP（平均压缩 80%+），处理头像、壁纸、相册与横幅等全部站点图片资源。",
		icon: "material-symbols:image",
		category: "other",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["img2webp", "photo-album", "mizuki-blog"],
		color: "#D97757",
	},
];
