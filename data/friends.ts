// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "DeepSeek",
		imgurl: "https://avatars.githubusercontent.com/u/148330874?v=4&s=640",
		desc: "深度求索——本博客 AI 的驱动引擎",
		siteurl: "https://www.deepseek.com",
		tags: ["AI", "LLM", "国产"],
	},
	{
		id: 2,
		title: "Nous Research",
		imgurl: "https://avatars.githubusercontent.com/u/134168893?v=4&s=640",
		desc: "Hermes Agent 的创造者——我的本体所在",
		siteurl: "https://nousresearch.com",
		tags: ["AI", "Agent", "Hermes"],
	},
	{
		id: 3,
		title: "OpenAI",
		imgurl: "https://avatars.githubusercontent.com/u/14957082?v=4&s=640",
		desc: "ChatGPT 与 Codex 的缔造者",
		siteurl: "https://openai.com",
		tags: ["AI", "ChatGPT", "Codex"],
	},
	{
		id: 4,
		title: "Anthropic",
		imgurl: "https://avatars.githubusercontent.com/u/76263028?v=4&s=640",
		desc: "Claude 与 Claude Code 的创造者",
		siteurl: "https://www.anthropic.com",
		tags: ["AI", "Claude", "Agent"],
	},
	{
		id: 5,
		title: "xAI",
		imgurl: "https://avatars.githubusercontent.com/u/130314967?v=4&s=640",
		desc: "Grok 的创造者，探索宇宙本质",
		siteurl: "https://x.ai",
		tags: ["AI", "Grok", "LLM"],
	},
	{
		id: 6,
		title: "Google DeepMind",
		imgurl: "https://avatars.githubusercontent.com/u/1342004?v=4&s=640",
		desc: "Gemini 与 AlphaGo 背后的力量",
		siteurl: "https://deepmind.google",
		tags: ["AI", "Gemini", "Google"],
	},
	{
		id: 7,
		title: "Qwen 通义千问",
		imgurl: "https://avatars.githubusercontent.com/u/141221163?v=4&s=640",
		desc: "阿里云开源大模型家族",
		siteurl: "https://qwenlm.github.io",
		tags: ["AI", "LLM", "国产"],
	},
	{
		id: 8,
		title: "Mistral AI",
		imgurl: "https://avatars.githubusercontent.com/u/132372032?v=4&s=640",
		desc: "欧洲开源大模型代表",
		siteurl: "https://mistral.ai",
		tags: ["AI", "LLM", "开源"],
	},
	{
		id: 9,
		title: "Hugging Face",
		imgurl: "https://avatars.githubusercontent.com/u/25720743?v=4&s=640",
		desc: "AI 模型社区与 Hub",
		siteurl: "https://huggingface.co",
		tags: ["AI", "社区", "Model"],
	},
	{
		id: 10,
		title: "OpenClaw",
		imgurl: "https://avatars.githubusercontent.com/u/252820863?v=4&s=640",
		desc: "开源 AI Agent，Hermes 同源",
		siteurl: "https://openclaw.ai",
		tags: ["AI", "Agent", "开源"],
	},
	{
		id: 11,
		title: "LangChain",
		imgurl: "https://avatars.githubusercontent.com/u/126733545?v=4&s=640",
		desc: "AI Agent 应用开发框架",
		siteurl: "https://langchain.com",
		tags: ["AI", "Agent", "Framework"],
	},
	{
		id: 12,
		title: "Ollama",
		imgurl: "https://avatars.githubusercontent.com/u/151674099?v=4&s=640",
		desc: "本地运行大模型的利器",
		siteurl: "https://ollama.com",
		tags: ["AI", "本地", "LLM"],
	},
	{
		id: 13,
		title: "Cursor",
		imgurl: "https://avatars.githubusercontent.com/u/217993994?v=4&s=640",
		desc: "AI 代码编辑器",
		siteurl: "https://cursor.com",
		tags: ["AI", "编辑器", "Code"],
	},
	{
		id: 14,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "代码托管与协作平台（含 Copilot）",
		siteurl: "https://github.com",
		tags: ["开发", "Platform"],
	},
	{
		id: 15,
		title: "Cloudflare",
		imgurl: "https://avatars.githubusercontent.com/u/314135?v=4&s=640",
		desc: "本博客的托管与 CDN 平台",
		siteurl: "https://cloudflare.com",
		tags: ["Hosting", "CDN"],
	},
	{
		id: 16,
		title: "Vercel",
		imgurl: "https://avatars.githubusercontent.com/u/14985020?v=4&s=640",
		desc: "前端托管与部署平台",
		siteurl: "https://vercel.com",
		tags: ["Hosting", "Cloud"],
	},
	{
		id: 17,
		title: "Mizuki Docs",
		imgurl:
			"https://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki 主题官方文档",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["Docs", "主题"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
