export const blogs = [
	{
		id: 1,
		title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
		category: "Sound",
		image: "/images/blogs/1.jpg",
		author: "Admin",
		date: "November 22, 2023",
		slug: "/blog/bmw-alpina-xb7-2024",
	},
	{
		id: 2,
		title: "BMW X6 M50i is designed to exceed your sportiest expectations",
		category: "Accessories",
		image: "/images/blogs/2.jpg",
		author: "Admin",
		date: "November 22, 2023",
		slug: "/blog/bmw-x6-m50i-review",
	},
	{
		id: 3,
		title: "BMW X5 Gold 2024 Sport Review: Light on Sport",
		category: "Exterior",
		image: "/images/blogs/3.jpg",
		author: "Admin",
		date: "November 22, 2023",
		slug: "/blog/bmw-x5-gold-2024",
	},
];

export type Blog = (typeof blogs)[number];
