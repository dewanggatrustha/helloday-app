const floodInformation = {
	disaster: {
		name: "Flood",
		definition:
			"Flood is the inundation of a place due to the overflow of water that exceeds the water disposal capacity in an area and causes physical, social and economic losses.",
		image: [
			"https://img.okezone.com/content/2022/04/30/408/2587626/selain-indonesia-ini-5-negara-sering-dilanda-banjir-A2OAfidSQp.jpg",
			"https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rumah-rumah-warga-terendam-banjir-setelah-hujan-m.jpg",
			"https://img.okezone.com/content/2018/08/19/18/1938543/sedikitnya-357-orang-tewas-akibat-bencana-banjir-muson-india-sMdowGvO1n.jpg",
		],
	},
};

const floodInstruction = [
	{
		id: 1,
		name: "Prevented",
		step: [
			"Maintain and clean drains regularly.",
			"Increase green open land.",
			"Do not build buildings on the banks of rivers and forests.",
		],
	},
	{
		id: 2,
		name: "When it Happens",
		step: [
			"Move to high ground for evacuation.",
			"Immediately turn off the power grid.",
			"Pay attention to the water channel or the place where the water will pass through.",
		],
	},
	{
		id: 3,
		name: "Post-Flood",
		step: [
			"Immediately clean the house from the rest of the water from flooding, mud and garbage.",
			"Watch and beware of animals such as snakes, mice, cockroaches, flies and mosquitoes.",
			"Make greenery around the flood area.",
		],
	},
];

export { floodInformation, floodInstruction };
