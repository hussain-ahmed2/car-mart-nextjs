export const testimonials = [
	{
		id: 1,
		name: "Ali Tufan",
		role: "Designer",
		avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating: 5,
		review: "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
	},
	{
		id: 2,
		name: "Sarah Johnson",
		role: "Product Manager",
		avatar: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating: 5,
		review: "Fantastic experience from start to finish. The process was smooth, transparent, and the staff were incredibly helpful.",
	},
	{
		id: 3,
		name: "Michael Brown",
		role: "Software Engineer",
		avatar: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating: 4,
		review: "Great customer service and competitive pricing. I felt well-informed and confident throughout my purchase.",
	},
	{
		id: 4,
		name: "Emily Carter",
		role: "Marketing Specialist",
		avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating: 5,
		review: "Absolutely loved the service! Friendly staff, quick responses, and no pressure at any point.",
	},
	{
		id: 5,
		name: "David Wilson",
		role: "Business Owner",
		avatar: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating: 4,
		review: "Very professional team. Everything was handled efficiently and exceeded my expectations.",
	},
];

export type Testimonial = (typeof testimonials)[number];
