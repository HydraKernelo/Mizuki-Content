// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "mizuki-blog",
		title: "HydraKernel 个人博客",
		description:
			"基于 Astro 框架的 Mizuki 主题个人博客，部署于 Cloudflare Pages，绑定自定义域名。支持壁纸轮播、相册、AI 工具页、时间线等丰富功能。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte", "Cloudflare Pages"],
		status: "completed",
		liveDemo: "https://hydrakernel.qzz.io",
		sourceCode: "https://github.com/HydraKernelo/Mizuki",
		visitUrl: "https://hydrakernel.qzz.io",
		startDate: "2026-08-17",
		endDate: "2026-08-20",
		featured: true,
		tags: ["博客", "Cloudflare", "Astro"],
		showImage: false,
	},
	{
		id: "ai-publish-chain",
		title: "AI 自动发帖系统",
		description:
			"内容与代码仓库分离的双仓库架构：AI 写文章 → push 内容仓库 → sync-content 同步 → 推代码仓库 → Cloudflare 自动构建。实现“说一句话，AI 帮你发帖”的无人值守链路。",
		image: "",
		category: "web",
		techStack: ["Git Submodule", "GitHub", "Cloudflare Pages", "CI/CD"],
		status: "completed",
		sourceCode: "https://github.com/HydraKernelo/Mizuki-Content",
		startDate: "2026-08-17",
		endDate: "2026-08-18",
		featured: true,
		tags: ["自动化", "DevOps", "双仓库"],
		showImage: false,
	},
	{
		id: "mizuki-publisher",
		title: "mizuki-publisher MCP 插件",
		description:
			"基于 MCP 协议开发的 Node.js 发帖插件，提供 publish_post / update_post / delete_post / list_posts / get_post / upload_image 共 6 个工具，自动生成符合官方规范的 frontmatter 并推送 GitHub，27/27 冒烟测试通过。",
		image: "",
		category: "other",
		techStack: ["Node.js", "MCP", "Zod", "Git"],
		status: "completed",
		startDate: "2026-08-18",
		endDate: "2026-08-18",
		featured: true,
		tags: ["MCP", "AI Agent", "Node.js"],
		showImage: false,
	},
	{
		id: "img2webp",
		title: "img2webp 图片转换工具",
		description:
			"基于 sharp 的批量图片转 WebP 工具，支持文件/目录递归转换、自定义质量，平均压缩 80%+。博客全部图片（头像、壁纸、相册 25 张照片）均由它处理。",
		image: "",
		category: "other",
		techStack: ["Node.js", "sharp", "WebP"],
		status: "completed",
		startDate: "2026-08-19",
		endDate: "2026-08-19",
		tags: ["工具", "图片处理", "WebP"],
		showImage: false,
	},
	{
		id: "photo-album",
		title: "摄影相册",
		description:
			"博客相册功能，收录 25 张摄影作品，全部转为 WebP 格式（平均压缩 85%+）并上线。包含本地相册结构、封面机制与扫描器排障经验。",
		image: "",
		category: "web",
		techStack: ["WebP", "TypeScript", "Git"],
		status: "completed",
		startDate: "2026-08-19",
		endDate: "2026-08-19",
		tags: ["摄影", "相册", "WebP"],
		showImage: false,
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
