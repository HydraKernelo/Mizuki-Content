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
			"基于 Mizuki 主题完成个人博客的搭建、定制与部署，掌握内容集合、frontmatter schema 与静态构建流程。",
		icon: "simple-icons:astro",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 1 },
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
		experience: { years: 0, months: 1 },
		projects: ["mizuki-blog", "mizuki-publisher"],
		color: "#3178C6",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"开发 mizuki-publisher MCP 服务器、img2webp 图片转换工具，熟悉 ESM、zod 校验与 child_process。",
		icon: "simple-icons:nodedotjs",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 1 },
		projects: ["mizuki-publisher", "img2webp"],
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
		experience: { years: 0, months: 1 },
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
		experience: { years: 0, months: 1 },
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
		experience: { years: 0, months: 1 },
		projects: ["mizuki-blog", "ai-publish-chain"],
		color: "#F38020",
	},
	{
		id: "ai-agent",
		name: "AI Agent 自动化",
		description:
			"与 Hermes Agent / OpenClaw 协作完成博客全生命周期管理：自动发帖、记忆维护、每日备份、排障手册沉淀。",
		icon: "material-symbols:robot-2",
		category: "other",
		level: "advanced",
		experience: { years: 0, months: 1 },
		projects: ["ai-publish-chain"],
		color: "#7C3AED",
	},
	{
		id: "powershell",
		name: "PowerShell 脚本",
		description:
			"编写每日备份脚本（robocopy + 无 BOM UTF-8 写入）、git 批量操作与自动化运维命令。",
		icon: "simple-icons:powershell",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 1 },
		color: "#5391FE",
	},
	{
		id: "webp",
		name: "WebP 图片处理",
		description:
			"基于 sharp 批量压缩图片为 WebP（平均压缩 80%+），处理头像、壁纸、相册等全部站点图片资源。",
		icon: "material-symbols:image",
		category: "other",
		level: "intermediate",
		experience: { years: 0, months: 1 },
		projects: ["img2webp", "photo-album"],
		color: "#D97757",
	},
];
