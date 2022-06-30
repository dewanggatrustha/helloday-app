const tsunamiInformation = {
	disaster: {
		name: "Tsunami",
		definition:
			"A tsunami is a series of extremely long waves caused by a large and sudden displacement of the ocean, usually the result of an earthquake below or near the ocean floor.",
		image: [
			"https://img.okezone.com/content/2022/05/17/337/2595574/5-daftar-angin-puting-beliung-terparah-di-indonesia-terbangkan-atap-hingga-pohon-tumbang-xbP26sSX0j.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYNFanZfxmVtzhNVk-RD48jxqGypnUQ8M4HbIDNi6SQMQv5H5fRbdozD64pk9cR8kaqk&usqp=CAU",
			"https://bnpb.go.id//uploads/new/news/8km5h_z2Jq41.jpeg",
		],
	},
};

const tsunamiInstruction = [
	{
		id: 1,
		name: "Prevented",
		step: [
			"There was an earthquake.",
			"Watch the sea level drop.",
			"Always be aware of the first wave after an earthquake.",
		],
	},
	{
		id: 2,
		name: "When it Happens",
		step: [
			"If at home, direct the family to higher ground and safety.",
			"Avoid saving yourself by crossing bridges and away from rivers or beaches.",
			"When evacuating using a vehicle and congestion occurs, leave the vehicle and evacuate yourself on foot.",
		],
	},
	{
		id: 3,
		name: "Post-Tsunami",
		step: [
			"If the conditions are safe from the tsunami, immediately find a shelter post.",
			"Never ever touch any electrically related equipment.",
			"Listen to further instructions from the BPBD or the shelter post.",
		],
	},
];

export { tsunamiInformation, tsunamiInstruction };
