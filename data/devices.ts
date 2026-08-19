// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机: [
		{
			name: "Redmi K50 Ultra",
			image: "/images/device/redmi-k50-ultra.webp",
			specs: "骁龙 8+ Gen 1 / 8G+256G",
			description:
				"搭载第一代骁龙 8+ 旗舰处理器，配备 6.67 英寸 1.5K 高刷直屏，5000mAh 大电池 + 120W 神仙秒充，一亿像素主摄。性能与续航兼备的性价比旗舰。",
			link: "https://www.mi.com/redmik50ultra",
		},
	],
};
