export type Tab = {
	id: "new" | "used" | "type" | "brand";
	label: string;
};

export const tabs: Tab[] = [
	{ id: "new", label: "New Cars For Sale" },
	{ id: "used", label: "Used Cars For Sale" },
	{ id: "type", label: "Browse By Type" },
	{ id: "brand", label: "Browse By Brand" },
];

export type TabContent = {
	[key in Tab["id"]]: string[];
};

export const tabContent: TabContent = {
	new: [
		"Ford Cars",
		"Honda Cars",
		"Hyundai Cars",
		"Infiniti Cars",
		"Jaguar Cars",
		"Jeep Cars",

		"Chrysler Cars",
		"Citroen Cars",
		"Cupra Cars",
		"Dacia Cars",
		"DS Cars",
		"Fiat Cars",

		"Land Rover Cars",
		"Lexus Cars",
		"Mercedes-Benz Cars",
		"Mazda Cars",
		"MG Cars",
		"Kia Cars",

		"Abarth Cars",
		"Romeo Cars",
		"Audi Cars",
		"Bentley Cars",
		"BMW Cars",
		"Chevrolet Cars",

		"Mini Cars",
		"Mitsubishi Cars",
		"Nissan Cars",
		"Peugeot Cars",
		"Porsche Cars",
		"Renault Cars",
	],

	used: [
		"Toyota Used Cars",
		"Honda Used Cars",
		"BMW Used Cars",
		"Mercedes Used Cars",
		"Audi Used Cars",
		"Nissan Used Cars",
		"Hyundai Used Cars",
		"Kia Used Cars",
		"Mazda Used Cars",
		"Ford Used Cars",
		"Volkswagen Used Cars",
		"Chevrolet Used Cars",
	],

	type: [
		"SUV",
		"Sedan",
		"Hatchback",
		"Coupe",
		"Convertible",
		"Pickup Truck",
		"Electric Cars",
		"Hybrid Cars",
		"Luxury Cars",
		"Sports Cars",
		"Family Cars",
		"Off-Road Cars",
	],

	brand: [
		"Toyota",
		"Honda",
		"BMW",
		"Mercedes-Benz",
		"Audi",
		"Ford",
		"Hyundai",
		"Kia",
		"Nissan",
		"Mazda",
		"Volkswagen",
		"Chevrolet",
	],
};
