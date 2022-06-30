const tsunamiInformation = {
	disaster: {
		name: "Tsunami",
		definition:
			"A tsunami is a series of extremely long waves caused by a large and sudden displacement of the ocean, usually the result of an earthquake below or near the ocean floor.",
		image: [
			"https://asset.kompas.com/crops/cKW0Rlts9q27vXhl_gho26h6bm0=/0x0:1992x1328/750x500/data/photo/2020/03/11/5e689e40e618e.jpg",
			"https://images.theconversation.com/files/251862/original/file-20181221-103631-1hh06c8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
			"https://cdn0-production-images-kly.akamaized.net/Qv1LNKK-81bKUifNV4SX2AwVbtU=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1184161/original/079436500_1459140757-tsunami_3.jpg",
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
