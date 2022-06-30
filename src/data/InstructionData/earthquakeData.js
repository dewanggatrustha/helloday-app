const earthquakeInformation = {
	disaster: {
		name: "Earthquake",
		definition:
			"Earthquake is a term used to describe both sudden slip on a fault, and the resulting ground shaking and radiated seismic energy caused by the slip, or by volcanic or magmatic activity, or other sudden stress changes in the earth.",
		image: [
			"https://cdn.britannica.com/34/127134-050-49EC55CD/Building-foundation-earthquake-Japan-Kobe-January-1995.jpg",
			"https://static01.nyt.com/images/2021/08/14/world/14haiti-earthquake-live-us-diaspora1/14haiti-earthquake-live-us-diaspora1-videoSixteenByNine3000.jpg",
			"https://images.newscientist.com/wp-content/uploads/2015/10/mg22830412.800-1_800.jpg?width=800",
		],
	},
};

const earthquakeInstruction = [
	{
		id: 1,
		name: "Indoor",
		step: [
			"Electronic devices are experiencing strange interference at home.",
			"The animal's behavior is restless and suddenly disappears.",
			"If there has been a small earthquake there is usually a bigger big earthquake.",
		],
	},
	{
		id: 2,
		name: "Outdoor",
		step: [
			"If you are driving, stop on the side of the road, but try to stop far from trees and objects, buildings that are more or less dangerous.",
			"If you are in the center of a crowd, avoid jostling and go to a large field.",
			"Close your nose and breathe through your mouth so that the smoke doesn't enter your lungs.",
		],
	},
	{
		id: 3,
		name: "Post-Earthquake",
		step: [
			"Reconstruct the building if the building collapses.",
			"Evaluate the risks that are dangerous in the event of another earthquake.",
		],
	},
];

export { earthquakeInformation, earthquakeInstruction };
