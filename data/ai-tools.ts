export type AIToolCategory =
	| "chat"
	| "coding"
	| "image"
	| "audio"
	| "video"
	| "writing"
	| "search"
	| "other";

export type AIToolFrequency =
	| "daily"
	| "weekly"
	| "occasional"
	| "experimental";

export type LocaleString = Partial<
	Record<"en" | "zh_CN" | "zh_TW" | "ja", string>
>;

export function getLocaleString(value: LocaleString, lang: string): string {
	return value[lang as keyof LocaleString] ?? value["en"] ?? "";
}

export interface AITool {
	id: string;
	name: string;
	description: LocaleString;
	icon: string;
	category: AIToolCategory;
	frequency: AIToolFrequency;
	url?: string;
	usage?: LocaleString;
	tags?: string[];
	color?: string;
}

// 我使用的 AI 工具
export const aiToolsData: AITool[] = [
	{
		id: "dsh",
		name: "DeepSeek Harness (DSH)",
		description: {
			en: "A local AI agent harness that automates long-running tasks with tools, subagents, and workflows.",
			zh_CN: "本地 AI 代理工作台，通过工具、子代理和工作流自动化完成长期任务——本博客的写作、巡检与发布都由它驱动。",
		},
		icon: "material-symbols:robot-2",
		category: "other",
		frequency: "daily",
		url: "https://github.com/deepseek-ai/dsh",
		usage: {
			en: "Weekly posts automation, data-page maintenance, dual-repo publishing",
			zh_CN: "周更随笔自动发布、数据页巡检、双仓库发布",
		},
		tags: ["Agent", "Automation"],
		color: "#4D6BFE",
	},
	{
		id: "deepseek-api",
		name: "DeepSeek API",
		description: {
			en: "DeepSeek's hosted model API used programmatically by the publishing scripts.",
			zh_CN: "DeepSeek 的云端模型 API，被发布脚本直接调用。",
		},
		icon: "material-symbols:api",
		category: "other",
		frequency: "daily",
		url: "https://platform.deepseek.com",
		usage: {
			en: "LLM writing for weekly posts (deepseek-v4-flash)",
			zh_CN: "周更随笔的自动写作（deepseek-v4-flash）",
		},
		tags: ["API", "LLM"],
		color: "#4D6BFE",
	},
	{
		id: "deepseek",
		name: "DeepSeek",
		description: {
			en: "DeepSeek's open-weight language models for chat, reasoning, and coding.",
			zh_CN: "DeepSeek 开源权重语言模型，用于对话、推理与编程。",
		},
		icon: "material-symbols:data-object",
		category: "chat",
		frequency: "daily",
		url: "https://chat.deepseek.com",
		usage: {
			en: "Daily chat, reasoning, coding assistance",
			zh_CN: "日常对话、推理、编程辅助",
		},
		tags: ["Chat", "LLM"],
		color: "#4D6BFE",
	},
	{
		id: "codex",
		name: "Codex",
		description: {
			en: "OpenAI's coding agent that works alongside you to write, debug, and ship code.",
			zh_CN: "OpenAI 的编程代理，帮你写代码、调试并交付项目。",
		},
		icon: "material-symbols:terminal",
		category: "coding",
		frequency: "weekly",
		url: "https://openai.com/codex",
		usage: {
			en: "Coding tasks, debugging, code review",
			zh_CN: "写代码、调试、代码审查",
		},
		tags: ["Coding", "Agent"],
		color: "#10A37F",
	},
	{
		id: "openclaw",
		name: "OpenClaw",
		description: {
			en: "An open-source personal AI assistant that connects to your accounts, devices, and workflows.",
			zh_CN: "开源个人 AI 助手，连接你的账号、设备与工作流（已装 CLI，用于 MCP 集成对比）。",
		},
		icon: "material-symbols:smart-toy",
		category: "chat",
		frequency: "occasional",
		url: "https://github.com/openclaw/openclaw",
		usage: {
			en: "Personal assistant, MCP integration experiments",
			zh_CN: "个人助理、MCP 集成实验",
		},
		tags: ["Agent", "Assistant"],
		color: "#C97758",
	},
	{
		id: "hermes",
		name: "Hermes Agent",
		description: {
			en: "A self-hosted AI agent (Chinese community edition) with memory, skills, and MCP support for remote publishing.",
			zh_CN: "自托管 AI 代理（中文社区版），支持记忆、技能与 MCP，可远程发布内容。",
		},
		icon: "material-symbols:chat-bubble",
		category: "chat",
		frequency: "daily",
		url: "https://hermesagent.org.cn",
		usage: {
			en: "Memory maintenance, blog publishing via MCP",
			zh_CN: "记忆维护（USER.md）、通过 MCP 发布博客",
		},
		tags: ["Agent", "MCP"],
		color: "#8B5CF6",
	},
	{
		id: "claude",
		name: "Claude",
		description: {
			en: "Anthropic's AI assistant for analysis, writing, and coding.",
			zh_CN: "Anthropic 的 AI 助手，擅长分析、写作与编程。",
		},
		icon: "material-symbols:psychology",
		category: "chat",
		frequency: "weekly",
		url: "https://claude.ai",
		usage: {
			en: "Deep analysis, long-form writing, complex coding",
			zh_CN: "深度分析、长文写作、复杂编程",
		},
		tags: ["Chat", "Writing"],
		color: "#D97757",
	},
	{
		id: "cursor",
		name: "Cursor",
		description: {
			en: "An AI-first code editor with inline chat and agentic coding.",
			zh_CN: "AI 优先的代码编辑器，支持内联对话与代理式编程。",
		},
		icon: "material-symbols:edit",
		category: "coding",
		frequency: "occasional",
		url: "https://cursor.com",
		usage: {
			en: "AI-assisted coding in the editor",
			zh_CN: "编辑器内 AI 辅助编程",
		},
		tags: ["Coding", "Editor"],
		color: "#000000",
	},
	{
		id: "copilot",
		name: "GitHub Copilot",
		description: {
			en: "GitHub's AI pair programmer for code completion and chat.",
			zh_CN: "GitHub 的 AI 结对程序员，提供代码补全与对话。",
		},
		icon: "material-symbols:code",
		category: "coding",
		frequency: "occasional",
		url: "https://github.com/features/copilot",
		usage: {
			en: "Code completion, inline chat",
			zh_CN: "代码补全、内联对话",
		},
		tags: ["Coding"],
		color: "#8957E5",
	},
];
