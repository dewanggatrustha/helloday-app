const tornadoInformation = {
	disaster: {
		name: "Tornado",
		definition:
			"Tornado is a strong wind vortex with a speed of 120 kilometers/hour or more. Tornadoes often occur in the tropics between the Tropic of Cancer, exceptin areas very close to the equator.",
		image: [
			"https://img.okezone.com/content/2022/05/17/337/2595574/5-daftar-angin-puting-beliung-terparah-di-indonesia-terbangkan-atap-hingga-pohon-tumbang-xbP26sSX0j.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYNFanZfxmVtzhNVk-RD48jxqGypnUQ8M4HbIDNi6SQMQv5H5fRbdozD64pk9cR8kaqk&usqp=CAU",
			"https://bnpb.go.id//uploads/new/news/8km5h_z2Jq41.jpeg",
		],
	},
};

const tornadoInstruction = [
	{
		id: 1,
		name: "Initial Symptoms",
		step: [
			"The air was hot and stifling.",
			"There appears to be the growth of clustered white clouds in layers (Cumulus).",
			"The tree branches and leaves were swaying fast because the wind was blowing and the strong wind was approaching.",
		],
	},
	{
		id: 2,
		name: "When it Happens",
		step: [
			"If the situation is dangerous, immediately go to the shelter(Bunker)",
			"Stay away from the corners of the room, windows, doors, and outer walls of buildings.",
			"Hide under a table using your arms to protect your head and neck. Never open a window.",
		],
	},
	{
		id: 3,
		name: "Post-Tornado",
		step: [
			"If there is a victim, give help immediately.",
			"Report to the authorized officer if there is damage to electricity, gas and so on.",
			"Building reconstruction if the building collapses.",
		],
	},
];

export { tornadoInformation, tornadoInstruction };
