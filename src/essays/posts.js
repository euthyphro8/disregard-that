// Post Definition
// {
// 	id: 'uuid', // alpha numeric 4 character id
// 	meta: {
// 		created: 'date',
// 		updated: 'date',
//		version: 'number',
// 		tags: ['string'],
// 		votes: {
// 			love: 'number',
// 			like: 'number',
// 			dislike: 'number',
// 			hate: 'number',
// 		},
// 		comments: 'number',
// 		words: 'number',
// 	},
// 	author: 'string',
// 	title: 'string',
// 	blurb: 'string',
// 	content: 'string',
// },

export default [
	{
		type: 'essay',
		id: 2,
		title: 'The Metaphysics of Free Will',
		content: "So... basically there's no free will.",
		date: '2022-11-10',
	},
	{
		type: 'note',
		id: 1,
		title: 'Ontological Nonsense',
		content: 'Ontology is a complete and utter cluster fuck.',
		date: '2022-04-12',
	},
	{
		id: 3,
		meta: {
			created: '2022-01-10',
			updated: '2022-07-20',
			versions: 1,
			tags: ['epistemology', 'philosophy'],
			votes: {
				love: 10,
				like: 27,
				dislike: 16,
				hate: 4,
			},
			comments: 8,
			words: 340,
		},
		author: 'Rama Hemphill',
		title: 'Philosophy is Hard',
		blurb:
			'Philosophy is hard. Covering the depth and breadth of all branches of philosophy from epistemology to ethics is an enormous task.',
		content: `Philosophy is hard. Covering the depth and breadth of all branches of philosophy from epistemology to ethics is an enormous task. Prolific writers such as Liebniz or Aristotle who made gigantic contributions to so many different fields are probably going to remain a feature of the past. Doing good philosophy is such a challenge we find ourselves in a world where Ph.D scholars may spend a lifetime focusing on a very limited set of subjects yet still risk philosophical failure1. Consequently, we find ourselves in a world in which even senior undergrad or master’s level philosophy students hesitate to engage in current political, religious, or ethical discussions.

This status quo isn’t necessarily bad. However, I don’t think anyone should abstain from modern day discussions because they lack perfectly sound arguments or an oeuvre that includes works on par with the Theodicy. So long as myself, and others, are willing to stick to the rules of civil discussion there is no reason that we cannot engage with even the most difficult philosophical discussions. 

All of this is to say that I will be producing short essays rather than long ones. They will be often incomplete rather than complete. These essays will try to stick to a concise topic, even if I can’t immediately substantiate everything I say with thorough arguments and complete evidence. This will mean that my papers will become better over time as I release additional supporting papers or citations. While this system does have some large downsides I think it will allow people to engage with me in a living breathing philosophical process; this is a benefit that should outweigh all the problems with such a dynamic system. Additionally, since these essays will be updated overtime, I plan on keeping a public archive of previous versions. I also plan on publicly crediting, within the archive, individuals who may lead me to change my beliefs or consider new ideas. And so, I personally invite you to read my work and to critically engage with my thoughts and ideas.
`,
	},
];
