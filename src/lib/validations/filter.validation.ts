import z from "zod/v3";

export const landingFilterSchema = z.object({
	type: z.enum(["all", "new", "used"]).default("all"),
	make: z.string().optional(),
	model: z.string().optional(),
	price: z.string().optional(),
});

export type LandingFilterInput = z.infer<typeof landingFilterSchema>;
